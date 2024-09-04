import { Outlet, useNavigate } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import { Loader } from "../features/menu/Menu";

function AppLayout() {
  const navigate = useNavigate();
  const isLoading = navigate.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <p>App layout</p>
      <Outlet />
      <CartOverview />
    </div>
  );
}

export default AppLayout;
