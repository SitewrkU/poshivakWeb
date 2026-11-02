import { useState, useEffect } from 'react';
import Confetti from 'react-confetti'
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import './App.css'

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      recycle={false}
      numberOfPieces={600}
      gravity={0.15}
      wind={0.02}
      opacity={0.9}
      style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}
    />

    <Hero/>
    <Main/>
    </>
  )
}

export default App
