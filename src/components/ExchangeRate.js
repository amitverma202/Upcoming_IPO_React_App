import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { exchangeIpo } from "./IPO-Api.js";
import { FaHome, FaSignOutAlt } from "react-icons/fa";

const ExchangeRate = ({ onLogout }) => {
  const [exchangeIpoDetails, setExchangeIpoDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const exchangeIpoData = await exchangeIpo();
        setExchangeIpoDetails(exchangeIpoData);
      } catch (error) {
        console.error("Error fetching exchange IPO data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white flex justify-between items-center">
        <h1 className="text-5xl font-bold mb-2">IPO's Dashboard</h1>
        <Link
          to="/dashboard"
          className="text-white hover:underline flex justify-center"
        >
          Upcoming IPO's Calendar
        </Link>
        <Link
          to="/dashboard"
          className="text-white hover:underline flex justify-center"
        >
          <FaHome className="text-xl" />
          Home
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center p-2 bg-transparent border-none focus:outline-none space-x-0.5"
        >
          <FaSignOutAlt className="text-xl"/>
          <span className="ml-2">Logout</span>
        </button>z
      </div>

      <div className="ml-50 relative overflow-x-auto shadow-md sm:rounded-lg mb-6 p-20">
        <p className="px-8 py-4 bg-gradient-to-r from-rose-500 to-sky-600 text-2xl text-black font-bold uppercase text-center">
          Exchange Rates
        </p>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-bold text-lg text-center">
            <tr className="w-50"></tr>
            <tr className="bg-lime-700 text-black text-lg">
            <th scope="col" className="px-6 py-3">
                S.No.
              </th>
              <th scope="col" className="px-6 py-3">
                Symbol
              </th>
              <th scope="col" className="px-6 py-3">
                Rate
              </th>
              <th scope="col" className="px-6 py-3">
                Time Stamp
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {exchangeIpoDetails.map((excRate,idx) => (
              <tr
                key={`exchange_${excRate.symbol}`}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">{idx+1}</td>
                <td className="px-6 py-4">{excRate.symbol}</td>
                <td className="px-6 py-4">{excRate.rate}</td>
                <td className="px-6 py-4">{new Date(excRate.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangeRate;
