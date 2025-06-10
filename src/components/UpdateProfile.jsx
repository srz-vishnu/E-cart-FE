import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const UpdateProfile = () => {
      const navigate = useNavigate();
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));

      const [name, setName] = useState('');
      const [mail, setMail] = useState('');
      const [phone, setPhone] = useState('');
      const [address, setAddress] = useState('');
      const [pincode, setPincode] = useState('');
      const userid = localStorage.getItem("UserID") // UserID this is the variable  in to which userid is being fetched from token and set in to

      // right side field name is from local storage details field(below)
      useEffect(() =>{
        if (userDetails) {
            setName(userDetails.username || '');
            setMail(userDetails.mail || '');
            setPhone(userDetails.phonenumber || '');
            setAddress(userDetails.address || '');
            setPincode(userDetails.pincode || '');
        }
      }, []);

    //   const handleUpdate = () => {
        const handleUpdate = async () => {
        const updateUser = {
            username: name,
            mail: mail,
            phonenumber: phone,
            address: address,
            pincode: pincode,
        };
        console.log("Sending updated user details to backend:", updateUser);

        // userid we get it from the token we stored 
        // const userid = localStorage.getItem("UserID")
        try {
              const token = localStorage.getItem("token");
              const response = await axios.put(`http://localhost:8080/user/update/${userid}`, updateUser, {
                headers: {
                     Authorization: `Bearer ${token}`, 
                    "Content-Type": "application/json"
                }
              }); 

        alert("profile updated successfully");
        console.log("response:", response);
        localStorage.setItem("userDetails", JSON.stringify(updateUser));
        console.log("Updated User Details:", updateUser);
        navigate("/profile");

        }catch (error) {
            // console.error ("failed to update the user details", error.response?.data || error.message);
            // alert("failed to update user details");
              const errorDetails = error.response?.data?.error?.details?.[0] || error.response?.data?.error?.message || error.message;
              console.error("Failed to update user details:", errorDetails);
              alert("Failed: " + errorDetails);
        }
      };

      const handlecancel = () => {
        navigate("/profile");
      }

 return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-xl font-bold mb-6 text-center">Update Profile</h2>

        <form className="space-y-4 text-gray-800 text-sm">
            <div>
                <label className="block font-semibold mb-1">Name</label>
                <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                value={name}
                onChange={(e) => setName(e.target.value)}></input>
            </div>

            <div>
                <label className="block font-semibold mb-1">Email</label>
                <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                value={mail}
                onChange={(e) => setMail(e.target.value)}></input>
            </div>

            <div>
                <label className="block font-semibold mb-1">Mobile</label>
                <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}></input>
            </div>

            <div>
                <label className="block font-semibold mb-1">Address</label>
                <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                value={address}
                onChange={(e) => setAddress(e.target.value)}></input>
            </div>

            <div>
                <label className="block font-semibold mb-1">Pincode</label>
                <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}></input>
            </div>

            <div className="flex justify-between mt-6">
                <button type="button"
                    className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-gray-700" onClick={handlecancel}> Cancel</button>
                <button type="button"
                    className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700" onClick={handleUpdate}>Update</button>
            </div>
        </form>
    </div>
 );
};

export default UpdateProfile;