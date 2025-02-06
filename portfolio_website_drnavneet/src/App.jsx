import "./App.css";
import Navbar from "./components/navbar/navbar";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
