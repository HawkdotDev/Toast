import { stats } from "../constants";
import { useEffect, useRef } from "react";

import adani from "../assets/Company/adani.png";
import exide from "../assets/Company/exide.png";
import goodwe from "../assets/Company/goodwe.png";
import jio from "../assets/Company/jio.png";
import tata from "../assets/Company/tata.png";
import renew from "../assets/Company/renew.png";

const AutoScrollingImages = () => {
  const slideshowRef = useRef(null);

  useEffect(() => {
    const scrollSlideshow = () => {
      const slideshow = slideshowRef.current;

      if (slideshow) {
        slideshow.scrollLeft += 2; // Increased scroll speed

        // When it reaches the end, reset back to the beginning
        if (
          slideshow.scrollLeft >=
          slideshow.scrollWidth - slideshow.clientWidth
        ) {
          slideshow.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scrollSlideshow, 10); // Increased scroll interval speed

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <section
      className={`w-full flex justify-center items-center flex-row flex-wrap`}
    >
      {/* Existing stat mapping */}
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex bg-stone-800 justify-center items-center flex-row py-5`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins text-yellow-500 font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}

      {/* Horizontal image slideshow with auto-scroll */}
      <div
        ref={slideshowRef}
        className="w-full mt-10 overflow-x-auto whitespace-nowrap"
      >
        <div className="flex flex-row space-x-8">
          {" "}
          {/* Increased gap between images */}
          <img
            src={adani}
            alt="Placeholder 1"
            className="w-60 h-28 object-contain"
          />
          <img
            src={exide}
            alt="Placeholder 2"
            className="w-60 pr-10 h-28 object-contain"
          />
          <img
            src={goodwe}
            alt="Placeholder 3"
            className="w-60 h-28 object-contain"
          />
          <img
            src={jio}
            alt="Placeholder 4"
            className="w-60 h-28 object-contain"
          />
          <img
            src={tata}
            alt="Placeholder 5"
            className="w-60 h-28 object-contain"
          />
          <img
            src={renew}
            alt="Placeholder 6"
            className="w-60 h-28 oobject-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AutoScrollingImages;
