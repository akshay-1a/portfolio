// next image
import Image from "next/image";


const Bulb = () => {
  return (
  <div className="absolute -left-36 -bottom-12 hover:-left-16 xl:hover:-left-6 hover:rotate-45 transition-all rotate-12 mix-blend-color-dodge 
  animate-pulse duration-300 z-10 w-[200px] xl:w-[260px]">
    <Image 
    src={'/bulb.png'}
    width={260}
    height={200}
    alt=""
    className="w-full h-full"
    />
  </div>
  );
};

export default Bulb;
