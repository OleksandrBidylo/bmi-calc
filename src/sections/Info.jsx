import eat from "../../public/images/icon-eating.svg";
import gym from "../../public/images/icon-exercise.svg";
import sleep from "../../public/images/icon-sleep.svg";

const Info = () => {
  return (
    <div className="info rounded-xl ml-16 mr-16 mb-32">
      <ul className="flex  gap-52   pl-44 pr-32">
        <li className="text-left pt-16  pb-16">
          <img className="mb-8" src={eat} />
          <p className="text-xl font-semibold mb-5">Healthy eating</p>
          <p className="darkBlue max-w-lg">
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </li>
        <li className="text-left pt-16">
          <img className="mb-8" src={gym} />
          <p className="text-xl font-semibold mb-5">Regular exercise</p>
          <p className="darkBlue max-w-lg">
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </li>
        <li className="text-left pt-16">
          <img className="mb-8" src={sleep} />
          <p className="text-xl font-semibold mb-5">Adequate sleep</p>
          <p className="darkBlue max-w-lg">
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Info;
