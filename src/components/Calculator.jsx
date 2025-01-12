import { useState, useEffect } from "react";

const Calculator = () => {
  const [system, setSystem] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [idealWeightRange, setIdealWeightRange] = useState("");

  const calculateBMI = (h, w) => {
    const heightValue = parseFloat(h);
    const weightValue = parseFloat(w);

    if (!heightValue || !weightValue || heightValue <= 0 || weightValue <= 0) {
      setBmi(null);
      setIdealWeightRange("");
      return;
    }

    let calculatedBMI;
    if (system === "metric") {
      calculatedBMI = weightValue / (heightValue / 100) ** 2;
    } else {
      calculatedBMI = (weightValue / heightValue ** 2) * 703;
    }

    setBmi(calculatedBMI.toFixed(2));
    calculateIdealWeight(heightValue);
  };

  const calculateIdealWeight = (h) => {
    if (!h || h <= 0) {
      setIdealWeightRange("");
      return;
    }

    let minWeight, maxWeight;

    if (system === "metric") {
      minWeight = 18.5 * (h / 100) ** 2;
      maxWeight = 24.9 * (h / 100) ** 2;
    } else {
      minWeight = (18.5 * h ** 2) / 703;
      maxWeight = (24.9 * h ** 2) / 703;
    }

    setIdealWeightRange(
      `${minWeight.toFixed(1)}${
        system === "metric" ? "kgs" : "lbs"
      } - ${maxWeight.toFixed(1)}${system === "metric" ? "kgs" : "lbs"}`
    );
  };

  useEffect(() => {
    if (height && weight) {
      calculateBMI(height, weight);
    } else {
      setBmi(null);
      setIdealWeightRange("");
    }
  }, [height, weight, system]);

  return (
    <div className="rounded-xl shadow-xl calculator absolute right-96 top-40 bg-white pl-8">
      <p className="font-semibold mt-8 text-3xl">Enter your details below</p>

      <div className="flex gap-52 mt-8 text-xl font-semibold">
        <div className="flex gap-2">
          <input
            type="radio"
            name="radio-2"
            value="metric"
            checked={system === "metric"}
            onChange={(e) => setSystem(e.target.value)}
            className="radio radio-primary"
          />
          <p>Metric</p>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            name="radio-2"
            value="imperial"
            checked={system === "imperial"}
            onChange={(e) => setSystem(e.target.value)}
            className="radio radio-primary"
          />
          <p>Imperial</p>
        </div>
      </div>

      <div className="flex gap-10 mt-8 mb-8">
        <div className="flex flex-col">
          <p className="text-gray-500 mb-2 text-lg">Height</p>
          <div className="relative flex w-64 text-3xl font-semibold">
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border-2 border-gray-500 pl-5 h-16 w-64 text-3xl font-semibold rounded-xl focus:outline-none focus:border-blue-600"
              placeholder="0"
              type="number"
            />
            <p className="absolute top-3 right-3 text-blue-700">
              {system === "metric" ? "cm" : "in"}
            </p>
          </div>
        </div>
        <div className="flex flex-col ">
          <p className="text-gray-500 mb-2 text-lg">Weight</p>
          <div className="relative flex w-64 text-3xl font-semibold">
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border-2 border-gray-500 pl-5 h-16 w-64 text-3xl font-semibold rounded-xl focus:outline-none focus:border-blue-600"
              placeholder="0"
              type="number"
            />
            <p className="absolute top-3 right-3 text-blue-700">
              {system === "metric" ? "kg" : "lbs"}
            </p>
          </div>
        </div>
      </div>

      <div className="pl-8 bg-blue-700 text-white greatins rounded-r-full flex flex-col justify-center items-start">
        {!bmi && <p className="font-semibold text-3xl">Welcome!</p>}
        {bmi ? (
          <div className="flex justify-center items-center gap-24">
            <div className="flex flex-col">
              <p className="text-md mt-4 pb-2 font-semibold text-lg">
                Your BMI is...
              </p>
              <p className="font-semibold text-5xl pb-6">{bmi}</p>
            </div>
            <div className="flex flex-col max-w-56 ">
              <p className="">Your BMI suggests you’re a healthy weight.</p>
              <p className="">
                Your ideal weight is between{" "}
                <span className="font-semibold"> {idealWeightRange}.</span>
              </p>
            </div>
          </div>
        ) : (
          <p className="text-md mt-4">
            Enter your height and weight and you’ll see your BMI result here
          </p>
        )}
      </div>
    </div>
  );
};

export default Calculator;
