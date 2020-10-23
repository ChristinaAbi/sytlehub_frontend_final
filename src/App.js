import React from 'react';
// import Stylists from './components/Stylists';
import StylistRequest from './components/StylistRequest';
import './main.scss';
import 'materialize-css';
import {Footer} from 'react-materialize'

export default function App() {
  return (
    <div className="App">
      <main className="main">
         {/* <Stylists /> */}
      </main>
     <Footer className="footer">
       <StylistRequest />
     </Footer>
    </div>
  );

}

