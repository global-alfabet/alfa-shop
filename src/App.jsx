import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Seo from "./components/Seo.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Item from "./pages/Item.jsx";
import HowToOrder from "./pages/HowToOrder.jsx";
import Privacy from "./pages/Privacy.jsx";
import NotFound from "./pages/NotFound.jsx";
import { categories } from "./content/categories.js";

// Scroll to the top on every new page (but not when only the search changes).
function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <Seo />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {categories.map((c) => (
            <Route key={c.slug} path={`/${c.slug}`} element={<Shop category={c.slug} />} />
          ))}
          <Route path="/item/:id" element={<Item />} />
          <Route path="/how-to-order" element={<HowToOrder />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
