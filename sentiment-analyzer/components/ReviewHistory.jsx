import { useState } from 'react';

const ReviewHistory = ({ history = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!Array.isArray(history)) return <p>Error loading history.</p>;

  const filtered = history.filter((item) =>
    item.review.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.result.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (score) => {
    if (typeof score !== 'number') return 'N/A';
    const stars = Math.round(score * 5); // scale to 5-star rating
    return (
      <span style={{ color: '#fbbf24' }}>
        {'★'.repeat(stars)}
        {'☆'.repeat(5 - stars)}
      </span>
    );
  };

  const toPercentage = (score) => {
    if (typeof score !== 'number') return 'N/A';
    return `${Math.round(score * 100)}%`;
  };

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search reviews or sentiment..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          marginBottom: '20px',
          fontSize: '14px',
        }}
      />

      {filtered.length === 0 ? (
        <p style={{ color: 'gray' }}>No reviews found.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
          }}
        >
          {filtered.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#fff',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                padding: '16px',
                border: '1px solid #eee',
              }}
            >
              <p style={{ fontSize: '14px', marginBottom: '8px' }}>
                <strong>Review:</strong> {item.review}
              </p>
              <p style={{ fontSize: '14px', marginBottom: '6px' }}>
            <strong>Sentiment:</strong>{' '}
            <span
            style={{
              display: 'inline-block',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              color: '#fff',
              backgroundColor:
                item.result === 'positive'
                  ? '#22c55e'
                  : item.result === 'negative'
                  ? '#ef4444'
                  : '#64748b',
            }}
            >
            {item.result}
            </span>
            </p>

              <p style={{ fontSize: '14px', marginBottom: '4px' }}>
                <strong>Sentiment Score:</strong> {toPercentage(item.score)}
              </p>
              <p style={{ fontSize: '14px' }}>
                <strong>Rating:</strong> {renderStars(item.score)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewHistory;
