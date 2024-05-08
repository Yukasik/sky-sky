import { Home, Shop, AboutUs } from "./pages";
import { MyRouter } from "./router/MyRouter";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={MyRouter.HOME} element={<Home />} />
        <Route path={MyRouter.SHOP} element={<Shop />} />
        <Route path={MyRouter.ABOUTUS} element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default App;
