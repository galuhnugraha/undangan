import { useMediaQuery } from 'react-responsive';
import QRCode from 'react-qr-code';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const { id } = useParams(); 

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (!id) return;

      axios.get('/api/konfirmasi', {
      params: { partisipanID: id }
    })
    .then((res) => {
      setData(res.data.returnValue);
      console.log(res,"res");
    })
    .catch((err) => {
      console.error('Gagal ambil data partisipan:', err);
    })
    .finally(() => {
      setLoading(false);
    });
}, [id]);


  if (loading) return <div className="loading">Loading...</div>;
  if (!data) return <div className="loading">Data tidak ditemukan.</div>;

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <div className="card">
          <h2 className="card-title">Ulang Tahun <br />Bintang Motor</h2>

          <div className="qr-wrapper">
            <div
              className="qr-box"
              style={{ width: isMobile ? '160px' : '256px', aspectRatio: '1 / 1' }}
            >
              <QRCode
                value={`${data.partisipan_id}`} 
                level="M"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>

          <h4>{data.nama_peserta}</h4>
          <p className="card-subtext">{data.perusahaan}</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default UserPage;
