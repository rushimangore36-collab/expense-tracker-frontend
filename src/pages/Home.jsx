import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";

const Home = () => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [note, setNote] = useState("");
  const [balance, setBalance] = useState(0);
  const [addingBalance, setAddingBalance] = useState(false);
  const [newAmount, setNewAmount] = useState("");
  const [withdrawArray, setWithdrawArray] = useState([]);
  const API = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchBalance();
    fetchData();
  }, []);

  function addBalance() {
    setAddingBalance(!addingBalance);
  }

  async function newAddBalance() {
    const updated = balance + Number(newAmount);
    setBalance(updated);
    await postBalance(updated);
    setNewAmount("");
    setAddingBalance(false);
  }

  async function fetchBalance() {
    const res = await fetch(`${API}/home/api/getbalance`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
      },
    });

    const data = await res.json();
    setBalance(data.balance);
  }

  async function postBalance(balanceValue) {
    const res = await fetch(`${API}/home/api/updatebalance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
      },
      body: JSON.stringify({ balance: balanceValue }),
    });
    return res.json();
  }

  async function fetchData() {
    const res = await fetch(`${API}/home/api/withdraws`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
      },
    });

    const data = await res.json();
    setWithdrawArray(data);
  }

  async function postWithdraw(amount, note) {
    await fetch(`${API}/home/api/withdraws`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
      },
      body: JSON.stringify({ amount, note }),
    });
    const amt = Number(amount);
    const updatedBalance = balance - amt;
    setBalance(updatedBalance);
    await postBalance(updatedBalance);

    setWithdrawAmount("");
    setNote("");
    fetchData();
    fetchBalance();
  }

  async function deleteWithdraw(id) {
    await fetch(`${API}/home/api/withdraws/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
      },
    });

    fetchData();
  }

  return (
    <div className="bg-slate-200">
      <div className="max-w-3xl mx-auto p-6 space-y-8">
        {/* BALANCE CARD */}
        <div className="flex items-center justify-between bg-white shadow-lg rounded-2xl px-6 py-5 border border-gray-100">
          <div>
            <p className="text-gray-500 text-sm tracking-wide">
              Available Balance
            </p>
            <h1 className="text-3xl font-bold text-green-600 mt-1">
              ₹{balance}
            </h1>
          </div>

          <button
            onClick={addBalance}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
          >
            Add Balance
          </button>
        </div>

        {/* ADD BALANCE INPUT */}
        {addingBalance && (
          <div className="flex items-center gap-4 bg-white p-4 shadow rounded-xl border border-gray-100">
            <input
              type="number"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
              placeholder="Enter amount"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none w-40"
            />
            <button
              onClick={newAddBalance}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
            >
              Add
            </button>
          </div>
        )}

        {/* WITHDRAW INPUT SECTION */}
        <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Withdraw Money
          </h2>

          <div className="flex gap-3">
            <input
              type="number"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              placeholder="Enter amount"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none w-40"
            />

            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none flex-1"
              placeholder="Note"
            />
          </div>

          <button
            onClick={() => postWithdraw(withdrawAmount, note)}
            className="bg-red-600 w-full py-2 text-white rounded-lg font-semibold hover:bg-red-500 transition"
          >
            Withdraw
          </button>
        </div>

        {/* WITHDRAW LIST */}
        <h2 className="text-lg font-bold text-gray-800 mt-4">Your Withdraws</h2>

        <div className="space-y-3">
          {withdrawArray.map((withdraw) => (
            <div
              key={withdraw._id}
              className="flex items-center justify-between bg-white shadow-md rounded-xl px-5 py-3 border border-gray-100"
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  ₹{withdraw.amount}
                </p>
                <p className="text-sm text-gray-500">{withdraw.note}</p>
              </div>

              <button
                onClick={() => deleteWithdraw(withdraw._id)}
                className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-500 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
