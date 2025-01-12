import Calculator from "../components/Calculator";
import MainTitle from "../components/MainTitle";

const Hero = () => {
  return (
    <div className="flex relative">
      <MainTitle />
      <Calculator />
    </div>
  );
};

export default Hero;
