import React from "react";
import "./About.css";
import headshot from "./headshot300x300.png";
import cat from "./cat.jpeg";

const About = () => {
  return (
    <main className="about_main">
      <div id="left">
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
          <h2>This Project Built Using</h2>

          <div>
            <i
              className="fab fa-github fa-3x"
              onClick={() => window.open("https://github.com/sezder/MixItUp")}
            ></i>
            <p>
              <img
                alt="JavaScript"
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
              />
              <img
                alt="React"
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              />
              <img
                alt="Redux"
                src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
              />
              <img
                alt="HTML5"
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              />
              <img
                alt="CSS"
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              />
              <img
                alt="Express"
                src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
              />
              <img
                alt="Postgres"
                src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
              />
              <img
                alt="Sequelize"
                src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"
              />
              <img
                alt="Heroku"
                src="https://camo.githubusercontent.com/3bcc8da5c94cefdf2d976837d1be601f4d44d36b58d9590e36debe834a6e34de/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4865726f6b752d3433303039383f7374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465"
              />
            </p>
          </div>
        </div>

        <div id="general">
          <h2>A Bit About Me</h2>
          <ul>
            <li>
              ???? Check out{" "}
              <u
                onClick={() => {
                  window.open("https://sezder.github.io/");
                }}
              >
                my portfolio
              </u>
            </li>
            <li>
              ??? Achieved my MVP two days into a two-week sprint with my most
              recent project.
            </li>
            <li>
              ???? Currently reading{" "}
              <u
                onClick={() => {
                  window.open(
                    "https://www.amazon.com/Algorithm-Design-Manual-Computer-Science/dp/3030542556/ref=pd_lpo_1?pd_rd_i=3030542556&psc=1/"
                  );
                }}
              >
                The Algorithm Design Manual{" "}
              </u>
              by Steven S. Skiena
            </li>
            <li> ???? Presently fine-tuning my Docker skills.</li>
            <li>
              ??????????????? Graduated from Whitman College, majoring in Philosophy and
              Classics; attained Honors in Major study in both of my majors, an
              accomplishment only shared by only five individuals in my
              graduating class.
            </li>
            <li>
              ???????? Served in the Peace Corps in South Africa as an English
              Educator & Teacher Trainer.
            </li>
            <li>
              ??? Passionate about learning languages of all kinds (currently
              know Ancient Greek, Latin, Sepedi/Northen Sotho, and English).
            </li>
          </ul>
        </div>
      </div>

      <div id="right">
        <div id="cat_story">
          <h2>How I First Discovered a Love of Programming</h2>
          <p>
            Kitten after kitten, each one was snatched out from under me. No
            matter how frequently I checked the Humane Society???s website,
            someone else always got there first. Exasperated, I resolved to
            learn enough Python to build a web scraper that would text me
            whenever a new kitten was posted. About 15 hours later, so deeply
            engrossed in the project that I forgot even to eat, I realized I???d
            fallen head over heels in love with programming.
          </p>

          <div id="cat_photos_div">
            <img src={cat} alt="Black cat laying half off of a bed"></img>

            <p>
              I was rewarded with a cat who hasn't quite figured out beds yet
              (we own bigger beds--he ignores them). And I've been hooked ever
              since. The tangibility of seeing a problem and being able to use
              technology to meet that need is addicting.
            </p>
          </div>
        </div>

        <div id="skills_and_contact">
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

          <div id="contact">
            <h2>Get in Touch</h2>
            <div>
              <img
                onClick={() => {
                  window.open("https://www.linkedin.com/in/shannon-e-zander/");
                }}
                align="left"
                alt="Linkedin"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
              />
              <img
                onClick={() => {
                  window.open("https://angel.co/u/shannon-zander");
                }}
                align="left"
                alt="Angel List"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqqlz4j-e9kS1Y14Mdj_0Mv5UX0yyc59c2p3S-ypLzd2nV_EYJ0UVtBdjdI_Nkx1UmfI&usqp=CAU"
              />

              <img
                onClick={() => {
                  window.open("https://sezder.github.io/");
                }}
                align="left"
                alt="Personal Website"
                src="https://user-images.githubusercontent.com/84882854/152452276-c1d31108-b976-45db-b591-93ae9d7c541d.png"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
