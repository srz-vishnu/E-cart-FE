import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChangePassword = () => {
   const navigate = useNavigate();

        const[currentPwd, setCurrentPwd] = useState('');
        const[newPwd, setNewPwd] = useState('');
        const[confirmPwd, setConfirmPwd] = useState('');

        const handleChangePassword = async () => {

           if (!currentPwd.trim() || !newPwd.trim() || !confirmPwd.trim()) {
             alert("All fields are required.");
             return;
            }

            if (newPwd !== confirmPwd){
                alert("New password and confirm password do not match");
            return;
            }

            const payload = {
                current_password: currentPwd,
                new_password: newPwd,
                confirm_password: confirmPwd,
            };

            try {
                const token = localStorage.getItem("token");
         
                 const response = await axios.post(
                    "http://localhost:8080/user/change/pwd",
                    payload,
                    {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    }
                );

                alert("Password changed successfully!");
                console.log("Response:", response.data);
                navigate("/profile");
            } catch (error) {
              const errorDetails =
                 error.response?.data?.error?.details?.[0] ||
                 error.response?.data?.error?.message ||
                 error.message;
               console.error("Failed to change password:", errorDetails);
               alert("Failed: " + errorDetails);
            }
        };



return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">         
        <h2 className="text-xl font-bold text-center mb-6">Change Password</h2>

        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Password</label>
                <input type="password" value={currentPwd} onChange={(e)=> setCurrentPwd(e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter your current password"></input>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">New Password</label>
                <input type="password" value={newPwd} onChange={(e) => setNewPwd(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter your New password"></input>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
                <input type="password" value={confirmPwd} onChange={(e) => setConfirmPwd(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Re-enter the password"></input>
            </div>

            <div className="flex justify-between pt-4">
                <button onClick={() => window.location.href = "/profile"} type="button"
                    className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-gray-700">Cancel</button>
                <button onClick={handleChangePassword} type="button"
                    className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700">Update Password</button>
            </div>
        </form>
    </div>
);
};

export default ChangePassword;