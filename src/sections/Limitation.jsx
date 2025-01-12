const Limitation = () => {
  return (
    <div className="ml-56">
      <div className="grid grid-cols-2 gap-96 mb-8">
        <div className="flex flex-col limitation">
          <p className="text-4xl font-semibold mb-5">Limitations of BMI</p>
          <p className="darkBlue">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className="flex flex-col shadow-2xl shadow-gray-300 rounded-xl w-96 h-60 justify-center p-8">
          <div className="flex mb-4 gap-4">
            <img
              width={32}
              height={32}
              src="../../public/images/icon-gender.svg"
            />
            <p className="font-semibold text-xl">Gender</p>
          </div>
          <p className="darkBlue">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
      </div>
      <div className="flex mb-8 gap-12 gridCols">
        <div className="flex flex-col shadow-2xl shadow-gray-300 rounded-xl w-96 h-60 justify-center p-8">
          <div className="flex mb-4 gap-4">
            <img
              width={32}
              height={32}
              src="../../public/images/icon-age.svg"
            />
            <p className="font-semibold text-xl">Age</p>
          </div>
          <p className="darkBlue">
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        <div className="flex flex-col shadow-2xl shadow-gray-300 rounded-xl w-96 h-60 justify-center p-8">
          <div className="flex mb-4 gap-4">
            <img
              width={32}
              height={32}
              src="../../public/images/icon-muscle.svg"
            />
            <p className="font-semibold text-xl">Muscle</p>
          </div>
          <p className="darkBlue">
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </p>
        </div>
      </div>
      <div className=" flex mb-8 gap-8 flexCols">
        <div className="flex flex-col shadow-2xl shadow-gray-300 rounded-xl w-96 h-60 justify-center p-8">
          <div className="flex mb-4 gap-4">
            <img
              width={32}
              height={32}
              src="../../public/images/icon-pregnancy.svg"
            />
            <p className="font-semibold text-xl">Pregnancy</p>
          </div>
          <p className="darkBlue">
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>
        <div className="flex flex-col shadow-2xl shadow-gray-300 rounded-xl w-96 h-60 justify-center p-8">
          <div className="flex mb-4 gap-4">
            <img
              width={32}
              height={32}
              src="../../public/images/icon-race.svg"
            />
            <p className="font-semibold text-xl">Race</p>
          </div>
          <p className="darkBlue">
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Limitation;
