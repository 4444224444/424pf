// api/contact.cjs

module.exports = (req, res) => {
  // 순수 Node 응답 방식 (Express 아님)
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      ok: true,
      method: req.method,
      msg: "contact function alive",
    })
  );
};
