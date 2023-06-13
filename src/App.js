import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import NavBar from './JS/NavBar';
import Header from './JS/Header';
import Home from './JS/Home';
import Contact from './JS/Contact';
import Project from './JS/Project';
import Projects from './JS/Projects';
import After from './JS/After';
import Footer from './JS/Footer';


function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Header />} />
        <Route path='/Home' element={<Home />} />
        <Route path="/Project" element={<Projects />} />
        <Route path='/Project/:id' element={<Project />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/After' element={<After />} />
      </Routes>
    
    <Footer />
    </>
  );
}

export default App;
