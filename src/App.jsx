import myimg from "./assets/myimage.jpeg";
import "./App.css";

const App = () => {
  return (
    <>
      {/* Header */}

      <header className="header">
        <h1 className="logo">Rishabh Saini</h1>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#tools">Tools</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}

      <section className="hero">
        <img src={myimg} alt="Rishabh" className="hero-img" />

        <h2>
          Hi, I'm <span>Rishabh Saini</span>
        </h2>

        <h3 className="typing-text">
          Aspiring DevOps Engineer 🚀
        </h3>

        <p>
          Passionate about DevOps, Cloud Computing, CI/CD pipelines and modern
          infrastructure tools. Currently learning AWS, Docker, Kubernetes and
          automation technologies.
        </p>

        <div className="hero-buttons">
          <a
            href="https://github.com/Saini9495"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rishabh-saini-bba5b130b"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}

      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I'm a self-motivated and disciplined learner focused on DevOps and
          Cloud technologies. I enjoy building projects, learning automation
          tools and exploring modern deployment workflows.
        </p>

        <p>
          Currently learning AWS Cloud, Docker, Kubernetes, Jenkins and CI/CD
          concepts to become a skilled DevOps Engineer.
        </p>
      </section>

      {/* Skills */}

      <section id="skills" className="section">
        <h2>My Skills</h2>

        <div className="skills">
          <div className="skill">
            <i className="fa-brands fa-html5"></i>
            <span>HTML</span>
          </div>

          <div className="skill">
            <i className="fa-brands fa-css3-alt"></i>
            <span>CSS</span>
          </div>

          <div className="skill">
            <i className="fa-brands fa-git-alt"></i>
            <span>Git</span>
          </div>

          <div className="skill">
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </div>

          <div className="skill">
            <i className="fa-brands fa-docker"></i>
            <span>Docker</span>
          </div>

          <div className="skill">
            <i className="fa-solid fa-dharmachakra"></i>
            <span>Kubernetes</span>
          </div>

          <div className="skill">
            <i className="fa-brands fa-jenkins"></i>
            <span>Jenkins</span>
          </div>

          <div className="skill">
            <i className="fa-brands fa-aws"></i>
            <span>AWS</span>
          </div>

          <div className="skill">
            <i className="fa-brands fa-linux"></i>
            <span>Linux</span>
          </div>

          <div className="skill">
            <i className="fa-solid fa-code-branch"></i>
            <span>CI/CD</span>
          </div>
        </div>
      </section>

      {/* Tools Section */}

      <section id="tools" className="section">
        <h2>DevOps Tools & Platforms</h2>

        <div className="skills">
          <div className="skill">
            <i className="fa-brands fa-github"></i>
            <span>GitHub Actions</span>
          </div>

          <div className="skill">
            <i className="fa-solid fa-cloud"></i>
            <span>Render</span>
          </div>

          <div className="skill">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <span>Vercel</span>
          </div>

          <div className="skill">
            <i className="fa-solid fa-server"></i>
            <span>Netlify</span>
          </div>

          <div className="skill">
            <i className="fa-solid fa-terminal"></i>
            <span>VS Code</span>
          </div>

          <div className="skill">
            <i className="fa-brands fa-ubuntu"></i>
            <span>Ubuntu</span>
          </div>
        </div>
      </section>

      {/* Education */}

      <section id="education" className="section">
        <h2>Education</h2>

        <div className="education-box">
          <h3>Master’s Degree</h3>
          <p>MCA – Chandigarh Group Of Technology</p>
          <span>2024 – Present</span>

          <h3>Bachelor’s Degree</h3>
          <p>BCA – Chandigarh Group Of Technology</p>
          <span>2021 – 2024</span>

          <h3>Senior Secondary (12th)</h3>
          <p>Amravati Vidyalaya</p>
          <span>2020 – 2021</span>
        </div>
      </section>

      {/* Contact */}

      <section id="contact" className="section contact">
        <h2>Connect With Me</h2>

        <a
          href="mailto:sainirishab394@gmail.com"
          className="contact-item"
        >
          <i className="fas fa-envelope"></i>
          <span>sainirishab394@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/rishabh-saini-bba5b130b"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          <i className="fab fa-linkedin"></i>
          <span>LinkedIn Profile</span>
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

        <a href="tel:+919466169584" className="contact-item">
          <i className="fas fa-phone"></i>
          <span>+91 9466169584</span>
        </a>
      </section>

      {/* Footer */}

      <footer className="footer">
        <p>© 2026 Rishabh Saini | DevOps Portfolio 🚀</p>
      </footer>
    </>
  );
};

export default App;