import { motion } from "framer-motion";

const Box2 = () => {
  return (
    <div className="pb-[20rem] p-[5rem]">
      <motion.div
        className="absolute w-[15rem] h-[15rem] bg-blue-600 flex flex-col items-center justify-center"
        drag
        dragConstraints={{
          top: 50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
      ></motion.div>
    </div>
  );
};

export default Box2;
