import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import axios from "axios";
import Loading from "../../components/common/loading";
import { useForm } from "react-hook-form";
import FormItem from "../../components/common/formItem";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { loading, error, dispatch } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleUserLogin = async (formData) => {
    setIsLoading(true);
    dispatch({ type: "LOGIN_START" });

    await axios
      .post(`http://localhost:8000/api/user/auth`, formData)
      .then((res) => {
        reset();
        setIsLoading(false);
        console.log(res);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to login.
        </Typography>
        <form
          onSubmit={handleSubmit(handleUserLogin)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3 ">
              Your Name or email-address
            </Typography>
            <FormItem name={"email"} errors={errors}>
              <Input
                name="email"
                {...register("email", {
                  required: "Email is required!",
                })}
                placeholder="example@gmail.com"
                labelProps={{
                  className: "before:!mr-0 after:!ml-0",
                }}
                error={Boolean(errors.email)}
              />
            </FormItem>

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <FormItem name={"password"} errors={errors}>
              <Input
                name="password"
                type="password"
                size="lg"
                placeholder="*******"
                {...register("password", {
                  required: "Password is required!",
                })}
                labelProps={{
                  className: "before:!mr-0 after:!ml-0",
                }}
                error={Boolean(errors.password)}
              />
            </FormItem>
            <Button
              type="submit"
              className="mt-6"
              fullWidth
              style={{ backgroundColor: "rgb(0, 86, 210)", color: "#fff" }}
            >
              {isLoading ? <Loading /> : "Log In"}
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Do not have an account?{" "}
              <Link to="/register" className="font-medium text-blue-800">
                Sign Up
              </Link>
            </Typography>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
