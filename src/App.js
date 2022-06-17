import React , {useState} from "react";
import {Routes,  Route } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { menuData } from "./data/MenuData";

import GlobalStyle from "./globalStyles";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Creator from "./pages/Creator";
import Home from "./pages/Home";
import { motion } from 'framer-motion'
import BTwoB from "./pages/BTwoB";
import Projects from "./pages/Projects";
function App() {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <GlobalStyle/>
    
    <Navbar toggle={toggle} menuData={menuData}/>
    <Dropdown isOpen={isOpen} toggle={toggle} menuData={menuData}/> 
    <ScrollToTop/>
    <motion.div initial="hidden" animate="show">
    <Routes>
    
      <Route path='/' exact element={<Home/>} />
      <Route path='/about'  element={<AboutUs/>} />
      <Route path='/creator' element={<Creator/>} />
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/b2b' element={<BTwoB/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    </motion.div> 
    <Footer/>
    </>
  );
}

export default App;
