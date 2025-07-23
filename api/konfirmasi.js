export default async function handler(req, res) {
  const { partisipanID } = req.query;

  if (!partisipanID) {
    return res.status(400).json({ error: 'Missing partisipanID' });
  }

  try {
    const response = await fetch(`http://36.67.190.179:7085/BMSApi/api/website/konfirmasi-kehadiran?partisipanID=${partisipanID}`);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    return res.status(500).json({ error: 'Gagal mengambil data dari backend' });
  }
}
