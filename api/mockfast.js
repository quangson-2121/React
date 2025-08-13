export default async function handler(req, res) {
  try {
    const response = await fetch("https://mockfast.io/backend/apitemplate/get/ZCKZ8H8MTA");
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
