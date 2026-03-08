import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import FullMenu from "./pages/FullMenu";
import Feedback from "./pages/FeedBack";
import AdminDashboard from "./pages/AdminDashboard";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* Home page first */}
        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/fullmenu" element={<FullMenu />} />

        <Route path="/feedback" element={<Feedback />} />

        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;