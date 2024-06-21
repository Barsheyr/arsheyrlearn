import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
  const [isHourly, setIsHourly] = useState(true);

  const togglePricing = () => {
    setIsHourly(!isHourly);
  };

  return (
    <div className="container mx-auto p-4">
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
        <div className="grid grid-cols-2 gap-4 bg-red-400 p-10 mt-20 rounded-lg">
          <div className="p-4 border rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Basic</h2>
            <p className="text-2xl">$10/hr</p>
            <ul className="list-disc pl-5">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
          <div className="p-4 border rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Standard</h2>
            <p className="text-2xl">$20/hr</p>
            <ul className="list-disc pl-5">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-4 bg-whiteFour p-10 mt-20 rounded-lg">
          <div className="p-4 border rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Basic</h2>
            <p className="text-2xl">$1000/year</p>
            <ul className="list-disc pl-5">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
          <div className="p-4 border rounded-md shadow-md bg-whiteTwo space-y-10">
            <h2 className="text-xl font-medium text-center bg-orange90 p-4">
              Pro Plan
            </h2>
            <p className="text-5xl text-center">
              $800 <span className="text-sm font-semibold"> /year </span>
            </p>
            <ul className="list-disc p-10 bg-white rounded-lg space-y-10">
              <h2 className="text-center font-medium text-grey15">
                Available Features
              </h2>
              <div className="flex flow-row items-center gap-5 px-5 py-2 border border-gray-300 rounded-md">
                <div className="bg-orange95 p-2 border ">
                  <IoMdCheckmark />
                </div>
                <p> Unlimited access to all courses </p>
              </div>
              <div className="flex flow-row items-center gap-5 px-5 py-2 border border-gray-300 rounded-md">
                <div className="bg-orange95 p-2 border ">
                  <IoMdCheckmark />
                </div>
                <p> Unlimited course materials and resources </p>
              </div>
              <div className="flex flow-row items-center gap-5 px-5 py-2 border border-gray-300 rounded-md">
                <div className="bg-orange95 p-2 border ">
                  <IoMdCheckmark />
                </div>
                <p> Priority support from instructor </p>
              </div>
              <div className="flex flow-row items-center gap-5 px-5 py-2 border border-gray-300 rounded-md">
                <div className="bg-orange95 p-2 border ">
                  <IoMdCheckmark />
                </div>
                <p> Course completion certificate </p>
              </div>
              <div className="flex flow-row items-center gap-5 px-5 py-2 border border-gray-300 rounded-md">
                <div className="bg-orange95 p-2 border ">
                  <IoMdCheckmark />
                </div>
                <p> Ad-free experience </p>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
