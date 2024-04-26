import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import Loading from "../../components/common/loading";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleUserRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(`http://localhost:3000/register`, userDetails);
      setUserDetails({
        userName: "",
        email: "",
        password: "",
      });
      setIsLoading(false);
      console.log(userDetails);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          onSubmit={handleUserRegistration}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              name="userName"
              type="text"
              size="lg"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setUserDetails(e.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              name="email"
              type="email"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setUserDetails(e.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              name="password"
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setUserDetails(e.target.value)}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            className="mt-6"
            fullWidth
            style={{ backgroundColor: "rgb(0, 86, 210)", color: "#fff" }}
          >
            {isLoading ? <Loading /> : "Sign Up"}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-blue-800">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
