import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import Logo from "../Logo";
import "./Splash.css";

const Splash = () => {
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

  const imageSet4 = [
    "https://source.unsplash.com/_xeoL8CqRvE",
    "https://source.unsplash.com/bxT82IUY_H8/1920x1080",
    "https://source.unsplash.com/z1qlqPj80qQ",
  ];

  const imageSet5 = [
    "https://source.unsplash.com/Y7za9e40Luk",
    "https://source.unsplash.com/W9bDbSuqW8k",
    "https://source.unsplash.com/VXIpXxpZ5ms/1920x1080",
  ];

  const imageSet6 = [
    "https://source.unsplash.com/fsI-_MRsic0/1920x1080",
    "https://source.unsplash.com/0eNtGDz8Ols/1920x1080",
    "https://source.unsplash.com/Y7za9e40Luk",
  ];

  const imageSet7 = [
    "https://source.unsplash.com/z1qlqPj80qQ",
    "https://source.unsplash.com/hXg4gGjIfhw/",
    "https://source.unsplash.com/F7HkGy4U0fo",
  ];

  const imageSet8 = [
    "https://source.unsplash.com/bxT82IUY_H8/1920x1080",
    "https://source.unsplash.com/JjGLEN7T8xI/1920x1080",
    "https://source.unsplash.com/3x2cFCoBeEQ/1920x1080",
  ];

  const variants = {
    opacityAnimation: {
      opacity: [
        0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9, 0.8, 0.7, 0.6, 0.5,
        0.4, 0.3, 0.3, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
    transitionControl: {
      transition: { duration: 5, repeat: Infinity, repeatDelay: 3 },
    },
  };

  return (
    <div className="splash_main">
      <div id="top">
        <div className="img_div_large" id="imgs_1">
          {imageSet1.map((image, i) => (
            <motion.img
              src={image}
              className="imgs imgs_large"
              animate="opacityAnimation"
              variants={variants}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                delay: i * 6 + 0.4,
              }}
            ></motion.img>
          ))}
        </div>

        <div className="img_div_small" id="imgs_2">
          {imageSet2.map((image, i) => (
            <motion.img
              src={image}
              className="imgs imgs_small"
              animate="opacityAnimation"
              variants={variants}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                delay: i * 6 + 1.4,
              }}
            ></motion.img>
          ))}
        </div>

        <div className="img_div_med" id="imgs_3">
          {imageSet3.map((image, i) => (
            <motion.img
              src={image}
              className="imgs imgs_med"
              animate="opacityAnimation"
              variants={variants}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                delay: i * 6 + 0.8,
              }}
            ></motion.img>
          ))}
        </div>
        <div className="img_div_med" id="imgs_4">
          {imageSet4.map((image, i) => (
            <motion.img
              src={image}
              className="imgs imgs_med"
              animate="opacityAnimation"
              variants={variants}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                delay: i * 6 + 1.6,
              }}
            ></motion.img>
          ))}
        </div>
      </div>

      <div id="bottom">
        <div className="img_div_small" id="imgs_5">
          {imageSet5.map((image, i) => (
            <motion.img
              src={image}
              className="imgs imgs_small"
              animate="opacityAnimation"
              variants={variants}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                delay: i * 6 + 0.6,
              }}
            ></motion.img>
          ))}
        </div>
        <div className="img_div_large" id="imgs_6">
          {imageSet6.map((image, i) => (
            <motion.img
              src={image}
              className="imgs imgs_large"
              animate="opacityAnimation"
              variants={variants}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                delay: i * 6 + 1,
              }}
            ></motion.img>
          ))}
        </div>
        <div className="img_div_med" id="imgs_7">
          {imageSet7.map((image, i) => (
            <motion.img
              src={image}
              className="imgs imgs_med"
              animate="opacityAnimation"
              variants={variants}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                delay: i * 6 + 1.2,
              }}
            ></motion.img>
          ))}
        </div>
        <div className="img_div_large" id="imgs_8">
          {imageSet8.map((image, i) => (
            <motion.img
              src={image}
              className="imgs imgs_large"
              animate="opacityAnimation"
              variants={variants}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                delay: i * 6 + 0.2,
              }}
            ></motion.img>
          ))}
        </div>
      </div>

      <div className="splash_nav">
        <Logo />
        <p className="text_large">Discover your new favorite drink.</p>
        <NavLink to="/cocktails">
          <button>Cocktails</button>
        </NavLink>

        <NavLink to="/bars">
          <button>Bars</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Splash;
