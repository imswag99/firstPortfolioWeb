import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './Error';
import GoToTop from './components/GoToTop';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {


  const theme = {
    colors : {
      overlap: "#f7f1e3",
      heading : "#3d3d3d",
      text : "#2c2c2c",
      white : "#fff",
      black : "rgba(0, 0, 0, 0.6)",
      bg : "rgb(249, 249, 255)",
      footerBg : "#6F1E51",
      footerBtn : "#ef5777",
      btn : "#eb3b5a",
      border : "#833471",
      hr : "#fff",
      gradient : "linear-gradient(0deg, #B33771 0%, #ef5777 100%)",
      shadow : "rgba(0,0,0,0.02) 0 0.1rem 0.3rem 0, rgba(27, 31, 35, 0.15) 0 0 0 0.1rem",
      shadowSupport : "rgba(0, 0, 0, 0.16) 0 0.1rem 0.4rem"
    },

    media : {mobile : "480px", tab : "998px"}
  }



  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GoToTop />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
