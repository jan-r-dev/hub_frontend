import React from 'react';

import './App.css';

import Top from './components/main/top/Top'
import Content from './components/main/content/Content';
// import Footer from './components/main/footer/Footer';


const App = () => {

  return (
    <div className="container">
        <Top />
        <Content/>
    </div>
   );
}
 
export default App;