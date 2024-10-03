import React, { useState, useEffect } from "react";

const AnimatedCounter = ({numsArray}) => {
  // Numbers array where the counter stops
  const numbersArray = numsArray; // Add your desired stop points here
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the target number index

  const targetNumber = numbersArray[currentIndex]; // Current target number
  const maxProgressForCounter = 65; // The progress at which the counter should stop (65%)

  // Calculate the increment speed to sync the counter with progress bar
  const progressToMax = maxProgressForCounter;
  const incrementSpeed = targetNumber / progressToMax; // Calculate how fast to increment

  // Function to increment the number
  useEffect(() => {
    let numberInterval;
    if (count < targetNumber && progress < maxProgressForCounter) {
      numberInterval = setInterval(() => {
        setCount((prev) => prev + incrementSpeed); // Increment based on the calculated speed
      }, 50); // Adjust interval as needed for smoothness
    }
    return () => clearInterval(numberInterval);
  }, [count, progress, targetNumber, incrementSpeed]);

  // Function to animate the progress bar
  useEffect(() => {
    let progressInterval;
    if (progress < 100) {
      progressInterval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 50); // Adjust the speed here
    } else {
      // Once progress reaches 100%, reset and move to the next target number
      setProgress(0);
      setCurrentIndex((prevIndex) =>
        prevIndex === numbersArray.length - 1 ? 0 : prevIndex + 1
      ); // Loop back to the start of the array
      setCount(0); // Reset the counter for the next cycle
    }
    return () => clearInterval(progressInterval);
  }, [progress, currentIndex, numbersArray.length]);

  // Ensure count doesn't exceed the target number when the progress reaches 65%
  useEffect(() => {
    if (progress >= maxProgressForCounter) {
      setCount(targetNumber);
    }
  }, [progress, targetNumber]);

  return (
    <div className="flex w-[30%] flex-col items-center">
      <div className="text-5xl w-full font-bold text-yellow-400 text-start">
        {Math.round(count)} %
      </div>
      <div className="text-white w-full">
        Lorem ipsum dolor sit amet
      </div>
      <div className="bg-gray-300 w-full h-1 mt-5">
        <div
          className="bg-orange-400 h-1"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedCounter;
