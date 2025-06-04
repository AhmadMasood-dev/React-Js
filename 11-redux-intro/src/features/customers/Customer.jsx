import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);

  return (
    <div className="flex justify-center mt-8">
      <h2 className="text-2xl font-semibold text-blue-700 bg-blue-50 px-6 py-3 rounded shadow">
        👋 Welcome, {customer || "Guest"}
      </h2>
    </div>
  );
}

export default Customer;
