import React  from 'react';

const Profile = () => {
  const user = {
    userName: 'Anandhu',
    mail: 'anandhu@example.com',
    phonenumber: '9876543210',
    city: 'Ernakulam',
    address: 'MG Road, Aluva',
    pincode: '680701'
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold"> Profile</h2>
      </div>

      <div className="space-y-4 text-gray-800 text-sm">
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Name</span>
          <span>{user.userName}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Email</span>
          <span>{user.mail}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Mobile</span>
          <span>{user.phonenumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Address</span>
          <span>{user.address}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Pincode</span>
          <span>{user.pincode}</span>
        </div>

        <div className="mt-8 text-center">
        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
          Edit
        </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;
