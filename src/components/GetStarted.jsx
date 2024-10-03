import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`flex justify-center items-center flex-col bg-[#141414] w-[100%] h-[100%] rounded-full`}
    >
      <div className={`flex justify-center items-start flex-row text-yellow-300 gap-2`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient text-yellow-400">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
