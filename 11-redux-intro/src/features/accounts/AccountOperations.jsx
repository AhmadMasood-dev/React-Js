import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const dispatch = useDispatch();
  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    balance,
    isLoading,
  } = useSelector((store) => store.account);
  console.log(balance);
  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white shadow-2xl rounded-xl p-10 border border-blue-100">
      <h2 className="text-3xl text-blue-700 font-extrabold mb-8 text-center tracking-tight">
        Your account operations
      </h2>

      <div className="space-y-8">
        {/* Deposit */}
        <div className="bg-blue-50 p-6 rounded-lg shadow flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-2">
              Deposit
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={depositAmount}
              onChange={(e) => setDepositAmount(+e.target.value)}
              placeholder="Amount"
            />
          </div>
          <div>
            <select
              className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">US Dollar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">British Pound</option>
            </select>
          </div>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            onClick={handleDeposit}
            disabled={isLoading}
          >
            {isLoading ? "Converting..." : `Deposit ${depositAmount || ""}`}
          </button>
        </div>

        {/* Withdraw */}
        <div className="bg-green-50 p-6 rounded-lg shadow flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-2">
              Withdraw
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(+e.target.value)}
              placeholder="Amount"
            />
          </div>
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            onClick={handleWithdrawal}
          >
            Withdraw {withdrawalAmount || ""}
          </button>
        </div>

        {/* Request Loan */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-2">
              Request loan
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition mb-2"
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
              placeholder="Loan amount"
            />
            <input
              className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              value={loanPurpose}
              onChange={(e) => setLoanPurpose(e.target.value)}
              placeholder="Loan purpose"
            />
          </div>
          <button
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
            onClick={handleRequestLoan}
          >
            Request loan
          </button>
        </div>

        {/* Pay Loan */}
        {currentLoan > 0 && (
          <div className="bg-red-50 p-6 rounded-lg shadow flex flex-col md:flex-row md:items-center gap-4">
            <span className="flex-1 text-red-700 font-medium">
              Pay back ${currentLoan} ({currentLoanPurpose})
            </span>
            <button
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
              onClick={handlePayLoan}
            >
              Pay loan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
