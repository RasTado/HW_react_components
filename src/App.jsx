import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import ShopItemFunc from "./components/store-func/ShopItemFunc";
import ShopItemClass from "./components/store-class/ShopItemClass";
import Calendar from "./components/calendar/Calendar";

const item = {
  brand: "Tiger of Sweden",
  title: "Leonard coat",
  description: "Minimalistic coat in cotton-blend",
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399,
  currency: "£",
};

const now = new Date();

function App() {
  return (
    <>
      <nav>
        <div>
          <Link className="taskCont" to="/Task1">
            TASK 1 Store-func
          </Link>
          <Link className="taskCont" to="/Task2">
            TASK 2 Store-class
          </Link>
          {/* <Link className="taskCont" to="/Task3">
            TASK 3 Calendar
          </Link> */}
        </div>
      </nav>

      <Routes>
        <Route path="/Task1" element={<ShopItemFunc item={item} />} />
        <Route path="/Task2" element={<ShopItemClass item={item} />} />
        {/* <Route path="/Task3" element={<Calendar date={now} />} /> */}
      </Routes>
    </>
  );
}

export default App;
