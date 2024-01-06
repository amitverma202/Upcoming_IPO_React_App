import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Auth from "./components/Auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
        <Router>
         <Routes>
            <Route
              path="/"
              element={<Auth onLogin={handleLogin} />}
            />
            {isLoggedIn && (
              <Route
                path="/dashboard"
                element={<Dashboard onLogout={handleLogout} />}
              />
            )}
          </Routes>
        </Router>
  );
}

export default App;
