import { useState, useEffect } from "react";

const FadingTextCycle = () => {
  // Array of texts to cycle through
  const texts = ["Lorem ipsum dolor sit amet consectetur adipisicing", "Text Two", "Text Three", "Text Four", "Text Five"];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textCycleInterval = setInterval(() => {
      setIsVisible(false); // Start fade-out
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true); // Start fade-in
      }, 500); // Duration for fade-out
    }, 4500); // Cycle every 3 seconds

    return () => clearInterval(textCycleInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <p
        className={`text-white font-semibold text-5xl w-[75%] text-center text-wrap transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {texts[currentTextIndex]}
      </p>
    </div>
  );
};

export default FadingTextCycle;
