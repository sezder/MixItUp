import React from "react";
import "./About.css";
import headshot from "./headshot300x300.png";
import cat1 from "./cat1.jpeg";
import cat2 from "./cat2.jpeg";
import cat3 from "./cat3.jpeg";
import cat4 from "./cat4.jpeg";

const About = () => {
  return (
    <main className="about_main">
      <section id="left">
        <header>
          <img
            src={headshot}
            alt="headshot of Shannon Zander"
            id="headshot"
          ></img>
          <div className="vl"></div>

          <div className="name_email">
            <h1>Shannon Zander</h1>
            <p>SOFTWARE ENGINEER</p>
            <i>
              <a href="mailto:shannon.e.zander@gmail.com">
                shannon.e.zander@gmail.com
              </a>
            </i>
          </div>
        </header>

        <div id="about-project">
          <h2>About This project</h2>
        </div>

        <div id="general">
          <h2>A Bit About Me</h2>
        </div>
        <div id="contact">
          <h2>Get in Touch</h2>
        </div>
      </section>

      <section id="right">
        <div id="cat_story">
          <h2>How I first fell in love with programming:</h2>
          <p>
            Kitten after kitten, each one was snatched out from under me. No
            matter how frequently I checked the Humane Society’s website,
            someone else always got there first. Exasperated, I resolved to
            learn enough Python to build a web scraper that would text me
            whenever a new kitten was posted. About 15 hours later, so deeply
            engrossed in the project that I forgot even to eat, I realized I’d
            fallen head over heels in love with programming. And it worked!
          </p>

          <p>
            I was rewarded with a cat who hasn't quite figured out beds yet (we
            own bigger beds--he ignores them).
          </p>
          <div id="cat_photos_div">
            {/* <img src={cat1} alt="Black cat laying half off of a bed"></img> */}
            {/* <img src={cat2} alt="Black cat laying half off of a bed"></img>
          <img src={cat3} alt="Black cat laying half off of a bed"></img> */}
            <img src={cat4} alt="Black cat laying half off of a bed"></img>
          </div>

          <p>
            And I've been hooked ever since. The tangibility of seeing a problem
            and being able to use technology to meet that need is addicting.
          </p>
        </div>

        <div id="skills">
          <h2>Languages and Technologies</h2>

          <div>
            <img
              title="Python"
              align="left"
              alt="Python"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
            />
            <img
              title="JavaScript"
              align="left"
              alt="JavaScript"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
            />
            <img
              title="React"
              align="left"
              alt="React"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
            />
            <img
              title="Redux"
              align="left"
              alt="Redux"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"
            />
            <img
              title="Docker"
              align="left"
              alt="Docker"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png"
            />
            <img
              title="SQL"
              align="left"
              alt="SQL"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"
            />
            <img
              title="PostgreSQL"
              align="left"
              alt="PostgreSQL"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
            />
            <img
              title="HTML5"
              align="left"
              alt="HTML5"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
            />
            <img
              title="CSS"
              align="left"
              alt="CSS"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
            />
            <img
              title="Node.js"
              align="left"
              alt="Node.js"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
            />
            <img
              title="Git"
              align="left"
              alt="Git"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
            />
            <img
              title="GitHub"
              align="left"
              alt="GitHub"
              width="30px"
              src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
            />
            <img
              title="Express"
              align="left"
              alt="Express"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
            />
            <img
              title="Visual Studio Code"
              align="left"
              alt="Visual Studio Code"
              src="https://raw.githubusercontent.com/github/explore/bbd48b997e8d0bef63f676eca4da5e1f76487b56/topics/visual-studio-code/visual-studio-code.png"
            />
            <img
              title="Terminal"
              align="left"
              alt="Terminal"
              src="https://raw.githubusercontent.com/github/explore/d92924b1d925bb134e308bd29c9de6c302ed3beb/topics/terminal/terminal.png"
            />
            <img
              title="Socket.io"
              align="left"
              alt="Socket.io"
              src="https://raw.githubusercontent.com/github/explore/3b2a1369c4274c39f100275756e61c981a41b5e4/topics/socket-io/socket-io.png"
            />
            <img
              title="Heroku"
              align="left"
              alt="Heroku"
              src="https://raw.githubusercontent.com/github/explore/cb661bc288627f05a5ac4187b00495fd8048c9fa/topics/heroku/heroku.png"
            />
            <img
              title="Node Package Manager"
              align="left"
              alt="npm"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
