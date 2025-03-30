import { useState, useEffect } from 'react';
import { generateText } from '../components/generateText';

const Home = () => {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSummary = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await generateText();
      setSummary(response.results[0].generated_text);
    } catch (err) {
      setError('Failed to generate summary. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Meeting Summary Generator</h1>
      
      <button 
        onClick={fetchSummary}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Summary'}
      </button>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {summary && (
        <div className="bg-white shadow-md rounded px-8 py-6">
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      )}
    </div>
  );
};

export default Home;