import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();
  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    // <div>
    //   <h2>Create new customer</h2>
    //   <div className="inputs">
    //     <div>
    //       <label>Customer full name</label>
    //       <input
    //         value={fullName}
    //         onChange={(e) => setFullName(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>National ID</label>
    //       <input
    //         value={nationalId}
    //         onChange={(e) => setNationalId(e.target.value)}
    //       />
    //     </div>
    //     <button onClick={handleClick}>Create new customer</button>
    //   </div>
    // </div>
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-4xl text-blue-700 font-bold mb-6 text-center">
        Create new customer
      </h2>
      <div className="inputs space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Customer full name</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">National ID</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-5"
          onClick={handleClick}
        >
          Create new customer
        </button>
      </div>
    </div>
  );
}

export default Customer;
