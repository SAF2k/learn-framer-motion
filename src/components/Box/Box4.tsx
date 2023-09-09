import { motion } from "framer-motion";

const Box4 = () => {
  return (
    <div className="pb-[20rem] p-[5rem]">
      <motion.div
        className="absolute w-[15rem] h-[15rem] bg-blue-600 flex flex-col items-center justify-center"
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          rotate: [0, 0, 360, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
        }}
      ></motion.div>
    </div>
  );
};

export default Box4;
