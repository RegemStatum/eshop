import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

//context
import { AppContext, ProductsContext } from "./context";

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
    <AppContext>
      <ProductsContext>
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
      </ProductsContext>
    </AppContext>
  );
}

export default App;
