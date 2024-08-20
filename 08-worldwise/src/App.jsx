import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AppNav from "./components/AppNav";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="app" element={<AppNav />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
