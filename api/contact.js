import nodemailer from "nodemailer";

async function readJsonBody(req) { /* 지금 쓰는 거 그대로 두면 됨 */ }

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "Method Not Allowed" }));
    return;
  }

  try {
    const { name, email, message } = await readJsonBody(req);

    // 1) 메일 서버 설정 (Gmail 기준 예시)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 2) 실제 메일 보내기
    await transporter.sendMail({
      from: `"424PF Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: `[424PF] 새 문의 - ${name}`,
      text: `
이름: ${name}
이메일: ${email}

메시지:
${message}
      `.trim(),
    });

    // 3) 성공 응답
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        ok: true,
        msg: "mail sent",
      })
    );
  } catch (err) {
    console.error("contact api error:", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "INTERNAL_SERVER_ERROR" }));
  }
}

