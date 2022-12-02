import Sidebar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LastProduct from "./LastProduct";
import Category from "./Category";
import ContentRowProducts from "./ContentRowProducts/ContentRowProducts";

function RouterApp() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar/>
        <Routes>
          <Route path={"/"} element={<ContentWrapper />} />
          <Route path={"/ultimo"} element={<LastProduct />} />
          <Route path={"/category"} element={<Category />} />
          <Route path={"/products"} element={<ContentRowProducts />} />
          <Route path={"*"} element={<ContentWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RouterApp;
