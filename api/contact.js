// api/contact.js
@ts-nocheck
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // 1) POST 메서드만 허용
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  // 2) 요청 바디에서 값 꺼내기
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }

  try {
    // 3) 메일 전송기 세팅
    const transporter = nodemailer.createTransport({
      service: "Naver", // 네이버 쓰면 Naver, 지메일이면 "Gmail"
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 4) 메일 내용 설정
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.TARGET_MAIL || process.env.MAIL_USER,
      subject: `[Portfolio] New message from ${name}`,
      text: `
이름: ${name}
이메일: ${email}

메시지:
${message}
      `,
    };

    // 5) 메일 보내기
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return res.status(500).json({ ok: false, error: "Mail send failed" });
  }
}
