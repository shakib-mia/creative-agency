import "./App.css";
import Page1 from "./Pages/Page1/Page1";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Customer from "./Pages/Customer/Customer";
import Order from "./Pages/Customer/Order";
import ServiceList from "./Pages/Customer/ServiceList";
import Reviews from "./Pages/Customer/Reviews";
import Admin from "./Pages/Admin/Admin";
import AddService from "./Pages/Admin/AdminAddService";
import MakeAdmin from "./Pages/Admin/MakeAdmin";
import AdminServiceList from "./Pages/Admin/AdminServiceList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page1></Page1>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/customer" element={<Customer></Customer>}>
        <Route index element={<Order></Order>}></Route>
        <Route path="/customer/order" element={<Order></Order>}></Route>
        <Route
          path="/customer/service-list"
          element={<ServiceList></ServiceList>}
        ></Route>
        <Route path="/customer/review" element={<Reviews></Reviews>}></Route>
      </Route>

      <Route path="/admin" element={<Admin></Admin>}>
        <Route index element={<AdminServiceList></AdminServiceList>}></Route>
        <Route
          path="/admin/add-service"
          element={<AddService></AddService>}
        ></Route>
        <Route
          path="/admin/service-list"
          element={<AdminServiceList></AdminServiceList>}
        ></Route>
        <Route
          path="/admin/make-admin"
          element={<MakeAdmin></MakeAdmin>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
