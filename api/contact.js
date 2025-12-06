// api/contact.js

// Node 서버리스 함수에서 JSON body 직접 읽어오는 헬퍼
async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const bodyString = Buffer.concat(chunks).toString("utf8");
  if (!bodyString) return {};
  return JSON.parse(bodyString);
}

// ESM 환경이니까 export default 사용
export default async function handler(req, res) {
  // GET으로 직접 주소 찍어볼 때는 405 돌려줌
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "Method Not Allowed" }));
    return;
  }

  try {
    const { name, email, message } = await readJsonBody(req);

    console.log("contact payload:", { name, email, message });

    // 여기서는 메일 안 보내고, 그냥 성공 응답만 보내기
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        ok: true,
        msg: "contact function alive",
        received: { name, email, message },
      })
    );
  } catch (err) {
    console.error("contact api error:", err);

    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        ok: false,
        error: "INTERNAL_SERVER_ERROR",
      })
    );
  }
}
