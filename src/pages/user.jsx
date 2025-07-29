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

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axios.get(`https://dev.bintangmotor.co.id/BMSApi/api/website/konfirmasi-kehadiran?partisipanID=${id}`, {
      params: { partisipanID: id }
    })
    .then((res) => {  
      if (res.data?.returnValue) {
        console.log(res.data.returnValue,"return value");
        setData(res.data.returnValue);
      } else {
        console.warn('API sukses tapi returnValue kosong:', res.data);
        setData(null);
      }
    })
    .catch((err) => {
      console.error('Gagal ambil data partisipan:', err);
      setData(null);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!data || !data.partisipan_id) return <div className="loading">Data tidak ditemukan.</div>;

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <div className="card">
          <h2 className="card-title">
            {data?.nama_event?.includes(" ") ? (
              <>
                {data.nama_event.split(" ").slice(0, 2).join(" ")}<br />
                {data.nama_event.split(" ").slice(2).join(" ")}
              </>
            ) : data.nama_event}
          </h2>

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

         
          <div className="participant-info">
            <h3 className="participant-name">{data.nama_peserta}</h3>
            <p className="participant-company">{data.perusahaan}</p>
            <span className={`participant-priority ${data.prioritas?.toLowerCase()}`}>
            {data.prioritas}
          </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default UserPage;
