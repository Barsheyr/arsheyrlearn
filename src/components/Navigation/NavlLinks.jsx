const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/courses", text: "Course" },
  { id: 3, url: "/about", text: "About Us" },
  { id: 4, url: "/pricing", text: "Pricing" },
  { id: 5, url: "/contact", text: "Contacts" },
];
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";

const NavlLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        // if ((url === "checkout" || url === "orders") && !user) return null;
        return (
          <li key={id} className="hover:bg-white90 rounded-md">
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavlLinks;
