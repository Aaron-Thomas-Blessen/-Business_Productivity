import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const redirectToStreamlit = () => {
    window.location.href = 'http://localhost:8501/';
  };

  const redirectToOptimize = () => {
    window.location.href = 'http://localhost:8501/';
  };

  const redirectToRelations = () => {
    window.location.href = 'http://localhost:8501/';
  };

  const redirectToKnowledge = () => {
    window.location.href = 'http://localhost:8501/';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <button
        onClick={() => navigate('/speech')}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        AI Voice to Text
      </button>
      <button
        onClick={redirectToStreamlit}
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Automate Meeting Insights
      </button>
      <button
        onClick={redirectToOptimize}
        className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
      >
        Workforce Productivity
      </button>
      <button
        onClick={redirectToRelations}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Customer Relations
      </button>
      <button
        onClick={redirectToKnowledge}
        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        Company Knowledge Base
      </button>
    </div>
  );
};

export default Home;