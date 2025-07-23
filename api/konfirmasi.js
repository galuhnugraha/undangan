export default async function handler(req, res) {
  const { partisipanID } = req.query;

  try {
    const response = await fetch(`http://36.67.190.179:7085/BMSApi/api/website/konfirmasi-kehadiran?partisipanID=${partisipanID}`);
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Gagal mengambil data dari backend' });
  }
}
