import { useState, useRef } from "react";

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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">AI Speech Transcriber</h2>
      <div className="space-x-2">
        <button 
          onClick={startListening} 
          disabled={isListening} 
          className={`p-2 rounded ${isListening ? 'bg-gray-500' : 'bg-green-500'} text-white`}
        >
          {isListening ? "Listening..." : "Start Transcription"}
        </button>
        <button 
          onClick={stopListening}
          disabled={!isListening}
          className={`p-2 rounded ${!isListening ? 'bg-gray-500' : 'bg-red-500'} text-white`}
        >
          Stop
        </button>
      </div>
      {error && (
        <div className="mt-2 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
          {error.includes('network') && (
            <p className="text-sm mt-1">
              Try: 
              1. Checking your internet connection
              2. Refreshing the page
              3. Using a different browser (Chrome recommended)
            </p>
          )}
        </div>
      )}
      <p className="mt-4 p-2 border rounded bg-white min-h-[100px]">{text}</p>
    </div>
  );
};

export default SpeechTranscriber;
