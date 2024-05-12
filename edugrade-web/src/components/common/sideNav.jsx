import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
const sidebarItems = [{ label: "Manage Course", href: "/manage-course" }];

const SideNav = () => {
  //   const { user } = useContext(AuthContext);

  const user = {
    role: "admin",
  };

  let items = [];

  if (user) {
    if (user.role == "admin") {
      items = [
        { label: "Manage Course", href: "/manage-course" },
        { label: "Manage Users", href: "/manage-user" },
      ];
    }
    if (user.role == "instructor") {
      items = [{ label: "Manage Course", href: "/manage-course" }];
    }
  }
  return (
    <aside className="w-[200px] p-2  border-r">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="rounded-lg h-[40px] bg-white flex items-center p-4 cursor-pointer transition-all hover:bg-blue-gray-100 border mb-2"
        >
          {item.label}
        </Link>
      ))}
    </aside>
  );
};

export default SideNav;
