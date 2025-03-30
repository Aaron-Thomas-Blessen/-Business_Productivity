import { useState } from "react";

const SpeechTranscriber = () => {
  const [text, setText] = useState("Click 'Start' to transcribe...");
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition(); // Chrome-only
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
      console.error("Speech recognition error", event);
    };

    recognition.start();
    setIsListening(true);

    setTimeout(() => {
      recognition.stop();
      setIsListening(false);
    }, 10000); // Stops after 10 sec
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">AI Speech Transcriber</h2>
      <button onClick={startListening} disabled={isListening} className="bg-green-500 text-white p-2 rounded">
        {isListening ? "Listening..." : "Start Transcription"}
      </button>
      <p className="mt-4 p-2 border">{text}</p>
    </div>
  );
};

export default SpeechTranscriber;
