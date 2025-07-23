export default async function handler(req, res) {
  const { partisipanID } = req.query;

  const apiURL = `http://36.67.190.179:7085/BMSApi/api/website/konfirmasi-kehadiran?partisipanID=${partisipanID}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data dari backend' });
  }
}
