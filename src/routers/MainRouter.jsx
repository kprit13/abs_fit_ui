import { Routes, Route } from "react-router-dom/dist";
import Dashboard from "../pages/Dashboard";
import ProductCategory from "../pages/ProductCategory";
import ProductDetails from "../pages/ProductDetails";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/categories/*" element={<ProductCategory />}></Route>
      <Route path="/product/*" element={<ProductDetails />}></Route>
    </Routes>
  );
};

export default MainRouter;
