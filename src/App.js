import React, { Component } from 'react';
import MainPanel from './components/MainPanel';
import SidePanel from './components/SidePanel';
import Loader from './components/Loader';

function App() {
  return (
    <div>
    <div className="colorlib-page">
      <div className='colorlib-sidebar'>
        <SidePanel />
      </div>
      
    

      <div id="colorlib-main">
        <MainPanel />
        
      </div>
  
    </div>
    <Loader />
    </div>
  );
}

export default App;
