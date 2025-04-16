import { useEffect, useState } from 'react';
import ReviewForm from '../components/ReviewForm';
import ReviewHistory from '../components/ReviewHistory';
import { fetchHistory } from '../services/api';

function App() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const res = await fetchHistory();
        if (Array.isArray(res)) {
          setHistory(res);
        } else {
          console.warn('Invalid history data:', res);
          setHistory([]);
        }
      } catch (err) {
        console.error('Failed to fetch history', err);
        setHistory([]);
      }
    };
    loadHistory();
  }, []);

  const handleNewResult = (newItem) => {
    setHistory((prev) => [newItem, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Movie Review Sentiment Analyzer
      </h1>

      <div className="w-full max-w-xl border rounded-lg p-6 shadow-sm bg-gray-50">
        <ReviewForm onResult={handleNewResult} />
      </div>

      <div className="w-full max-w-xl mt-8">
        <ReviewHistory history={history} />
      </div>
    </div>
  );
}

export default App;
