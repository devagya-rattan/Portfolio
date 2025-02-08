import "./App.css";
import Navbar from "./components/navbar/navbar";
// import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      
    </>
  );
}

export default App;
