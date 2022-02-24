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
      <img src={headshot} alt="headshot of Shannon Zander" id="headshot"></img>
      <h1>Shannon Zander</h1>
      <h2>How I first fell in love with programming:</h2>
      <p>
        Kitten after kitten, each one was snatched out from under me. No matter
        how frequently I checked the Humane Society’s website, someone else
        always got there first. Exasperated, I resolved to learn enough Python
        to build a web scraper that would text me whenever a new kitten was
        posted. About 15 hours later, so deeply engrossed in the project that I
        forgot even to eat, I realized I’d fallen head over heels in love with
        programming. And it worked!
      </p>

      <p>
        I was rewarded with a cat who hasn't quite figured out beds yet (we own
        bigger beds--he ignores them).
      </p>
      <div id="cat_photos_div">
        <img src={cat1} alt="Black cat laying half off of a bed"></img>
        <img src={cat2} alt="Black cat laying half off of a bed"></img>
        <img src={cat3} alt="Black cat laying half off of a bed"></img>
        <img src={cat4} alt="Black cat laying half off of a bed"></img>
      </div>

      <p>
        And I've been hooked ever since. The tangibility of seeing a problem and
        being able to use technology to meet that need is addicting.
      </p>
    </main>
  );
};

export default About;
