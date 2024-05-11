import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Router from "../router/router";
import { AuthContext } from "../context/authContext";
import Navbar from "../components/ui/navbar";
import Home from "../pages/home";
import Footer from "../components/common/footer";
import AdminNavbar from "../components/ui/adminNavbar";

const Layout = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const isAdmin = user && user.role == "student";

  const showNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  console.log("hideNavbar", showNavbar);

  const showFinaceNavbar = location.pathname === "/finace";

  return (
    <div>
      {!showNavbar && (!isAdmin ? <Navbar /> : <AdminNavbar />)}

      <Router />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
