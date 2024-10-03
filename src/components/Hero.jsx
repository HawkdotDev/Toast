import { discount, robot } from "../assets";
import AnimatedCounter from "./AnimationCounter";
import FadingTextCycle from "./FadingTextCycle";
import GetStarted from "./GetStarted";
import solarVideo from "/src/assets/videos/solar.webm";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col relative`}>
      <div className="absolute w-full h-screen">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={solarVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="z-[69] h-screen w-screen flex bg-black/30">
        <div className="w-full lg:w-[55%] h-full">
          <div
            className={`flex mt-16 justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
          >
            <div className="flex w-full flex-row justify-between items-center mt-4">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                The Next <br className="sm:block hidden" />{" "}
                <span className="text-gradient">Generation</span>{" "}
              </h1>
              <div className="xs:flex hidden mr-0">
                <GetStarted />
              </div>
            </div>

            <h1 style={{textShadow: "1px 0 8px #141414"}} className="font-poppins font-semibold ss:text-[68px] text-[52px] text-green-500 ss:leading-[100.8px] leading-[75px] w-full">
              Sustainable Energy
            </h1>
            <p
              className={`text-[#c6c6c1] font-poppins font-normal text-[18px] leading-[30.8px]} w-full mt-5`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis placeat molestiae iure dolore id deserunt porro aperiam quaerat voluptatem, possimus Lorem ipsum dolor sit amet consectetur !
            </p>
          <div className="w-full mt-16 flex justify-between"> 
            <AnimatedCounter numsArray={[50, 400, 550]} />
            <AnimatedCounter numsArray={[70, 150, 250,]} />
            <AnimatedCounter numsArray={[250, 370, 90]} />
          </div>
          </div>
          <div className={`xs:hidden mt-3 flex justify-center items-center`}>
            <GetStarted />
          </div>
        </div>
        <div className="w-[45%] h-screen">
          <FadingTextCycle />
        </div>
      </div>
    </section>
  );
};

export default Hero;
