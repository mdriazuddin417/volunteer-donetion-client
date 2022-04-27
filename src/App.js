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
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/donation" element={<Donation />}></Route>
        <Route path="/events" element={<Events></Events>}>
          <Route path="volunteer" element={<Tables />}></Route>
          <Route path="addevent" element={<AddEvent />}></Route>
        </Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
