import React from "react";
import { courseCards } from "../../data";
import { NavLink } from "react-router-dom";

const Courses = () => {
  return (
    <section className="py-20">
      <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-semibold"> Courses </h1>
          <p className="font-normal text-base lg:pr-[20%] text-grey35">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="btn border-none bg-white97 mt-5 hover:bg-primary ">
          <p>View All</p>
        </div>
      </div>

      {/* cards */}
      <div className="grid lg:grid-cols-2 gap-5 mt-20">
        {courseCards.map((courseCard, index) => {
          const {
            id,
            name,
            image,
            date,
            level,
            author,
            title,
            description,
            btn,
          } = courseCard;

          return (
            <div key={index} className="bg-white99 shadow-sm rounded-md">
              <div className="lg:p-10 p-5 space-y-5">
                <img src={image} alt="" className="w-full" />
                <div className="flex lg:flex-row flex-col lg:items-center justify-between space-y-5">
                  <div className="flex flex-row gap-5">
                    <p className="bg-whiteThree border border-gray-300 rounded-md text-sm p-2">
                      {date}
                    </p>
                    <p className="bg-whiteThree border border-gray-300 rounded-md text-sm p-2">
                      {level}
                    </p>
                  </div>
                  <div>
                    <p className="text-grey15 font-medium"> {author}</p>
                  </div>
                </div>
                {/* title */}
                <div className="flex flex-col gap-5">
                  <h1 className="text-2xl font-semibold"> {title} </h1>
                  <p className="text-grey30 text-sm"> {description} </p>

                  <NavLink
                    to=""
                    className="btn btn-md w-full bg-white95 text-grey15 hover:text-black hover:bg-orange70 border-none"
                  >
                    {btn}
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Courses;
