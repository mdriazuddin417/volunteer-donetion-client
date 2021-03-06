import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Pages/Home/Home";
import Blog from "./component/Pages/Blog/Blog";
import Events from "./component/Pages/Events/Events";
import Donation from "./component/Pages/Donation/Donation";
import Tables from "./component/Pages/Table/Table";
import AddEvent from "./component/Pages/AddEvent/AddEvent";
import Register from "./component/LoginAuthentication/Register/Register";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./component/LoginAuthentication/Admin/Admin";
import RequireAuth from "./RequireAuth/RequirAuth";
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/donation"
          element={
            <RequireAuth>
              <Donation />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/events"
          element={
            <RequireAuth>
              <Events />
            </RequireAuth>
          }
        >
          <Route path="volunteer" element={<Tables />}></Route>

          <Route path="addevent" element={<AddEvent />}></Route>
        </Route>
        <Route
          path="/blog"
          element={
            <RequireAuth>
              <Blog />
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
