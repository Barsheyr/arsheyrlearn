import React from "react";
import { testimonialCards } from "../../data";

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-semibold"> Testimonials </h1>
          <p className="font-normal text-base lg:pr-[20%] text-grey35">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="btn border-none bg-whiteOne mt-5 hover:bg-primary ">
          <p>View All</p>
        </div>
      </div>

      {/* cards */}
      <div className="grid lg:grid-cols-2 gap-5 mt-20">
        {testimonialCards.map((testimonialCard, index) => {
          const { id, name, image, description, btn } = testimonialCard;

          return (
            <div key={index} className="">
              <div className="bg-whiteFour p-10">
                <p className=" text-sm "> {description} </p>
              </div>

              <div className="flex flex-row items-center justify-between p-5 bg-whiteTwo">
                <div className="flex flex-row items-center gap-5">
                  <img src={image} alt="" />
                  <p className="font-semibold text-grey20"> {name} </p>
                </div>
                <div className="btn border-none bg-whiteOne hover:bg-orange70 ">
                  {btn}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
