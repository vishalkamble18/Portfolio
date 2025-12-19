export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo"><b>MyPortfolio</b></h2>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact" className="contact">
              Contact
            </a>
          </li>
          <li>
            <a href="/resume.pdf" className="btn outline" download>
            Download Resume
          </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
