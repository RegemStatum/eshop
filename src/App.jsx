import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

//pages
import {
  Home,
  Categories,
  Products,
  ShoppingCart,
  SingleProduct,
  Error,
} from "./pages";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<SingleProduct />} />
        </Route>
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
}

export default App;
