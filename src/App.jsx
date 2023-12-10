import React, { useState, useEffect } from "react";
import { Loader } from "./components/Loader";
import Login from "./components/Login";
import Signup from "./components/Signup";
import axios from "axios";
import { getEmailFromLocalStorage } from "./utils/utils";
import { getTokenFromLocalStorage } from "./utils/utils";
const App = () => {
  const [hasAdminData, setHasAdminData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        // Check if email exists in local storage
        const email = getEmailFromLocalStorage();
        const tokken = getTokenFromLocalStorage();
        if (email && tokken) {
          // If email exists, you might want to make a request to get admin data
          // Replace this with your actual endpoint for fetching admin data
          const response = await axios.get("/admin/getemail");

          if (response.data.admin) {
            setHasAdminData(true);
          }
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching admin data:", error);
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div>{loading ? <Loader /> : hasAdminData ? <Login /> : <Signup />}</div>
  );
};

export default App;
