const express = require("express");
const cors = require("cors");

const app = express();

// CORS 미들웨어 사용
app.use(cors());

app.get("/api/time", (req, res) => {
  const date = new Date();
  const YYYY = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const DD = String(date.getDate()).padStart(2, "0");
  const HH = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");

  const data = `${YYYY}-${MM}-${DD} ${HH}:${mm}:${ss}`;
  console.log("server", data);

  res.status(200).json(data);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
