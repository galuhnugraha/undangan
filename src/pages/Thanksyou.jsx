import Header from '../component/Header';
import Footer from '../component/Footer';

function ThankYou() {
  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main
        className="main-content"
        style={{
          // display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          backgroundColor: '#f0f4f8',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '3rem 4rem',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            maxWidth: '400px',
            width: '100%',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '64px', height: '64px', marginBottom: '1rem', color: '#4BB543' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>

          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#333' }}>Terima Kasih!</h2>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Konfirmasi kehadiran berhasil. Silakan tutup tab ini.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default ThankYou;
