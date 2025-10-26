import fetch from "node-fetch";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch("https://combustivelapi.com.br/api/precos");
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
}
