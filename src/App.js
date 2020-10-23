import React from 'react';
import Stylists from './components/Stylists';
import StylistRequest from './components/StylistRequest';
import './main.scss';

export default function App() {
  return (
    <div className="App">
      <main className="main">
         {/* <Stylists /> */}
      </main>
     <footer className="footer">
       <StylistRequest />
     </footer>
    </div>
  );

}

