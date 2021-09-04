import React, { useState } from 'react';
import './App.css';

import Header from './components/main/header/Header';
import Navbar from './components/main/navbar/Navbar';
import Content from './components/main/content/Content';
import Footer from './components/main/footer/Footer';

const App = () => {
  const [portfolio, setPortfolio] = useState(false);
  const [aboutMe, setAboutMe] = useState(false);
  const [links, setLinks] = useState(false);

  const showReset = () => {
    setAboutMe(false);
    setLinks(false);
    setPortfolio(false);
  }

  const showPortfolio = () => {
    showReset();
    setPortfolio(true);
  };

  const showAboutMe = () => {
    showReset();
    setAboutMe(true);
  };

  const showLinks = () => {
    showReset();
    setLinks(true);
  };

  const navbarPaths = {
    showPortfolio,
    showAboutMe,
    showLinks,
  };

  const contentPaths = {
    portfolio,
    aboutMe,
    links,
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

//        <button onClick={() => console.log(portfolio, aboutMe, links)}>CheckState</button>
 
export default App;
