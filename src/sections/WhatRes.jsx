import photo from "../../public/images/image-man-eating.webp";

const WhatRes = () => {
  return (
    <div className="grid grid-cols-2 items-center mt-16 mb-24 gap-96">
      <img className="ml-36" width={564} src={photo} />
      <div className="flex flex-col">
        <p className="text-4xl font-semibold max-w-sm mb-8 pt-32 ">
          What your BMI result means
        </p>
        <p className="text-md max-w-md darkBlue">
          A BMI range of 18.5 to 24.9 is considered a healthy weight.
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  );
};

export default WhatRes;
