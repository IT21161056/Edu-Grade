import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Router from "../router/router";
import { AuthContext } from "../context/authContext";
import Navbar from "../components/ui/navbar";
import Home from "../pages/home";

const Layout = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  // to render the alternative Navbar or the default Navbar
  const showNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  console.log("hideNavbar", showNavbar);

  const showFinaceNavbar =
    location.pathname === "/finace" ||
    location.pathname === "/finance/salary" ||
    location.pathname === "/finance/employee" ||
    location.pathname === "/finance/salarySheet" ||
    location.pathname === "/finance/FinanceHealth" ||
    location.pathname === "/finance/refund" ||
    location.pathname === "/finance/addRefund" ||
    location.pathname === "/finance/updateRefund/:id";

  return (
    <div>
      {!showNavbar && <Navbar />}
      <Router />

      {/* <Home /> */}
    </div>
  );
};

export default Layout;
