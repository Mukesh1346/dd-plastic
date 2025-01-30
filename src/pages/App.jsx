import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OldPrinterSeries from './OldPrinterSeries/OldPrinterSeries';
import NewPrinterSeries from './NewPrinterSeries/NewPrinterSeries';
import StampPads from './StampPads/StampPads';
import AboutUs from './AboutUs/AboutUs';
import Inks from './Inks/Inks';
import Contactus from './ContactUs/Contactus';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
import AboutPage from "../pages/AboutUs/AboutUs"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <div style={{ marginTop: "2rem" }}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/oldprinterseries" element={<OldPrinterSeries/>} />
          <Route path="/newprinterseries" element={<NewPrinterSeries/>} />
          <Route path="/stamppads" element={<StampPads />} />
          <Route path="/inks" element={<Inks/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/about-us" element={<AboutPage/>} />
        </Routes>
      {/* </div> */}
      <Footer />
    </BrowserRouter>
  );
}











// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
