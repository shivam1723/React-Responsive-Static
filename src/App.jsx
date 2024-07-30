import React, { useState } from 'react';
import './App.css';
import RealTimeChanges from './RealTimeChanges'; // Ensure this is correctly imported
import reactLogo from './logos/react.png';
import jsLogo from './logos/js.png';
import htmlLogo from './logos/html.png';
import awsLogo from './logos/aws.png';
import androidLogo from './logos/android.png';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="background">
        <div className="circle large">
          <img src={reactLogo} alt="React Logo" className="logo react-logo" />
        </div>
        <div className="circle medium">
          <img src={jsLogo} alt="JavaScript Logo" className="logo js-logo" />
        </div>
        <div className="circle small">
          <img src={htmlLogo} alt="HTML Logo" className="logo html-logo" />
          <img src={androidLogo} alt="Android Logo" className="logo android-logo" />
        </div>
        <div className="circle smallest">
          <img src={awsLogo} alt="AWS Logo" className="logo aws-logo" />
        </div>
      </div>
      <header className="navbar">
        <div className="navbar-logo">
          <span className="navbar-logo-full"><span className='blue'>N</span>AV<span className='blue'>B</span>AR</span>
          <span className="navbar-logo-short"><span className='blue'>N</span>AV</span>
        </div>
        <div className="hamburger" onClick={toggleNavbar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#resources">Resources</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className={`navbar-actions ${isOpen ? 'active' : ''}`}>
          <button className="login-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </header>
      <main className="main-content">
        <section className="hero">
          <h1>We've really sped up our workflow</h1>
          <p>
            We've just released a new update! Check out the all-new dashboard view. Pages now load faster,
            <span className="free-trial">and you can try us for free for 30 days.</span>
          </p>
          <div className="cta-buttons">
            <button className="start-learning-button"><span className='black'>→</span> Start Learning Today</button>
            <button className="join-now-button">Join Now</button>
          </div>
        </section>
      </main>
      <RealTimeChanges />
    </div>
  );
}

export default App;
