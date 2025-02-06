import "./App.css";
import Navbar from "./components/navbar/navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
