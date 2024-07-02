import React from "react";
const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/courses", text: "Course" },
  { id: 3, url: "/about", text: "About Us" },
  { id: 4, url: "/pricing", text: "Pricing" },
  { id: 5, url: "/contact", text: "Contacts" },
];
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <section className="px-10">
      {links.map((link) => {
        const { id, url, text } = link;
        // if (url === "cart" && !user) return null;
        return (
          <li key={id} className="flex flex-col py-5">
            <NavLink
              className="font-secondary text-primary font-bold hover:text-black"
              to={url}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </section>
  );
};

export default MobileNav;
