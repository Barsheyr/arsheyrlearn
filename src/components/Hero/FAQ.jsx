import React from "react";

const FAQ = () => {
  return (
    <div className="py-20 grid lg:grid-cols-2 bg-white99 mt-20 lg:px-20 px-10">
      <div className="space-y-5">
        <h1 className="text-4xl font-bold">
          Frequently <br /> Asked Questions
        </h1>
        <p>
          Still you have any questions? Contact our Team via
          support@skillbridge.com
        </p>
        <button className="btn"> See All FAQ's</button>
      </div>
      <div className="space-y-10 mt-20">
        <div className="collapse collapse-arrow bg-white99 border border-gray-300 p-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Can I enroll in multiple courses at once?
          </div>
          <div className="collapse-content">
            <div className="w-[100%] h-0.5 bg-gray-200 my-5"></div>
            <p>
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
            <div className="bg-white90 mt-5 p-5 rounded-md">
              <p> Enrollment Process for Different Courses </p>
            </div>
          </div>
        </div>
        {/* 2*/}
        <div className="collapse collapse-arrow bg-white99 border border-gray-300 p-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What kind of support can I expect from instructors?
          </div>
          <div className="collapse-content">
            <div className="w-[100%] h-0.5 bg-gray-200 my-5"></div>
            <p>
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
            <div className="bg-white90 mt-5 p-5 rounded-md">
              <p> Enrollment Process for Different Courses </p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="collapse collapse-arrow bg-white99 border border-gray-300 p-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Are the courses self-paced or do they have specific start and end
            dates?
          </div>
          <div className="collapse-content">
            <div className="w-[100%] h-0.5 bg-gray-200 my-5"></div>
            <p>
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
            <div className="bg-white90 mt-5 p-5 rounded-md">
              <p> Enrollment Process for Different Courses </p>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="collapse collapse-arrow bg-white99 border border-gray-300 p-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Are there any prerequisites for the courses?
          </div>
          <div className="collapse-content">
            <div className="w-[100%] h-0.5 bg-gray-200 my-5"></div>
            <p>
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
            <div className="bg-white90 mt-5 p-5 rounded-md">
              <p> Enrollment Process for Different Courses </p>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="collapse collapse-arrow bg-white99 border border-gray-300 p-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Can I download the course materials for offline access?
          </div>
          <div className="collapse-content">
            <div className="w-[100%] h-0.5 bg-gray-200 my-5"></div>
            <p>
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
            <div className="bg-white90 mt-5 p-5 rounded-md">
              <p> Enrollment Process for Different Courses </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
