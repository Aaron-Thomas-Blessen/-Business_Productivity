# IBM WatsonX AI Suite

An enterprise-grade AI solution that leverages IBM watsonx.ai to automate and enhance business operations through intelligent virtual agents.

## 🚀 Features

### 1. AI Voice to Text
- Real-time speech transcription
- Multi-language support
- Automatic punctuation and formatting

### 2. Meeting Insights
- Automatic meeting transcription
- Key points summarization
- Action item extraction and assignment

### 3. Workforce Productivity
- Team performance analytics
- Workflow optimization
- Resource allocation assistance

### 4. Customer Relations
- Automated customer engagement
- Lead prioritization
- Sales opportunity forecasting

### 5. Knowledge Base
- Instant access to company information
- Smart document search
- Policy question answering

### 6. Email Management
- Intelligent email prioritization
- Response suggestions
- Automated scheduling

## 🛠️ Technology Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Icons**: Tabler Icons
- **AI Models**: IBM watsonx.ai Granite
- **Analytics**: Streamlit
- **API Integration**: IBM Cloud

## 🚦 Getting Started

### Prerequisites
```bash
node >= 16.0.0
npm >= 8.0.0
python >= 3.8
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ibm-watsonx-suite.git
cd ibm-watsonx-suite
```

2. Install dependencies:
```bash
npm install
```

3. Create .env file:
```bash
cp .env.example .env
# Add your IBM API credentials
```

4. Start the development server:
```bash
npm run dev
```

5. Start Streamlit services:
```bash
cd Stream
streamlit run Generate.py  # Meeting Insights
streamlit run Intelligent.py  # Email Management
streamlit run Knowledge.py  # Knowledge Base
streamlit run Optimize.py  # Workforce Productivity
streamlit run Relation.py  # Customer Relations
```

## 📝 Environment Variables

Create a `.env` file with:
```bash
IBM_API_TOKEN=your_api_token
REACT_APP_IBM_PROJECT_ID=your_project_id
```

## 🔧 Configuration

Port mappings for services:
- React App: 5173
- Meeting Insights: 8501
- Email Management: 8502
- Knowledge Base: 8503
- Workforce Productivity: 8504
- Customer Relations: 8505

## 📚 Documentation

- [IBM watsonx Documentation](https://www.ibm.com/docs/en/watsonx-as-a-service)
- [React Documentation](https://react.dev)
- [Streamlit Documentation](https://docs.streamlit.io)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- IBM watsonx team
- React community
- Streamlit team
- All contributors
