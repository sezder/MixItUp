import React from "react";
import "./Splash.css";
import Logo from "../Logo";
import { motion } from "framer-motion";

//img group (pos)
// https://source.unsplash.com/0eNtGDz8Ols/1920x1080 2(1)
// https://source.unsplash.com/3BGiFpQibTQ 2(2)
// https://source.unsplash.com/3syTDiVAc7w 2(3)
// https://source.unsplash.com/3x2cFCoBeEQ/1920x1080
// https://source.unsplash.com/F7HkGy4U0fo
// https://source.unsplash.com/JjGLEN7T8xI/1920x1080
// https://source.unsplash.com/VXIpXxpZ5ms/1920x1080
// https://source.unsplash.com/W9bDbSuqW8k
// https://source.unsplash.com/Y7za9e40Luk
// https://source.unsplash.com/YNMjGIPgD_c/1920x1080 1(2)
// https://source.unsplash.com/_xeoL8CqRvE
// https://source.unsplash.com/bxT82IUY_H8/1920x1080
// https://source.unsplash.com/fsI-_MRsic0/1920x1080
// https://source.unsplash.com/hXg4gGjIfhw/ 1(1)
// https://source.unsplash.com/t7wg7BJU2-s/1920x1080 1(3)
// https://source.unsplash.com/z1qlqPj80qQ

const Splash = () => {
  // const variants = {
  //   hidden: { opacity: 0},
  //   visible: { opacity: 1},
  // };

  const imageSet1 = [
    "https://source.unsplash.com/hXg4gGjIfhw/",
    "https://source.unsplash.com/YNMjGIPgD_c/1920x1080",
    "https://source.unsplash.com/t7wg7BJU2-s/1920x1080",
  ];

  const imageSet2 = [
    "https://source.unsplash.com/0eNtGDz8Ols/1920x1080",
    "https://source.unsplash.com/3BGiFpQibTQ",
    "https://source.unsplash.com/3syTDiVAc7w",
  ];

  const imageSet3 = [
    "https://source.unsplash.com/3x2cFCoBeEQ/1920x1080",
    "https://source.unsplash.com/F7HkGy4U0fo",
    "https://source.unsplash.com/JjGLEN7T8xI/1920x1080",
  ];

  const variants = {
    opacityAnimation: {
      opacity: [
        0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4,
        0.3, 0.3, 0.1,
      ],
    },
    transitionControl: {
      transition: { duration: 5, repeat: Infinity, repeatDelay: 3 },
    },
  };
  return (
    <div className="splash_main">
      <div className="splash_img_div">
        {imageSet1.map((image, i) => {
          return (
            <motion.img
              src={image}
              className="imgs"
              animate="opacityAnimation"
              variants={variants}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                delay: i * 6,
              }}
            ></motion.img>
          );
        })}
      </div>

      <div className="splash_img_div">
        {imageSet2.map((image, i) => {
          return (
            <motion.img
              src={image}
              className="imgs"
              animate="opacityAnimation"
              variants={variants}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                delay: i * 6,
              }}
            ></motion.img>
          );
        })}
      </div>

      <div className="splash_img_div">
        {imageSet3.map((image, i) => {
          return (
            <motion.img
              src={image}
              className="imgs"
              animate="opacityAnimation"
              variants={variants}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                delay: i * 6,
              }}
            ></motion.img>
          );
        })}
      </div>

      {/* <div className="splash_nav">
          <Logo />
          <p className="text_large">Discover your new favorite drink.</p>
        </div> */}
    </div>
  );
};

export default Splash;
