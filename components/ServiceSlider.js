import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import { RxRocket, RxArrowTopRight } from "react-icons/rx";
import { SiNextdotjs } from "react-icons/si";
import { RiCreativeCommonsNcFill } from "react-icons/ri";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { IoMdGitNetwork } from "react-icons/io";
import { IoMdAnalytics } from "react-icons/io";
import { MdOutlineWeb } from "react-icons/md";
import { FaArtstation } from "react-icons/fa";
import { BiSolidBookContent } from "react-icons/bi";

import { Autoplay, FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <MdOutlineWeb />,
    title: "Custom Frontend 3D Animated Web Development",
    description:
      "Building tailored web applications to meet specific business needs.",
  },
  {
    icon: <SiNextdotjs />,
    title: "Full-Stack Web Development",
    description:
      "Expertise in Next.js, Tailwind CSS, Django, and Go for comprehensive web solutions.",
  },
  {
    icon: <RiCreativeCommonsNcFill />,
    title: "E-commerce Solutions",
    description: "Developing secure and user-friendly e-commerce platforms.",
  },
  {
    icon: <RxRocket />,
    title: "AI/ML-Powered Web Solutions",
    description:
      "Integrating AI tools and machine learning models into websites for enhanced functionality.",
  },
  {
    icon: <MdOutlineDisplaySettings />,
    title: "Website Maintenance and Updates",
    description:
      "Offering ongoing maintenance, updates, and support for existing websites.",
  },
  {
    icon: <IoMdGitNetwork className="rotate-90" />,
    title: "AI/ML Model Development",
    description:
      "Developing and deploying machine learning models for predictive analytics and automation.",
  },
  {
    icon: <IoMdAnalytics />,
    title: "Data Science and Analysis",
    description:
      "Implementing data analysis tools and visualizations for insightful web applications.",
  },
  {
    icon: <BiSolidBookContent />,
    title: "Content Creation and Copywriting",
    description:
      "Creating engaging and SEO-friendly content for websites, blogs, and marketing materials.",
  },
  {
    icon: <FaArtstation />,
    title: "Graphic Design & Branding",
    description:
      "Creating graphics, logos, and branding materials that align with client branding.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 10000,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="h-[380px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-[340px] rounded-lg px-6 py-8 
            flex sm:flex-col justify-start gap-x-6 sm:gap-x-0 group cursor-grabbing 
            hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
            >
              <div className="flex items-start gap-2 min-h-[7rem]">
                {/* icons */}
                <div className="mb-2 text-lg">{item.title}</div>
                <div className="text-4xl text-accent mb-4 min-h-10 min-w-10">{item.icon}</div>
              </div>
              {/* title & desc */}
              <p className="max-w-[350px] leading-normal text-justify">{item.description}</p>
              <div className="mb-8"></div>
              {/* arrow */}
              <div className="text-3xl bg- flex flex-col justify-end h-full">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
