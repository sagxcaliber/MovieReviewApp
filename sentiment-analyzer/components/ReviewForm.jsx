import { useState } from 'react';
import { submitReview } from '../services/api';

const ReviewForm = ({ onResult }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    try {
      const res = await submitReview(text);

      if (res && res.review) {
        onResult(res);
      }
      setText('');
    } catch (err) {
      console.error('Failed to submit review', err);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: '720px',
        margin: '40px auto',
        padding: '32px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        border: '1px solid #e5e7eb',
        fontFamily: 'sans-serif'
      }}
    >
      <h1
        style={{
          fontSize: '28px',
          fontWeight: '800',
          color: '#1e3a8a',
          marginBottom: '8px',
        }}
      >
        Analyze sentiment
      </h1>
      <p
        style={{
          fontSize: '14px',
          color: '#2563eb',
          marginBottom: '24px',
        }}
      >
        Detect the general sentiment expressed in a Movie review by using LLM as NLP classifier.
      </p>

      <h2
        style={{
          fontSize: '22px',
          fontWeight: '700',
          color: '#1e40af',
          marginBottom: '12px',
        }}
      >
        Write review
      </h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          placeholder="Write your movie review here..."
          style={{
            width: '100%',
            padding: '16px',
            fontSize: '14px',
            borderRadius: '12px',
            border: '1px solid #d1d5db',
            backgroundColor: '#f3f4f6',
            resize: 'none',
            marginBottom: '16px',
            color: '#111827',
          }}
        />
        <button
          type="submit"
          disabled={!text || loading}
          style={{
            width: '100%',
            padding: '14px',
            fontWeight: '600',
            color: 'white',
            borderRadius: '12px',
            backgroundColor: !text || loading ? '#93c5fd' : '#2563eb',
            cursor: !text || loading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s ease',
            border: 'none',
          }}
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
