import React from "react";
import { coursePages } from "../../data";
import { Link } from "react-router-dom";

const CourseHero = ({ coursePage }) => {
  const {
    id,
    img1,
    img2,
    img3,
    date,
    level,
    author,
    title,
    description,
    btn,
    curriculum1,
    curriculum2,
    curriculum3,
    curriculum4,
    curriculum5,
  } = coursePage;
  return (
    <section>
      <div>
        <div className="flex flex-col gap-10 mt-20">
          <div
            key={id}
            className="bg-white99 lg:p-20 p-10 rounded-lg space-y-10"
          >
            <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between">
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-semibold"> {title} </h1>
                <p className="font-normal text-base lg:pr-[20%] text-grey35">
                  {description}
                </p>
              </div>

              <div className="btn border-none bg-white95 mt-5 hover:bg-primary ">
                <Link to={`/courses/${id}`}>{btn}</Link>
              </div>
            </div>

            {/* second section */}
            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-3 lg:gap-10 gap-5">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
              <div className="flex lg:flex-row flex-col lg:items-center justify-between">
                <div className="flex flex-row gap-5">
                  <p className="bg-whiteThree border border-gray-300 rounded-md text-sm p-2">
                    {date}
                  </p>
                  <p className="bg-whiteThree border border-gray-300 rounded-md text-sm p-2">
                    {level}
                  </p>
                </div>
                <div>
                  <p className="text-grey15 font-medium mt-5 lg:mt0">
                    {author}
                  </p>
                </div>
              </div>

              {/* third section */}
              <div>
                <div className="border border-gray-200 p-5 rounded-t-lg">
                  <h1 className="text-2xl font-semibold text-grey15">
                    Curriculum
                  </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 border border-gray-200 p-10 rounded-b-lg gap-10">
                  <div className="space-y-4">
                    <p className="text-grey15 font-extrabold text-5xl">01</p>
                    <h3 className="text-grey20 font-medium">{curriculum1}</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-grey15 font-extrabold text-5xl">02</p>
                    <h3 className="text-grey20 font-medium">{curriculum2}</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-grey15 font-extrabold text-5xl">03</p>
                    <h3 className="text-grey20 font-medium">{curriculum3}</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-grey15 font-extrabold text-5xl">04</p>
                    <h3 className="text-grey20 font-medium">{curriculum4}</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-grey15 font-extrabold text-5xl">05</p>
                    <h3 className="text-grey20 font-medium">{curriculum5}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
