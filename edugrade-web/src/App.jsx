import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
