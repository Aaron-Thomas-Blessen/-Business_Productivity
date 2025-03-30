import { useNavigate } from "react-router-dom";
import { IconMicrophone, IconMail, IconUsers, IconBriefcase, IconBook, IconMessageCircle } from '@tabler/icons-react';

const Home = () => {
  const navigate = useNavigate();

  const redirectToStreamlit = () => {
    window.location.href = 'http://localhost:8501/';
  };

  const redirectToOptimize = () => {
    window.location.href = 'http://localhost:8504/';
  };

  const redirectToRelations = () => {
    window.location.href = 'http://localhost:8505/';
  };

  const redirectToKnowledge = () => {
    window.location.href = 'http://localhost:8503/';
  };

  const redirectToEmail = () => {
    window.location.href = 'http://localhost:8502/';
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      {/* IBM-style header */}
      <header className="bg-black py-4">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-2xl font-bold">IBM WatsonX AI Suite</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-12">
        <h2 className="text-[#161616] text-3xl font-light mb-8">Enterprise Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            icon={<IconMicrophone className="w-8 h-8" />}
            title="AI Voice to Text"
            description="Convert speech to text with advanced AI processing"
            onClick={() => navigate('/speech')}
            color="bg-[#4589ff]"
          />
          <Card 
            icon={<IconMessageCircle className="w-8 h-8" />}
            title="Meeting Insights"
            description="Automate meeting summaries and action items"
            onClick={redirectToStreamlit}
            color="bg-[#08bdba]"
          />
          <Card 
            icon={<IconBriefcase className="w-8 h-8" />}
            title="Workforce Productivity"
            description="Optimize team performance and workflow"
            onClick={redirectToOptimize}
            color="bg-[#ff7eb6]"
          />
          <Card 
            icon={<IconUsers className="w-8 h-8" />}
            title="Customer Relations"
            description="Enhance customer engagement and support"
            onClick={redirectToRelations}
            color="bg-[#d4bbff]"
          />
          <Card 
            icon={<IconBook className="w-8 h-8" />}
            title="Knowledge Base"
            description="Access company information efficiently"
            onClick={redirectToKnowledge}
            color="bg-[#3ddbd9]"
          />
          <Card 
            icon={<IconMail className="w-8 h-8" />}
            title="Email Management"
            description="Intelligent email handling and response"
            onClick={redirectToEmail}
            color="bg-[#be95ff]"
          />
        </div>
      </main>

    
    </div>
  );
};

// Card component for consistent styling
const Card = ({ icon, title, description, onClick, color }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-start p-6 rounded-lg bg-white border border-gray-200 hover:border-[#4589ff] transition-all duration-200 shadow-sm hover:shadow-md w-full text-left"
  >
    <div className={`${color} p-3 rounded-lg text-white mb-4`}>
      {icon}
    </div>
    <h3 className="text-[#161616] text-xl font-semibold mb-2">{title}</h3>
    <p className="text-[#525252] text-sm">{description}</p>
  </button>
);

export default Home;