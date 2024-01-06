import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { upcomingIpo } from "./IPO-api.js";
import { FaSignOutAlt } from "react-icons/fa";

const Dashboard = ({ onLogout }) => {
  const [ipoDetails, setIpoDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upcomingIpoData = await upcomingIpo();
        setIpoDetails(upcomingIpoData);
      } catch (error) {
        console.error("Error fetching upcoming IPO data:", error);
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
          to="/exchangeRate"
          className="text-white hover:underline flex justify-center"
        >
          Exchange Rates
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center p-2 bg-transparent border-none focus:outline-none space-x-0.5"
        >
          <FaSignOutAlt className="text-xl" />
          <span className="ml-2">Logout</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-20 h-auto w-auto">
        <p className="px-8 py-4 bg-gradient-to-r from-rose-500 to-sky-600 text-2xl text-black font-bold uppercase text-center">
          Upcoming IPO's Calendar
        </p>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-bold text-lg">
            <tr className="bg-lime-700 text-black text-lg">
            <th scope="col" className="px-6 py-3">
                S.No.
              </th>
              <th scope="col" className="px-6 py-3">
                Company name
              </th>
              <th scope="col" className="px-6 py-3">
                Symbol
              </th>
              <th scope="col" className="px-6 py-3">
                Filed Date
              </th>
              <th scope="col" className="px-6 py-3">
                Offering Date
              </th>
              <th scope="col" className="px-6 py-3">
                Shares
              </th>
              <th scope="col" className="px-6 py-3">
                Volume
              </th>
            </tr>
          </thead>
          <tbody>
            {ipoDetails.map((ipo,idx) => (
              <tr
                key={`ipo_${ipo.symbol}_${ipo.offeringDate}`}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">{idx+1}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {ipo.companyName}
                </td>
                <td className="px-6 py-4">{ipo.symbol}</td>
                <td className="px-6 py-4">{ipo.filedDate}</td>
                <td className="px-6 py-4">{ipo.offeringDate}</td>
                <td className="px-6 py-4">{ipo.shares}</td>
                <td className="px-6 py-4">{ipo.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
