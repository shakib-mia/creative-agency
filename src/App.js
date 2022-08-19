import "./App.css";
import Page1 from "./Pages/Page1/Page1";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Customer from "./Pages/Customer/Customer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page1></Page1>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/customer" element={<Customer></Customer>}></Route>
    </Routes>
  );
}

export default App;
