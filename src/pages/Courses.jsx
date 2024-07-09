import React from "react";
import { CourseHero } from "../components";
import { coursePages } from "../data";

const Courses = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-5">
        <h1 className="text-4xl font-semibold text-grey15">
          Online Courses on Design and Development
        </h1>
        <p className="font-normal text-base text-grey35">
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </div>

      <div className="w-[100%] h-0.5 bg-gray-300 mt-20"></div>

      <div>
        {coursePages.map((coursePage) => {
          return <CourseHero coursePage={coursePage} key={coursePage.id} />;
        })}
      </div>
    </section>
  );
};

export default Courses;
