import { motion, useAnimation } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="text-black font-semibold py-2 px-4 rounded-lg mr-3 my-5 hover:opacity-50 bg-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Box5 = () => {
  const control = useAnimation();

  const moveRight = () => {
    control.start({
      x: 1500,
      transition: {
        duration: 1,
      },
    });
  };

  const moveLeft = () => {
    control.start({
      x: 0,
      transition: {
        duration: 1,
      },
    });
  };

  const circle = () => {
    control.start({
      borderRadius: "50%",
      transition: {
        duration: 0.5,
      },
    });
  };

  const square = () => {
    control.start({
      borderRadius: "0%",
      transition: {
        duration: 0.5,
      },
    });
  };

  const stop = () => {
    control.stop();
  };

  return (
    <div className="pb-[20rem] p-[5rem]">
      <Button onClick={moveLeft}>MOve Left</Button>
      <Button onClick={moveRight}>Move Right</Button>
      <Button onClick={circle}>Circle</Button>
      <Button onClick={square}>Square</Button>
      <Button onClick={stop}>Stop</Button>
      <motion.div
        className="absolute w-[15rem] h-[15rem] bg-blue-600 flex flex-col items-center justify-center"
        animate={control} 
      ></motion.div>
    </div>
  );
};

export default Box5;
