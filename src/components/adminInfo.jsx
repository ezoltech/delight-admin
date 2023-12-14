import { Avatar } from "flowbite-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/utils";
export const AdminInfo = () => {
  const [adminData, setAdminData] = useState(null);
  useEffect(() => {
    async function fetchAdminData() {
      try {
        const response = await axios.get(`${BASE_URL}/admin/general`);
        setAdminData(response.data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    }
    fetchAdminData();
  }, []);

  return (
    <div>
      <Avatar rounded>
        <div className="space-y-1 font-medium dark:text-white">
          <div>{adminData ? adminData.email : "Loading..."}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <h2>joined at {adminData ? adminData.created_at : ""}</h2>
          </div>
        </div>
      </Avatar>
    </div>
  );
};
