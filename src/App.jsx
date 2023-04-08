import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return <div>
    <Navbar/>
    <Outlet/>
    <Toaster/>
  </div>;
}

export default App;
