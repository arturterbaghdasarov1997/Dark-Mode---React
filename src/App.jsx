import React, { useState } from 'react';
import './App.css';
import useDarkMode from './Hooks/useDarkMode';
import useWindowSize from './Hooks/useWindowResize';

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const [showMobileMessage, setShowMobileMessage] = useState(false);

  const handleToggleDarkMode = () => {
    toggleDarkMode();

    if (isMobile) {
      setShowMobileMessage(true);
      setTimeout(() => {
        setShowMobileMessage(false);
      }, 3000);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleToggleDarkMode}>
          Toggle Theme
        </button>
        {isMobile && showMobileMessage && <p>Dark Mode isn't available on the mobile version</p>}
      </header>
    </div>
  );
}

export default App;