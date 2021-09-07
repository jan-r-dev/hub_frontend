import React, { useState } from 'react';
import './App.css';

import Header from './components/main/header/Header';
import Navbar from './components/main/navbar/Navbar';
import Content from './components/main/content/Content';
import Footer from './components/main/footer/Footer';


const App = () => {
  const [content, setContent] = useState('intro');

  const contentOptions = ['Portfolio', 'About_me', 'Links'];

  const changeContent = (content) => {
    setContent(content);
  }

  return (
    <div className="container">
        <Header></Header>
        <Navbar navOptions={contentOptions} navigate={changeContent}/>
        <Content contentOption={content}/>
        <Footer></Footer>
    </div>
   );
}

//        <button onClick={() => console.log(portfolio, aboutMe, links)}>CheckState</button>
 
export default App;
