import { Card, Input, Button, Typography } from "@material-tailwind/react";

const Login = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" olor="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name or email-address
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="name or email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="*******"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Button className="mt-6" fullWidth>
              log in
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Do not have an account?
              <a href="/register" className="font-medium text-gray-900">
                Sign Up
              </a>
            </Typography>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
