import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const { isAuthentical } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthentical) navigate("/");
  }, [isAuthentical, navigate]);

  return isAuthentical ? children : null;
}

export default ProtectedRoutes;
