// src/components/ReviewHistory.jsx

const ReviewHistory = ({ history = [] }) => {
  if (!Array.isArray(history)) return <p>Error loading history.</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Review History</h2>
      {history.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        <ul className="space-y-4">
          {history.map((item, index) => (
            <li key={index} className="border rounded-md p-4 shadow-sm bg-white">
              <p><strong>Review:</strong> {item.review}</p>
             <p>
  <strong>Sentiment:</strong> {item.result} ({typeof item.score === 'number' ? item.score.toFixed(2) : 'N/A'})
</p>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewHistory;
