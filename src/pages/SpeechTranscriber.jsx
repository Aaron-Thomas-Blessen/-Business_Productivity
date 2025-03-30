import { useState, useRef } from "react";
import { IconMicrophone, IconMicrophoneOff, IconRefresh } from '@tabler/icons-react';

const SpeechTranscriber = () => {
  const [text, setText] = useState("Click 'Start' to transcribe...");
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState(null);
  const recognitionRef = useRef(null);

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Speech recognition is not supported in this browser');
      return;
    }

    setError(null);
    const recognition = new window.webkitSpeechRecognition();
    recognitionRef.current = recognition;
    
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      setText(transcript);
    };

    recognition.onerror = (event) => {
      if (event.error === 'network') {
        setError('Network error. Please check your internet connection.');
      } else {
        setError(`Error: ${event.error}`);
      }
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    try {
      recognition.start();
      setIsListening(true);
    } catch (err) {
      setError(`Failed to start: ${err.message}`);
      setIsListening(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      {/* Header */}
      <header className="bg-black py-4 mb-8">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-2xl font-bold">AI Speech Transcriber</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Controls */}
          <div className="flex space-x-4 mb-6">
            <button 
              onClick={startListening} 
              disabled={isListening} 
              className={`flex items-center px-4 py-2 rounded-lg transition-all
                ${isListening 
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                  : 'bg-[#4589ff] text-white hover:bg-[#1d6cf5]'}`}
            >
              <IconMicrophone className="w-5 h-5 mr-2" />
              {isListening ? "Listening..." : "Start Transcription"}
            </button>
            <button 
              onClick={stopListening}
              disabled={!isListening}
              className={`flex items-center px-4 py-2 rounded-lg transition-all
                ${!isListening 
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                  : 'bg-[#da1e28] text-white hover:bg-[#bc1a23]'}`}
            >
              <IconMicrophoneOff className="w-5 h-5 mr-2" />
              Stop
            </button>
            <button
              onClick={() => setText("Click 'Start' to transcribe...")}
              className="flex items-center px-4 py-2 rounded-lg bg-gray-100 
                hover:bg-gray-200 text-gray-700 transition-all"
            >
              <IconRefresh className="w-5 h-5 mr-2" />
              Clear
            </button>
          </div>

          {/* Error Messages */}
          {error && (
            <div className="mb-6 p-4 bg-[#fff1f1] border-l-4 border-[#da1e28] text-[#525252]">
              <p className="font-medium text-[#da1e28]">{error}</p>
              {error.includes('network') && (
                <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                  <li>Check your internet connection</li>
                  <li>Refresh the page</li>
                  <li>Use a different browser (Chrome recommended)</li>
                </ul>
              )}
            </div>
          )}

          {/* Transcription Output */}
          <div className="relative">
            <div className="absolute top-2 right-2 text-xs text-gray-500">
              {isListening && "Recording..."}
            </div>
            <div className="w-full min-h-[200px] p-4 bg-[#f4f4f4] rounded-lg 
              border border-gray-200 font-mono text-[#161616] whitespace-pre-wrap">
              {text}
            </div>
          </div>

          {/* Help Text */}
          <p className="mt-4 text-sm text-gray-600">
            Tip: Speak clearly and at a normal pace for best results. 
            Supported in Chrome and Edge browsers.
          </p>
        </div>
      </main>

   
    </div>
  );
};

export default SpeechTranscriber;