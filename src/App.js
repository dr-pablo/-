import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./Footer";
import { Menu } from "./Menu";
import { Web3 } from "./pages/web3/Web3";
import { Betz } from "./pages/betz/Betz";
import { HomePage } from "./pages/home/Home";
import { Ideas } from "./pages/ideas/Ideas";
import Background from "./pages/background/background";
import { Box } from "@chakra-ui/react";
const App = () => {
  return (
    <Box className="app">
      <Router>
        <Box className="body">
          <Menu />
        </Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Web3" element={<Web3 />} />
          <Route path="/Betz" element={<Betz />} />
          <Route path="/Ideas" element={<Ideas />} />
          <Route path="/back" element={<Background />} />
        </Routes>
      </Router>
      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
};
export default App;
