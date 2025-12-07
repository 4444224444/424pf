// api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // 1) POST 말고 들어오면 컷
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: "필수 값이 누락되었다.",
      });
    }

    // 2) 메일 서버 설정 (SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // 예: smtp.gmail.com
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // 465면 true
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 3) 실제 메일 보내기
    await transporter.sendMail({
      from: `"424PF Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || process.env.SMTP_USER, // 받을 메일
      subject: `[424PF] 새 메시지 - ${name}`,
      text: [
        `이름: ${name}`,
        `이메일: ${email}`,
        "",
        "===== 메시지 내용 =====",
        message,
      ].join("\n"),
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact api error:", err);
    return res.status(500).json({
      ok: false,
      error: "메일 전송 중 서버 오류가 발생했다.",
    });
  }
}
