import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Router from "../router/router";
import { AuthContext } from "../context/authContext";
import Navbar from "../components/ui/navbar";
import Home from "../pages/home";
import Footer from "../components/common/footer";

const Layout = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  // to render the alternative Navbar or the default Navbar
  const showNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  console.log("hideNavbar", showNavbar);

  const showFinaceNavbar = location.pathname === "/finace";

  return (
    <div>
      {!showNavbar && <Navbar />}
      <Router />
      <Footer />
    </div>
  );
};

export default Layout;
