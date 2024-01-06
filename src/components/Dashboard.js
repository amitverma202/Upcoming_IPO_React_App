import React, { useContext, useEffect, useState } from "react";
import Header from "./Header.js";
import { upcomingIpo } from "./IPO-api.js";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ onLogout }) => {
  const [ipoDetails, setIpoDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const updateIPODetails = async () => {
      try {
        const result = await upcomingIpo();
        setIpoDetails(result);
      } catch (error) {
        setIpoDetails({});
        console.log(error);
      }
    };

    updateIPODetails();
  }, []);

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };
  return (
    // <>
    // <div>
    //   <Header />
    //   <div className="ml-auto">
    //     <button
    //       onClick={handleLogout}
    //       className="flex items-center p-2 bg-transparent border-none focus:outline-none space-x-0.5"
    //     >
    //       <FaSignOutAlt />
    //       <span>Logout</span>
    //     </button>
    //   </div>

    //   {/* <div>
    //       price={ipoDetails[0].companyName}
    //   </div> */}
    // </div>
    // </>
    <div
    className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand"
  >
    <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
      
      <Header/>
      <div className="ml-auto">
        <button
          onClick={handleLogout}
          className="flex items-center p-2 bg-transparent border-none focus:outline-none space-x-0.5"
        >
          <FaSignOutAlt
            className='text-xl'
          />
          <span className='ml-2'>
            Logout
          </span>
        </button>
      </div>
    </div>
    <div className="md:col-span-2 row-span-4">
      {/* <Chart /> */}
    </div>
    <div>
      {/* <Overview
        symbol={stockSymbol}
        price={quote.iexClose}
        change={quote.iexOpen}
        changePercent={quote.iexMarketPercent}
        currency={stockDetails.currency}
      /> */}
    </div>
    <div className="row-span-2 xl:row-span-3">
      {/* <Details details={quote} /> */}
    </div>
  </div>
  );
};

export default Dashboard;
