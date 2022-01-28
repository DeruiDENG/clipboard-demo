import React, {useRef, useState} from 'react';
import './App.css';

function App() {
  const textRef = useRef<HTMLDivElement>(null);
  const [showCopiedMsg, setShowCopiedMsg] = useState(false);
  const [currentTime] = useState(new Date().toLocaleString())
  const onClick = () => {
    const text = textRef.current?.innerText ?? '';
    navigator.clipboard.writeText(text).then(() => {
      console.log("Item is copied.")
      setShowCopiedMsg(true)
      setTimeout(() => {
        setShowCopiedMsg(false)
      }, 5000)
    })
  }

  return (
      <div className="App">
        <header className="App-header">
          <h4>Clipboard Demo</h4>
          <div ref={textRef}>{currentTime}</div>
          <button type="button" onClick={onClick}>Copy the Text</button>
          {showCopiedMsg && <div className="alert" aria-live="polite">Text Copied</div>}
        </header>
      </div>
  );
}

export default App;
