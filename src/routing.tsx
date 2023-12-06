import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import { About } from "./pages/about";
import { Actualites } from "./pages/actualites";
import { Club } from "./pages/club";
import { Programs } from "./pages/programs";
import { Actualite } from "./pages/actualite";


export default function Routing() {
  return (
    <>
      <BrowserRouter>
       <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          {/* <Route path="/about" Component={About} /> */}
          <Route path='/apropos' Component={About} />
          <Route path='/actualites' Component={Actualites} />
          <Route path='/club' Component={Club} />
          <Route path='/programmes' Component={Programs} />
          <Route path='/actualite/:id' Component={Actualite} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

