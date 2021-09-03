import React, { useState } from 'react';
import './App.css';

import Header from './components/main/header/Header';
import Navbar from './components/main/navbar/Navbar';
import Content from './components/main/content/Content';
import Footer from './components/main/footer/Footer';

const App = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const navbarPaths = {
    showPortfolio: setShowPortfolio,
    showAboutMe: setShowAboutMe,
    showLinks: setShowLinks
  };

  const contentPaths = {
    showPortfolio: showPortfolio,
    showAboutMe: showAboutMe,
    showLinks: showLinks
  };


  return (
    <div className="container">
        <Header></Header>
        <Navbar navbarPaths={navbarPaths}/>
        <Content contentPaths={contentPaths}/>
        <Footer></Footer>
    </div>
   );
}
 
export default App;
