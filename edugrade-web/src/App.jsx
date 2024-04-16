import { useState } from "react";
import "./App.css";

import { Button } from "@material-tailwind/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-red-500">
        Click on the Vite and React logos to learn more
      </p>
      <Button>Button</Button>
    </>
  );
}

export default App;
