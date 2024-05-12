import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Router from "../router/router";
import { AuthContext } from "../context/authContext";
import Navbar from "../components/ui/navbar";
import Home from "../pages/home";
import Footer from "../components/common/footer";
import AdminNavbar from "../components/ui/adminNavbar";
import SideNav from "../components/common/sideNav";

const Layout = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // const isAdmin = user && user.role == "student";
  const isAdmin = true;

  const showAdminNavbar = location.pathname === "/admin";

  const showNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  console.log("hideNavbar", showNavbar);

  const showFinaceNavbar = location.pathname === "/finace";

  return (
    <>
      {!isAdmin ? (
        <div className="flex-1 relative h-screen flex flex-col">
          <Navbar />
          <Router />
        </div>
      ) : (
        <div className="h-screen">
          <nav className="">
            <AdminNavbar />
          </nav>
          <div className="flex">
            <SideNav />
            <div className="flex-1 relative h-screen flex flex-col overflow-auto">
              <Router />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
