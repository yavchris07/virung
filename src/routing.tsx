import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/nav";


function Routing() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          {/* <Route path='/apropos' Component={About} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
