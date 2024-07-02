import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { pricingCards } from "../../data";

const Pricing = () => {
  const [isHourly, setIsHourly] = useState(true);

  const togglePricing = () => {
    setIsHourly(!isHourly);
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <div>
        <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-semibold"> Our Pricing </h1>
            <p className="font-normal text-base lg:pr-[20%] text-grey35">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>

          <div className="flex flex-row items-center bg-white p-3">
            <button
              className={`px-4 py-2 font-semibold rounded-md ${
                isHourly ? "bg-primary text-white" : "bg-gray-200"
              }`}
              onClick={togglePricing}
            >
              Hourly
            </button>
            <button
              className={`ml-2 px-4 py-2 font-semibold rounded-md ${
                !isHourly ? "bg-primary text-white" : "bg-gray-200"
              }`}
              onClick={togglePricing}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      {isHourly ? (
        <div className="grid lg:grid-cols-2 gap-4 bg-white99 lg:p-10 p-5 mt-20 rounded-lg">
          {pricingCards.map((pricingCard, index) => {
            const {
              id,
              title,
              amount,
              features,
              textOne,
              textTwo,
              textThree,
              textFour,
              textFive,
            } = pricingCard;

            return (
              <div key={index}>
                <div className="rounded-md shadow-md bg-white97 lg:p-10 p-5 space-y-10">
                  <h2 className="text-xl font-medium text-center bg-orange90 p-5">
                    {title}
                  </h2>
                  <p className="lg:text-5xl text-xl text-center">
                    {amount}
                    <span className="text-sm font-semibold"> /month </span>
                  </p>

                  <ul className="list-disc lg:p-5 p-3 bg-white rounded-lg space-y-5">
                    <h2 className="text-center font-medium text-grey15">
                      Available Features
                    </h2>
                    <div className="flex flow-row items-center gap-5 lg:p-5 p-2 border border-gray-300 rounded-md">
                      <div className="bg-orange95 p-1 border ">
                        <IoMdCheckmark />
                      </div>
                      <p className="text-xs lg:text-base"> {textOne} </p>
                    </div>
                    <div className="flex flow-row items-center gap-5 lg:p-5 p-2 border border-gray-300 rounded-md">
                      <div className="bg-orange95 p-2 border ">
                        <IoMdCheckmark />
                      </div>
                      <p className="text-xs lg:text-base"> {textTwo} </p>
                    </div>
                    <div className="flex flow-row items-center gap-5 lg:p-5 p-2 border border-gray-300 rounded-md">
                      <div className="bg-orange95 p-2 border ">
                        <IoMdCheckmark />
                      </div>
                      <p className="text-xs lg:text-base"> {textThree} </p>
                    </div>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-4 bg-white99 lg:p-10 p-5 mt-20 rounded-lg">
          {pricingCards.map((pricingCard, index) => {
            const {
              id,
              title,
              amount,
              features,
              textOne,
              textTwo,
              textThree,
              textFour,
              textFive,
              amountYear,
            } = pricingCard;

            return (
              <div key={index}>
                <div className="rounded-md shadow-md bg-white97 lg:p-10 p-5 space-y-10">
                  <h2 className="text-xl font-medium text-center bg-orange90 p-5">
                    {title}
                  </h2>
                  <p className="lg:text-5xl text-xl text-center">
                    {amountYear}
                    <span className="text-sm font-semibold"> / year </span>
                  </p>

                  <ul className="list-disc lg:p-5 p-3 bg-white rounded-lg space-y-5">
                    <h2 className="text-center font-medium text-grey15">
                      Available Features
                    </h2>
                    <div className="flex flow-row items-center gap-5 lg:p-5 p-2 border border-gray-300 rounded-md">
                      <div className="bg-orange95 p-1 border ">
                        <IoMdCheckmark />
                      </div>
                      <p className="text-xs lg:text-base"> {textOne} </p>
                    </div>
                    <div className="flex flow-row items-center gap-5 lg:p-5 p-2 border border-gray-300 rounded-md">
                      <div className="bg-orange95 p-2 border ">
                        <IoMdCheckmark />
                      </div>
                      <p className="text-xs lg:text-base"> {textTwo} </p>
                    </div>
                    <div className="flex flow-row items-center gap-5 lg:p-5 p-2 border border-gray-300 rounded-md">
                      <div className="bg-orange95 p-2 border ">
                        <IoMdCheckmark />
                      </div>
                      <p className="text-xs lg:text-base"> {textThree} </p>
                    </div>
                    <div className="flex flow-row items-center gap-5 lg:p-5 p-2 border border-gray-300 rounded-md">
                      <div className="bg-orange95 p-2 border ">
                        <IoMdCheckmark />
                      </div>
                      <p className="text-xs lg:text-base"> {textFour} </p>
                    </div>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pricing;
