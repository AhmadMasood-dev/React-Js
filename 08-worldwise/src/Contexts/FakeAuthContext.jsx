import { act, createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const FAKE_USER = {
  name: "Ahmad",
  email: "ahmadmasood.dev@gmail.com",
  password: "12341234",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const initialState = {
    user: null,
    isAuthentical: false,
  };
  function reducer(state, action) {
    switch (action.type) {
      case "login":
        return { ...state, user: action.payload, isAuthentical: true };
      case "logout":
        return { ...state, user: null, isAuthentical: false };
      default:
        throw new Error("Unknown action type");
    }
  }
  const [{ user, isAuthentical }, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthentical, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside the AuthP rovider");
  return context;
}
export { AuthProvider, useAuth };
