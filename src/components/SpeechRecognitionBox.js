import React, { useEffect, useRef, useState } from "react";
import FrequencyBar from "./FrequencyBar";
import "./SpeechRecognitionBox.css";

function SpeechRecognitionBox() {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Web Speech API");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) =>
      setText(event.results[0][0].transcript);

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => recognitionRef.current?.start();
  const stopListening = () => recognitionRef.current?.stop();

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(text || "Hello from Voice App");
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="speech-box">
      <FrequencyBar active={isListening} />
      <textarea
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Speak something or type..."
      />
      <div className="buttons">
        <button className="round" onClick={startListening} disabled={isListening}>🎤</button>
        <button onClick={stopListening} disabled={!isListening}>🛑 Stop</button>
        <button onClick={speakText}>🔊 Speak</button>
        <button onClick={copyToClipboard}>📋 Copy</button>
      </div>
    </div>
  );
}

export default SpeechRecognitionBox;
