import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import StakePage from './components/StakePage';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[1440px]">
      <Header />
      <StakePage />
      <Footer />
    </div>
  );
}

export default App;
