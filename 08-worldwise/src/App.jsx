import { AuthProvider } from "./Contexts/FakeAuthContext";
import { CitiesProvider } from "./Contexts/CitiesContext";

import ProtectedRoutes from "./Pages/ProtectedRoutes";
import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// import AppLayout from "./Pages/AppLayout";
// import Homepage from "./Pages/Homepage";
// import Pricing from "./Pages/Pricing";
// import Product from "./Pages/Product";
// import Login from "./Pages/Login";
// import PageNotFound from "./Pages/PageNotFound";
// import CountriesList from "./components/CountriesList";
// import CityList from "./components/CityList";
// import City from "./components/City";
// import Form from "./components/Form";

const Homepage = lazy(() => import("./Pages/Homepage"));
const Pricing = lazy(() => import("./Pages/Pricing"));

const Product = lazy(() => import("./Pages/Product"));

const Login = lazy(() => import("./Pages/Login"));

const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

const AppLayout = lazy(() => import("./Pages/AppLayout"));

const CityList = lazy(() => import("./components/CityList"));

const CountriesList = lazy(() => import("./components/CountriesList"));
const City = lazy(() => import("./components/City"));

const Form = lazy(() => import("./components/Form"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />

            <Route
              path="app"
              element={
                <ProtectedRoutes>
                  <AppLayout />
                </ProtectedRoutes>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountriesList />} />
              <Route path="form" element={<Form />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
