import { FaUserAlt, FaHome, FaEnvelope } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
const routes = {
  sidebar: [
    { name: "home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUserAlt /> },
    { name: "portfolio", path: "/portfolio", icon: <AiFillShopping /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
    { name: "Blog", path: "/blog", icon: <BsFillChatDotsFill /> },
  ],
};

export default routes;
