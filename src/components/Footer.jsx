import React from "react";
import { Logo } from "../assets/images";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="align-element">
      <footer className="footer py-20 text-base-content">
        <aside>
          <img src={Logo} alt="" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Home</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">About Us</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title"> Social Profiles </h6>
          <div className="flex flex-row items-center justify-between gap-5">
            <div className="bg-whiteTwo p-3 rounded-md">
              <FaFacebook size={30} />
            </div>
            <div className="bg-whiteTwo p-3 rounded-md">
              <FaTwitter size={30} />
            </div>
            <div className="bg-whiteTwo p-3 rounded-md">
              <FaLinkedin size={30} />
            </div>
          </div>
        </nav>
      </footer>

      <div className="w-[100%] h-0.5 bg-gray-300 mb-20"></div>

      <p className="text-center mb-10">
        &copy; SkillBridge. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
