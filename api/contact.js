/* eslint-env node */
/// <reference types="node" />

import nodemailer from "nodemailer";

function sendJson(res, statusCode, body) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const bodyString = Buffer.concat(chunks).toString("utf8");
  if (!bodyString) return {};
  return JSON.parse(bodyString);
}

export default async function handler(req, res) {
  // 1) 메서드 체크
  if (req.method !== "POST") {
    return sendJson(res, 405, {
      ok: false,
      error: "METHOD_NOT_ALLOWED",
    });
  }

  try {
    // 2) Body 파싱
    const { name, email, message } = await readJsonBody(req);

    if (!name || !email || !message) {
      return sendJson(res, 400, {
        ok: false,
        error: "MISSING_FIELDS",
      });
    }

    const { MAIL_USER, MAIL_PASS, MAIL_TO } = process.env;

    // 3) 환경변수 체크
    if (!MAIL_USER || !MAIL_PASS) {
      return sendJson(res, 500, {
        ok: false,
        error: "MAIL_CONFIG_MISSING",
      });
    }

    // 4) 메일 전송
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"424PF Contact" <${MAIL_USER}>`,
      to: MAIL_TO || MAIL_USER,
      subject: `[424PF] 새 문의 - ${name}`,
      text: `
이름: ${name}
이메일: ${email}

메시지:
${message}
      `.trim(),
    });

    // 5) 성공 응답
    return sendJson(res, 200, {
      ok: true,
      msg: "MAIL_SENT",
    });
  } catch (err) {
    console.error("contact api error:", err);

    return sendJson(res, 500, {
      ok: false,
      error: err.message || "INTERNAL_SERVER_ERROR",
    });
  }
}
