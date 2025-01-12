const MainTitle = () => {
  return (
    <div className="flex flex-col mainTitle text-wrap rounded-t rounded-3xl pl-52">
      <img className=" mt-16 w-14 h-14 " src="../../public/images/logo.svg" />
      <div className="mt-36">
        <h1 className="text-6xl font-semibold mb-9">
          Body Mass Index Calculator
        </h1>
        <p className="text-md darkBlue hero-text text-left">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
    </div>
  );
};

export default MainTitle;
