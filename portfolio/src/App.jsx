import myimg from "./assets/myimg.jpg"
import "./App.css"

const App = () => {
  return (
    <>
      <header className="header">
        <h1 className="logo">Rishabh Saini</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <img src={myimg} alt="Rishabh" />
        <h2>
          Hi, I'm <span>Rishabh Saini</span>
        </h2>
        <p>
          A passionate learner who builds clean and user-friendly websites using
          HTML and CSS. Currently learning DevOps fundamentals.
        </p>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a self-motivated and disciplined learner focusing on DevOps
          fundamentals. I enjoy learning new technologies and improving my
          skills by practicing daily and building projects.
        </p>
      </section>

      <section id="skills" className="section">
  <h2>My Skills</h2>

  <div className="skills">
    <div className="skill"><i className="fa-brands fa-html5"></i><span>HTML</span></div>
    <div className="skill"><i className="fa-brands fa-css3-alt"></i><span>CSS</span></div>
    <div className="skill"><i className="fa-brands fa-git-alt"></i><span>Git</span></div>
    <div className="skill"><i className="fa-brands fa-github"></i><span>GitHub</span></div>
    <div className="skill"><i className="fa-brands fa-docker"></i><span>Docker</span></div>
    <div className="skill"><i className="fa-solid fa-cloud"></i><span>Cloud Basics</span></div>
  </div>
</section>


      <section id="education" className="section">
        <h2>My Qualifications</h2>
        <div className="education-box">
          <h3>Bachelor’s Degree</h3>
          <p>BCA – Chandigarh Group Of Technology</p>
          <span>2021 – 2024</span>

          <h3>Master’s Degree</h3>
          <p>MCA – Ongoing</p>
          <span>2024 – Present</span>

          <h3>Senior Secondary (12th)</h3>
          <p>Amravati Vidyalaya</p>
          <span>2020 – 2021</span>
        </div>
      </section>

<section id="contact" className="section contact">
  <h2>Contact Me</h2>

  <a href="mailto:sainirishab394@gmail.com" className="contact-item">
    <i className="fas fa-envelope"></i>
    <span>sainirishab394@gmail.com</span>
  </a>

  <a href="tel:+919466169584" className="contact-item">
    <i className="fas fa-phone"></i>
    <span>+91 9466169584</span>
  </a>

  <a href="tel:+918307818589" className="contact-item">
    <i className="fas fa-phone"></i>
    <span>+91 8307818589</span>
  </a>

  <a
    href="https://github.com/Saini9495"
    target="_blank"
    rel="noreferrer"
    className="contact-item"
  >
    <i className="fab fa-github"></i>
    <span>github.com/Saini9495</span>
  </a>
</section>



      <footer className="footer">
        <p>© 2026 Rishabh Saini | My Portfolio</p>
      </footer>
    </>


)
}

export default App
