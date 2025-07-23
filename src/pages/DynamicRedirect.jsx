import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function DynamicRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const partisipanID = params.get('partisipanID');

    if (partisipanID) {
      navigate(`/partisipant/${partisipanID}`, { replace: true });
    } else {
      navigate('/partisipant/default-id', { replace: true });
    }
  }, [location, navigate]);

  return <div>Redirecting...</div>;
}

export default DynamicRedirect;
