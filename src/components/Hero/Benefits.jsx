import React from "react";
import { benefits } from "../../data";
import { MdArrowOutward } from "react-icons/md";

const Benefits = () => {
  return (
    <section className="mt-20">
      <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-semibold">Benefits</h1>
          <p className="font-normal text-base lg:pr-[20%] text-grey35">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="btn border-none bg-white99 mt-5 hover:bg-primary ">
          <p>View All</p>
        </div>
      </div>

      {/* cards */}

      <div className="grid lg:grid-cols-3 gap-5 mt-20">
        {benefits.map((benefit, index) => {
          const { id, name, title, description } = benefit;

          return (
            <div key={index} className="bg-white99 shadow-sm rounded-md">
              <div className="flex flex-col items-end justify-between gap-10 p-10">
                <div className="text-6xl text-right font-bold"> {title} </div>
                <div className="space-y-5">
                  <h1 className="font-semibold text-lg"> {name} </h1>
                  <p className="font-normal text-grey70 text-sm">
                    {description}
                  </p>
                </div>
                <MdArrowOutward
                  size={40}
                  color="#FFBF66"
                  className="bg-white95 rounded-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
