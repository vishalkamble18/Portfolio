// import { Component, useContext } from "react";
// import "./App.css";
// import Conditions from "./component/conditions";
// import UseContextComponent from "./Hooks/UseContext";
// import { useState } from "react";
// import "./App.css";
// import { Routes, Route, NavLink } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Service";
// import Contact from "./pages/Contact";

// import FileHandling from "./component/FormHandling";

import Navbar from "./portfolio/Navbar";
import Hero from "./portfolio/Hero";
import About from "./portfolio/About";
import Skills from "./portfolio/Skills";
import Projects from "./portfolio/Project";
import Contact from "./portfolio/Contact";
import Education from "./portfolio/Education";
import Experience from "./portfolio/Experience";
import Footer from "./portfolio/Footer";

import "./portfolio/Navbar.css";
import "./portfolio/Portfolio.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="dark-sections">
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

// <div className="home-container">

//   <nav className="navbar">
//     <h1 className="logo">MyWebsite</h1>
//     <ul className="nav-links">
//       <li><NavLink to="/" end>Home</NavLink></li>
//       <li><NavLink to="/about">About</NavLink></li>
//       <li><NavLink to="/services">Services</NavLink></li>
//       <li><NavLink to="/contact">Contact</NavLink></li>
//     </ul>
//   </nav>

//   <section className="hero">
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   </section>

//   <footer className="footer">
//     <p>© 2025 MyWebsite — All Rights Reserved.</p>
//   </footer>

// </div>

// const [page, setPage] = useState("home");
//   {/* <UseContextComponent /> */}
//   <Conditions />
//   return (
//     <div className="home-container">
//       {/* ================= NAVBAR ================= */}
//       <nav className="navbar">
//         <h1 className="logo">MyWebsite</h1>

//         <ul className="nav-links">
//           <li
//             className={page === "home" ? "active" : ""}
//             onClick={() => setPage("home")}
//           >
//             Home
//           </li>
//           <li
//             className={page === "about" ? "active" : ""}
//             onClick={() => setPage("about")}
//           >
//             About
//           </li>
//           <li
//             className={page === "services" ? "active" : ""}
//             onClick={() => setPage("services")}
//           >
//             Services
//           </li>
//           <li
//             className={page === "contact" ? "active" : ""}
//             onClick={() => setPage("contact")}
//           >
//             Contact
//           </li>
//         </ul>
//       </nav>

//       {/* ================= HERO SECTION ================= */}
//       <section className="hero">
//         <h2>
//           {page === "home" && "Welcome to Home Page"}
//           {page === "about" && "About Our Company"}
//           {page === "services" && "Our Services"}
//           {page === "contact" && "Get in Touch"}
//         </h2>

//         <p className="hero-subtitle">
//           Modern • Fast • Responsive React Website
//         </p>

//         <button className="hero-btn">Get Started</button>
//       </section>

//       {/* ================= FEATURES ================= */}
//       <section className="features">
//         <div className="feature-card">
//           <h3>🚀 Fast</h3>
//           <p>Optimized performance with React.</p>
//         </div>

//         <div className="feature-card">
//           <h3>🎨 Beautiful</h3>
//           <p>Clean UI design with modern layouts.</p>
//         </div>

//         <div className="feature-card">
//           <h3>⚙️ Easy to Use</h3>
//           <p>Simple components and reusable code.</p>
//         </div>
//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="footer">
//         <p>© 2025 MyWebsite — All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
