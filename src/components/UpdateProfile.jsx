import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
      const navigate = useNavigate();
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));

      const [name, setName] = useState('');
      const [mail, setMail] = useState('');
      const [phone, setPhone] = useState('');
      const [address, setAddress] = useState('');
      const [pincode, setPincode] = useState('');

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

      const handleUpdate = () => {
        const updateUser = {
            username: name,
            mail: mail,
            phone: phone,
            address: address,
            pincode: pincode,
        }
        console.log("before updation-User Details:", updateUser);
        localStorage.setItem("userDetails", JSON.stringify(updateUser));
        console.log("Updated User Details:", updateUser);

        alert("profile updated successfully");
        navigate("/profile");
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