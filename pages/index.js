import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Model from '../components/Model';
import { motion } from 'framer-motion';
import { fadeIn } from "../components/Variants";


const Home = () => {
  return (
    <div className="bg-nature bg-cover xl:bg-right xl:bg-no-repeat h-full">
    {/* particles */}
    <ParticlesContainer />
      {/* text */}
      <div className="w-full min-h-full :pt-4 bg-gradient-to-r from-primary/10 via-black/30 to-black/10 
      flex items-center">
        <div className="text-center h-full flex flex-col justfiy-center xl:pt-40 xl:text-left 
        container mx-auto">
          {/* title */}
          <motion.h1
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h1">
            Turning Your Vision<br /> Into{' '}
            <span className="text-accent">Digital Success.</span>
          </motion.h1>
          {/* sub-title */}
          <motion.p 
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            A website developer, AI/ML Enthusiast, Data Science degree holder.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis adipisci facere earum 
            delectus ullam, commodi!
          </motion.p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn('down', 0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg */}
        <div className="bg-none xl:bg-explosion opacity-30 xl:bg-cover xl:bg-right xl:bg-no-repeat w-full 
        h-full absolute mix-blend-color-dodge"></div>
        {/* avatar img */}
        <motion.div 
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className="hidden xl:block w-full h-full max-w-[1080px] max-h-[1080px] absolute -bottom-32 lg:bottom-0 
          lg:right-[-10%]"
          >
          <Model />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
