// testimonial data
export const testimonialData = [
  {
    image: "/t-avt-3.png",
    name: "Jay Jeev",
    position: "Founder of Indiexplor",
    message:
      "Working with Akshay was a transformative experience for Indiexplor. His innovative approach to web development and seamless integration of cutting-edge technologies brought our vision to life. Akshay's dedication to quality and his ability to understand our needs made the entire process smooth and rewarding.",
  },
  {
    image: "/t-avt-1.png",
    name: "Priya Singh",
    position: "Marketing Head at Flyxpert Adventures Co Ltd",
    message:
      "Collaborating with Akshay was a fantastic experience. His ability to incorporate advanced features and ensure a smooth user experience has greatly benefited Flyxpert. Akshay's creative solutions and technical proficiency have helped us stand out in a competitive market!",
  },
  {
    image: "/t-avt-2.png",
    name: "Ms Sola",
    position: "Web Dev Student, USA",
    message:
      "Akshay's expertise and teaching style made learning React a breeze. His clear explanations and real-world examples boosted my confidence and skills in web development!",
  },
];

// import swiper from react components
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';



const TestimonialSlider = () => {
  return (
  <Swiper 
    navigation={true}
    pagination={{ clickable: true }}
    modules={[Navigation, Pagination]}
    className='h-[400px]'
  >
    {testimonialData.map((person, index)=> {
        return(
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center
              relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image 
                    src={person.image} 
                    width={100} 
                    height={100} 
                    alt={person.name}
                    />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name} </div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    position
                  </div>
                </div>
              </div>
              {/* quote and message */}
              <div className='flex-1 flex flex-col justify-center 
              before:w-[1px] xl:before:bg-whote/20 xl:before:absolute xl:before: left-0
              xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft 
                  className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        )
      })
    }
    
  </Swiper>
  );
};

export default TestimonialSlider;
