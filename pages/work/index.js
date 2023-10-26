// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../components/Variants';

const Work = () => {
  return (
  <div className='h-full pt-40 bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
        xl:mb-0'>
          <motion.h2 
          variants={ fadeIn('up', 0.4) }
          initial="hidden"
          animate="show"
          exit="hidden"
          className='h2 xl:mt-12'
          >
            My Work<span className='text-accent'>.</span>
          </motion.h2>
          <motion.p 
          variants={ fadeIn('up', 0.6) }
          initial="hidden"
          animate="show"
          exit="hidden"
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci 
            ab illum repellendus odit quia dignissimos, impedit, necessitatibus quae 
            suscipit nesciunt repellat vitae nisi molestias vel?
          </motion.p>
        </div>
        {/* slider */}
        <motion.div 
        variants={ fadeIn('up', 0.8) }
        initial="hidden"
        animate="show"
        exit="hidden"
        className='w-full xl:max-w-[65%]'
        >
        <WorkSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Work;
