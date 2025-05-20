import React from "react";
import Navbar from "./components/Navbar";
import SpeechRecognitionBox from "./components/SpeechRecognitionBox";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <SpeechRecognitionBox />
        <section id="about" className="about">
          <h2>About</h2>
          <p>This app uses the Web Speech API to transcribe your speech and speak your text. Built with ReactJS and modern web features.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
