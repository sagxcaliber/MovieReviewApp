import { useEffect, useState } from 'react';
import ReviewForm from '../components/ReviewForm';
import ReviewHistory from '../components/ReviewHistory';
import { fetchHistory } from '../services/api';

function App() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await fetchHistory();
      setHistory(res.data);
    } catch (err) {
      console.error('Error loading history', err);
    }
  };

  const handleNewResult = (newItem) => {
    setHistory((prev) => [newItem, ...prev]);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        fontFamily: 'Segoe UI, sans-serif',
        padding: '20px',
      }}
    >
      {/* Hero Banner */}
      <div
        style={{
          background: '#1e40af',
          color: 'white',
          padding: '40px 20px',
          borderRadius: '12px',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto 40px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
        }}
      >
        <div style={{ fontSize: '42px' }}>🎥</div>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', margin: '10px 0' }}>
          Movie Mood Meter
        </h1>
        <p style={{ fontSize: '16px', opacity: 0.9 }}>
          Instantly analyze movie reviews using AI-powered sentiment detection.
        </p>
      </div>

      {/* Review Form Card */}
      <div
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '12px',
          maxWidth: '700px',
          margin: '0 auto',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        }}
      >
        <ReviewForm onResult={handleNewResult} />
      </div>

      {/* History Section */}
      <div
        style={{
          maxWidth: '700px',
          margin: '40px auto 0',
          padding: '0 10px',
        }}
      >
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
          Review History
        </h2>
        <ReviewHistory history={history} />
      </div>
    </div>
  );
}

export default App;
