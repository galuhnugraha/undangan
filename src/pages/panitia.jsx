import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../App.css';

function Panitia() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axios.get('http://36.67.190.179:7085/BMSApi/api/website/konfirmasi-kehadiran', {
      params: { partisipanID: id }
    })
      .then(res => {
        setData(res.data.returnValue);
      })
      .catch(err => {
        console.error('Gagal ambil data partisipan:', err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!data) return <div className="loading">Data tidak ditemukan.</div>;

  const updateData = () => {
    axios.post('http://36.67.190.179:7085/BMSApi/api/website/update-kehadiran', {
      partisipan_id: id,
      keterangan: 'HADIR'
    })
      .then(res => {
        alert('Konfirmasi kehadiran berhasil!');
      })
      .catch(err => {
        alert('Gagal konfirmasi kehadiran.');
        console.error(err);
      });
  };

  return (
    <div className="app-container">
      <Header />

      <h5 className="section-title">Konfirmasi Kehadiran</h5>


      <main className="main-content">
        <div className="card-new">
          <div className="wrapper-name">
            <h5 className="label">Nama Peserta</h5>
            <h5 className="value">{data.nama_peserta}</h5>
          </div>

          <div className="wrapper-name">
            <h5 className="label">Telepon</h5>
            <h5 className="value">{data.telepon || '-'}</h5>
          </div>

          <div className="wrapper-name">
            <h5 className="label">Perusahaan</h5>
            <h5 className="value">{data.perusahaan}</h5>
          </div>

          <div className="wrapper-name">
            <h5 className="label">Jabatan</h5>
            <h5 className="value">{data.jabatan || '-'}</h5>
          </div>

          <div className="wrapper-name">
            <h5 className="label">Prioritas</h5>
            <h5 className="value">{data.prioritas || '-'}</h5>
          </div>

          <div className="button-wrapper">
            <button className="confirm-button" onClick={updateData}>HADIR</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Panitia;
