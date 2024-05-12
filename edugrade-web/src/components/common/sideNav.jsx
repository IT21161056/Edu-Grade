import React from "react";
import { Link } from "react-router-dom";
const sidebarItems = [{ label: "Manage Course", href: "/manage-course" }];

const SideNav = () => {
  return (
    <aside className="w-[200px] p-2  border-r">
      {sidebarItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="rounded-lg h-[40px] bg-white flex items-center p-4 cursor-pointer transition-all hover:bg-blue-gray-100 border"
        >
          {item.label}
        </Link>
      ))}
    </aside>
  );
};

export default SideNav;
