import React from "react";
import { NavLink } from "react-router-dom";
import {
  adobe,
  amazon,
  heroIcon,
  heroImg,
  netflix,
  notion,
  spotify,
  zapier,
  zoom,
} from "../../assets/images";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center space-y-5">
        <div className="bg-white99 p-5 shadow-sm flex flex-row items-center justify-between gap-5">
          <div className="bg-orange90 p-2">
            <img src={heroIcon} alt="" />
          </div>

          <h1 className="lg:text-4xl text-lg font-bold">
            <span className="text-orange70"> Unlock </span> Your Creative
            Potential.
          </h1>
        </div>
        <p className="lg:text-3xl text-2xl text-center font-medium">
          with Online Design and Development Courses.
        </p>
        <p className="text-sm">
          Learn from Industry Experts and Enhance Your Skills{" "}
        </p>

        <div className="pt-10 flex flex-row gap-5">
          <NavLink
            to="/courses"
            className="btn btn-md bg-primary text-white hover:text-black hover:bg-orange70 border-none"
          >
            Explore Courses
          </NavLink>
          <NavLink
            to="/pricing"
            className="btn btn-md bg-whiteFour text-black hover:text-black"
          >
            View Pricing
          </NavLink>
        </div>
      </div>

      {/* brands */}
      <div className="px-20 flex lg:flex-row flex-col items-center mt-20 bg-white">
        <div>
          <img src={zapier} alt="" />
        </div>
        <div>
          <img src={zoom} alt="" />
        </div>
        <div>
          <img src={spotify} alt="" />
        </div>
        <div>
          <img src={amazon} alt="" />
        </div>
        <div>
          <img src={adobe} alt="" />
        </div>
        <div>
          <img src={notion} alt="" />
        </div>
        <div>
          <img src={netflix} alt="" />
        </div>
      </div>

      {/* brand image */}
      <div className="mt-20">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
