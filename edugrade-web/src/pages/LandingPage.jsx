import {
  Button,
  Typography,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Typography variant="h2" className="mb-4">
          Welcome to Edu Grade Platform
        </Typography>
        <Typography variant="lead" className="mb-8 text-gray-600">
          Unlock your learning potential with our wide range of courses.
        </Typography>
        <Button>Browse Courses</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <Card className="shadow-lg">
          <CardBody>
            <Typography variant="h5" className="mb-2">
              Web Development
            </Typography>
            <Typography variant="paragraph" className="text-gray-600">
              Learn to build modern web applications.
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center">
            <Button>Explore</Button>
          </CardFooter>
        </Card>

        <Card className="shadow-lg">
          <CardBody>
            <Typography variant="h5" className="mb-2">
              Data Science
            </Typography>
            <Typography variant="paragraph" className="text-gray-600">
              Explore the world of data analysis and machine learning.
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center">
            <Button>Explore</Button>
          </CardFooter>
        </Card>

        <Card className="shadow-lg">
          <CardBody>
            <Typography variant="h5" className="mb-2">
              UI/UX Design
            </Typography>
            <Typography variant="paragraph" className="text-gray-600">
              Create beautiful and user-friendly interfaces.
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center">
            <Button>Explore</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;