import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { pricingCards } from "../data";

const PricingPage = () => {
  const [isHourly, setIsHourly] = useState(true);

  const togglePricing = () => {
    setIsHourly(!isHourly);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-5">
        <h1 className="text-4xl font-semibold text-grey15"> Our Pricings </h1>
        <p className="font-normal text-base text-grey35">
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </p>
      </div>

      <div className="w-[100%] h-0.5 bg-gray-300 mt-20"></div>

      <div>
        <div className="flex flex-row items-center justify-center mx-auto max-w-xs mt-10 rounded-md  bg-white p-3">
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

      <div className="py-20 grid grid-cols-2 bg-white99 mt-20 px-20">
        <div>
          <h1 className="text-4xl">
            Frequently <br /> Asked Questions
          </h1>
        </div>
        <div className="space-y-10">
          <div className="collapse collapse-arrow bg-white99 border border-gray-300 p-5">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Can I enroll in multiple courses at once?
            </div>
            <div className="collapse-content">
              <div className="w-[100%] h-0.5 bg-gray-200 my-5"></div>
              <p>
                Absolutely! You can enroll in multiple courses simultaneously
                and access them at your convenience.
              </p>
              <div className="bg-white90 mt-5 p-5 rounded-md">
                <p> Enrollment Process for Different Courses </p>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white99">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
