import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1 className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-8 text-2xl text-blue-700 font-bold mb-6 text-center">
        🏦 The React-Redux Bank ⚛️
      </h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
