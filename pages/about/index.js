import React, { useState } from "react";

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaMarkdown } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import {
  SiLinear,
  SiNextdotjs,
  SiFramer,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiDjango,
  SiPython,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <SiDjango key="django" />,
        ],
      },
      {
        title: "AI Solutions Development",
        icons: [
          <SiPython key="python" />,
          <BsRobot key="AI/ML" />,
          <SiPytorch key="pytorch" />,
          <SiScikitlearn key="Scikit learn" />,
        ],
      },
      {
        title: "Graphic/Logo Design",
        icons: [
          <SiCanva key="canva" />,
          <SiAdobeillustrator key="illustrator" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "Awards",
    info: [
      {
        title: "Institute Topper - SSIU",
        stage: "2022 - 2023",
      },
      {
        title: "University Topper - SSIU",
        stage: "2023",
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "Freelance Web Developer - Indiexplor Co Ltd",
        stage: "2023 - 2024",
      },
      {
        title: "Freelance Web Developer - Flyxpert Adventures Co Ltd.",
        stage: "2023 - 2024",
      },
    ],
  },
  {
    title: "Credentials",
    info: [
      {
        title: "BCA specializing in Data Science - Swarrnim University",
        stage: "Graduated 2023",
      },
      {
        title: "Azure AI Fundamentals 2021 - Microsoft",
        stage: "2021",
      },
      {
        title: "Artificial Intelligence Fundamentals - IBM",
        stage: "2023",
      },
      {
        title: "Exploratory Data Analysis for Machine Learning - IBM",
        stage: "2023",
      },
      {
        title: "IBM Introduction To Machine Learning - IBM",
        stage: "2023",
      },
      {
        title: "Supervised Machine Learning-Classification - IBM",
        stage: "2023",
      },
      {
        title: "Supervised Machine Learning-Regression - IBM",
        stage: "2023",
      },
      {
        title: "Unsupervised Machine Learning - IBM",
        stage: "2023",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../components/Variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="min-h-full flex items-center pt-60 md:pt-44 bg-primary/30 py-32 md:pl-60 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-start xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Transforming <span className="text-accent">Ideas</span> into
            Creative <span className="text-accent">Digital Solutions.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            For over 3 years, I've transformed ideas into reality through
            freelance web development. From startups to established brands, I've
            delivered innovative solutions using Next.js, Tailwind CSS, Django,
            and Go-Lang.
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full 
            after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} delay={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* Clients */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full 
            after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} delay={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
              {/* Projects */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full 
            after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} delay={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} delay={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] "
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after: duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] 
              after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 
              items-center text-white/60 "
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>

                  {/* icons */}
                  <div className=" flex gap-x-4">
                    {item.icons?.map((icon) => {
                      return (
                        <div className="relative group">
                          {/* tooltip */}
                          <div className="absolute ml-10 hidden xl:group-hover:flex z-50">
                            <div className="bg-white relative flex text-primary items-center p-[8px] rounded-[3px]">
                              <div className="text-[14px] leading-none font-extrabold capitalize">
                                {icon.key}
                              </div>
                              <div
                                className=" border-solid border-r-white border-r-8 border-y-transparent 
                  border-y-[6px] border-l-0 absolute -left-2"
                              ></div>
                            </div>
                          </div>
                          {/* icon */}
                          <div className="text-2xl text-white">{icon}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
