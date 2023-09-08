import { motion } from "framer-motion";

const Box3 = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="pb-[20rem] p-[5rem]">
      <motion.div
        className="absolute w-[15rem] h-[15rem] bg-blue-600 flex flex-col items-center justify-center"
        variants={boxVariant}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li
              key={box}
              variants={itemVariant}
              className="bg-white list-none h-6 w-8 p-4 m-3"
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Box3;
