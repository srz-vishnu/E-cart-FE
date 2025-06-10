import React from "react";


const UpdateProfile = () => {
 return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-xl font-bold mb-6 text-center">Update Profile</h2>

        <form className="space-y-4 text-gray-800 text-sm">
            <div>
                <label className="block font-semibold mb-1">Name</label>
                <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                 placeholder="Enter your name"></input>
            </div>

            <div>
                <label className="block font-semibold mb-1">Email</label>
                <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                 placeholder="Enter your email"></input>
            </div>

            <div>
                <label className="block font-semibold mb-1">Mobile</label>
                <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                 placeholder="Enter your phone number"></input>
            </div>

            <div>
                <label className="block font-semibold mb-1">Address</label>
                <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                 placeholder="Enter your address"></input>
            </div>

            <div>
                <label className="block font-semibold mb-1">Pincode</label>
                <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                 placeholder="Enter your pincode"></input>
            </div>

            <div className="flex justify-between mt-6">
                <button type="button"
                    className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-gray-700">
                        Cancel</button>
                <button type="button"
                    className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                        Submit</button>
            </div>
        </form>
    </div>
 );
};

export default UpdateProfile;