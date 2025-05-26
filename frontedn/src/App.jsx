import "./CSS/App.css";
import Favourite from "./pages/Favourites";
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"

function App() {


  return (
    <div>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Favourites" element={<Favourite />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
