import { TypeAnimation } from "react-type-animation";

type SequenceArray = [string, number, string, number];
type TypeAnimationProps = {
  strArray: SequenceArray;
  className: string;
};

const TypeEffect = ({ strArray, className }: TypeAnimationProps) => {
  return (
    <TypeAnimation
      sequence={strArray}
      wrapper="span"
      speed={50}
      className={className}
      repeat={Infinity}
    />
  );
};

export default TypeEffect;
