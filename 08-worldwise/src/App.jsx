import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import PageNotFound from './Pages/PageNotFound'
import AppLayout from "./Pages/AppLayout";
import CityList from "./components/CityList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />} >
        <Route index element={<CityList/>}/>
          <Route path="cities" element={<p>Lisit of cities</p>}/>
          <Route path="countries" element={<p>Lisit of countries</p>}/>
          <Route path="form" element={<p>Form</p>}/>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
