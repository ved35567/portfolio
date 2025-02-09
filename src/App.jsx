import "./App.css";
import { easeOut, motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="main">
        <div>
          <nav className="Nav-container">
            <a href="#Home">Home</a>
            <a href="#About">About me</a>
            <a href="#Skills">Skills</a>
            <a href="#Portfolio">Portfolio</a>
            <a href="#Contact">Contact Me</a>
          </nav>
        </div>
        <div id="Home">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
            className="div1"
          >
            <img className="margin-top" src="/Images/logo 1.png" alt="logo" />
            <div className="div2">
              <p className="intro">Hi, I am</p>
              <h1 className="name">Vedvyas</h1>
              <p className="degination">Front-end Developer / UI Designer</p>

              <div className="social-link">
                <div className="logo-box">
                  <img src="/Images/mail.png" alt="" />
                </div>
                <div className="logo-box">
                  <img src="/Images/linkdin.png" alt="" />
                </div>
                <div className="logo-box">
                  <img src="/Images/github.png" alt="" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="div3"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="/Images/image 17.png" alt="my-image" />
          </motion.div>
        </div>
        <div className="div4">
          <h3>IT BERRIES</h3>

          <p>
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est. Morbi commodo, eros in
            dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
            tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
            Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
            varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
            tempor, accumsan nec eros.{" "}
          </p>
        </div>

        <div id="About">
          <motion.div
            className="about-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="about-me"> ABOUT ME</h3>
            <p className="about-content ">
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
              varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
              quis libero viverra facilisis ut ac est.
            </p>
            <p className="more-page">EXPLORE</p>
            <img
              className="separator-black"
              src="/Images/separatorBlack 1.png"
              alt="seprator"
            />
          </motion.div>

          <motion.div
            className="about-section2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="set-one">
              <div>
                <h4 className="design">DESIGN</h4>
                <p className="about-content2">
                  I can design the site based on your needs and suggestions. I
                  can also design the site from scratch and consult you during
                  the job.
                </p>
              </div>
              <div>
                <h4 className="design">DEVELOPMENT</h4>
                <p className="about-content2">
                  I can design the site based on your needs and suggestions. I
                  can also design the site from scratch and consult you during
                  the job.
                </p>
              </div>
            </div>
            <div className="flex-col">
              <h4 className="design">MAINTENANCE</h4>
              <p className="about-content2">
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the
                job.
              </p>
            </div>
            <img
              className="separator-black"
              src="/Images/separatorBlack 1.png"
              alt="seprator"
            />
          </motion.div>
        </div>

        <div id="Skills">
          <h3 className="skill-titile">SKILLS</h3>
          <h3 className="util">USING NOW:</h3>
          <div className="skills-container">
            {[
              "html",
              "css",
              "sass",
              "js",
              "react",
              "bootstrap",
              "git",
              "mysql",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="skills"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <img src={`/Images/${skill}.svg`} alt="" />
                <p>{skill.toUpperCase()}</p>
              </motion.div>
            ))}
          </div>
          <h3 className="util">LEARNING:</h3>
          <div className="skills-container">
            {["nodejs", "mongodb", "figma"].map((skill, index) => (
              <motion.div
                key={skill}
                className="skills"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <img src={`/Images/${skill}.png`} alt="" />
                <p>{skill.toUpperCase()}</p>
              </motion.div>
            ))}
          </div>
          <h3 className="util">OTHER SKILLS:</h3>
          <div className="skills-container">
            {["c++", "c"].map((skill, index) => (
              <motion.div
                key={skill}
                className="skills"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <img src={`/Images/${skill}.svg`} alt="" />
                <p>{skill.toUpperCase()}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div id="Portfolio">
          <div className="bg-portfolio">
            <h3>PORTFOLIO</h3>
          </div>

          <div className="pages">
            <div className="page-link">
              <p>All</p>
              <p>CODED</p>
              <p>DESIGNED</p>
            </div>
          </div>

          <div className="photos-container"></div>
          <div className="bg-black">
            <p className="p-footer">And many more to come!</p>
          </div>
        </div>
        <div id="Contact">
          <div className="contact-box">
            <h3 className="contact-us">CONTACT</h3>
            <div className="contact-content">
              <p>
                {" "}
                Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel
                sem varius finibus. Sed ornare sit amet lorem sed viverra. In
                vel urna quis libero viverra facilisis ut ac est.
              </p>
            </div>

            <img
              className="separator-black"
              src="/Images/separatorBlack 1.png"
              alt="seprator"
            />
            <div className="form-container">
              <form action="#">
                <input type="text" required placeholder="ENTER YOUR NAME*" />

                <input type="email" required placeholder="ENTER YOUR EMAIL*" />

                <input type="tel" placeholder="PHONE NUMBER" />

                <textarea required placeholder="YOUR MESSAGE*"></textarea>

                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
