const links = [
  { id: 1, url: "/about", text: "About Us" },
  { id: 2, url: "/courses", text: "Course" },
  { id: 3, url: "/pricing", text: "Pricing" },
  { id: 4, url: "/contact", text: "Contacts" },
];
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/user_context";

const NavlLinks = () => {
  const { myUser } = useUserContext();

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id} className="hover:bg-white90 rounded-md">
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
      {myUser && (
        <li className="hover:bg-white90 rounded-md">
          <NavLink to="/checkout" className="capitalize">
            checkout
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavlLinks;
