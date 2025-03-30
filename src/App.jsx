import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SpeechTranscriber from "./pages/SpeechTranscriber";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speech" element={<SpeechTranscriber />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
