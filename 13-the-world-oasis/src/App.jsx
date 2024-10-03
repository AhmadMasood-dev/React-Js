import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import GlobalStyles from "./styles/GlobalStyles";

import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    query: {
      staleTime: 0,
      // staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route
                index
                element={<Navigate replace to="dashboard" />}
              ></Route>
              <Route path="Dashboard" element={<Dashboard />}></Route>
              <Route path="bookings" element={<Bookings />}></Route>
              <Route path="cabins" element={<Cabins />}></Route>
              <Route path="users" element={<Users />}></Route>
              <Route path="settings" element={<Settings />}></Route>
              <Route path="account" element={<Account />}></Route>
            </Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
