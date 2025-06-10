import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const userid = localStorage.getItem("UserID") // UserID this is the variable  in to which userid is being fetched from token and set in to

  useEffect(() => {
      if (!userid) return;

  const fetchUserData = async () => {
    try{
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:8080/user/${userid}`, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
            });
        if (response.data.status === 'ok') {
            const user = response.data.result;
            setName(user.username);
            setMail(user.mail);
            setPhone(user.phonenumber);
            setAddress(user.address);
            setPincode(user.pincode);

            // Store user data in localStorage as a JSON string
            localStorage.setItem("userDetails", JSON.stringify(user));
            console.log("the user details", user);
        }
    } catch (error) {
        console.error('Failed to fetch user details', error);
    }
  };

   fetchUserData();
   }, [userid] );

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold"> Profile</h2>
      </div>

      <div className="space-y-4 text-gray-800 text-sm">
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Name</span>
          <span>{name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Email</span>
          <span>{mail}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Mobile</span>
          <span>{phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Address</span>
          <span>{address}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Pincode</span>
          <span>{pincode}</span>
        </div>

        <div className="mt-8 text-center">
            <button onClick={() => window.location.href = "/update-profile"}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Edit
            </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;
