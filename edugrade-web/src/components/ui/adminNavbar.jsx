import {
  Button,
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate, useNavigation } from "react-router-dom";

export default function AdminNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const { user, loading, error, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
    window.location.reload();
  };

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky top-0 z-20 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          EDU GRADE
        </Typography>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-x-1">
            {user ? (
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                onClick={handleLogout}
              >
                <span>Log out</span>
              </Button>
            ) : (
              <Link to="login">
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Log In</span>
                </Button>
              </Link>
            )}
            {!user && (
              <Link to="register">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Sign in</span>
                </Button>
              </Link>
            )}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="flex items-center gap-x-1">
          {user ? (
            <Button
              fullWidth
              variant="text"
              size="sm"
              className=""
              onClick={handleLogout}
            >
              <span>Log out</span>
            </Button>
          ) : (
            <Link to="/login">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
            </Link>
          )}
          {!user && (
            <Link to="/register">
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
              </Button>
            </Link>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
}
