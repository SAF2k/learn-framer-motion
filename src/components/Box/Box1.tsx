import { motion } from "framer-motion";
import { useState } from "react";

const Box1 = () => {

  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className="pb-[20rem] p-[5rem] h-[25rem] overflow-clip">
      <div className="text-xl absolute top-[25%] right-[50%] -z-10 text-center">Click </div>
      <motion.div
        className="w-[15rem] h-[15rem] bg-blue-600 flex flex-col items-center justify-center"
        animate={{
          x: isAnimating ? 1500 : 0,
          rotate: isAnimating ? 360 : 0,
          opacity: isAnimating ? 1 : 0.5,
        }}
        initial={{
          opacity: 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
        }}
        onClick={() => setIsAnimating(!isAnimating)}
      ></motion.div>
    </div>
  );
};

export default Box1;
