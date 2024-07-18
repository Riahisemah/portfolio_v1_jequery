import { useDarkMode } from "../Body/DarkModeContext.js";

const AboutMe = (prop) => {
  const isDarkMode = useDarkMode();

  return (
    <section
      className={`animate__animated animate__fadeIn about-me ${
        isDarkMode ? "" : "light-text"
      }`}
    >
      <h1 className="about-me-title">About me ?</h1>
      <p className="about-me-des">
        My name is Riahi Semah, a graduate in Bachelor of Computer Technology,
        specializing in Information Systems Development. Passionate about
        technology and its impact, I have acquired a solid knowledge base in key
        areas such as programming, databases and web development. I worked on
        several practical projects, both individually and in teams, which
        allowed me to improve my software development and problem-solving
        skills. I am constantly on the lookout for the latest technologies and
        ready to take on new challenges in the field.
      </p>
    </section>
  );
};

export default AboutMe;
