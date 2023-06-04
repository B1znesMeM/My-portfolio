import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import NavBar from './JS/NavBar';
import Header from './JS/Header';
import Home from './JS/Home';
import Contact from './JS/Contact';
import Project from './JS/Project';
import Projects from './JS/Projects';
import Footer from './JS/Footer';


function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Header />} />
        <Route path='/Home' element={<Home />} />
        <Route path="/Project" element={<Projects />} />
        <Route path='/Projects' element={<Project />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    
    <Footer />
    </>
  );
}

export default App;
