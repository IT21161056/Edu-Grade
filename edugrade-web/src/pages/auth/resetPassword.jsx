import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import Loading from "../../components/common/loading";

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex items-center justify-center mt-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" olor="blue-gray">
          Reset your password
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to reset password.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name or email-address
            </Typography>
            <Input
              name="userName"
              type="text"
              size="lg"
              placeholder="name or email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Previous Password
            </Typography>
            <Input
              name="password"
              type="password"
              size="lg"
              placeholder="*******"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              New Password
            </Typography>
            <Input
              name="rePassword"
              type="password"
              size="lg"
              placeholder="*******"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Button
              className="mt-6"
              fullWidth
              style={{ backgroundColor: "rgb(0, 86, 210)", color: "#fff" }}
            >
              {isLoading ? <Loading /> : "Submit"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ResetPassword;
