import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starships from "./pages/Starships";
import StarshipItem from "./pages/Starships/Item";
import Pages from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages />}>
        <Route index element={<Home />} />
        <Route path="starships">
          <Route path=":id" element={<StarshipItem />} />
          <Route index element={<Starships />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
