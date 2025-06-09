import React, { useState } from 'react'
import { Await, Link } from 'react-router-dom';
import axios from 'axios';
import  jwt_decode from "jwt-decode"; 
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [isLoginMode, setIsLoginMode] = useState(true)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [city, setCity] = useState('');
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
   // const [errors, setErrors] = useState({}); // field specific error
    const navigate = useNavigate();

    const handleSignupSubmit = async (e) => {
       e.preventDefault(); //it prevents page reload, keeps the data safe 

      // const newErrors = {}; // field specific error

      if (isLoginMode) {
          if (!name.trim() ||!password.trim()){
            alert("UserName and password are required.")
            return;
          }

          const loginData = {
            userName : name,
            password : password
          };

          try{
            const response = await axios.post("http://localhost:8080/login", loginData, {
                  headers: {'Content-Type':'application/json'}
            });
            alert(" login Success")
          // console.log("Login Response", response.data.result.token);
            const token = response.data.result.token;
            const decoded = jwt_decode(token);  

        

            localStorage.setItem("token", token);
            localStorage.setItem("username", decoded.username);
            localStorage.setItem("UserID", decoded.id);
            setTimeout(() => {
  
            console.log("JWT Token:", token);
            console.log("Decoded JWT", decoded);
            console.log("UserID", localStorage.getItem('UserID'));
            console.log("after username:", localStorage.getItem('username'));
            console.log("Is Admin:", decoded.isadmin);
            }, 3000);

            // Router navigation
            navigate("/home"); 

        //   }catch (error) {
        //     console.error ("Login error:", error.response?.data || error.message);
        //     // alert(error.response?.data);
        //     alert(error.message);
        //   }
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);

            const errorDetail = error.response?.data?.error?.details?.[0] || "Something went wrong";
            alert(`Login failed: ${errorDetail}`);
}
          return;

      }

       //validation
         if (!name.trim()) {
           alert("Please enter your name!");
           return;
         }
        if (/\d/.test(name)) {
            alert("Name cannot contain numbers!");
            return;
        }
         //if (!name.trim()) newErrors.name = "Name is required."; // field specific error

         if (!email.trim()) {
            alert("please enter your email!");
            return;
         }

         if (!password.trim()){
            alert("Please enter your password!");
            return;
        }

         if (!city.trim()) {
           alert("Please enter your city!");
           return;
         }
        if (/\d/.test(city)) {
            alert("City cannot contain numbers!");
            return;
        }

        if (!mobile.trim()) {
            alert("Please enter your mobile number!");
            return;
        }

        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(mobile)) {
            alert("Mobile number must be exactly 10 digits.");
            return;
        }

        if (!address.trim()) {
            alert("Please enter your address!");
            return;
        }

        if (!pincode.trim()) {
            alert("Please enter your pincode!");
            return;
        }
        // if (!/^\d+$/.test(pincode)) {
        //     alert("Pincode must contain only numbers!");
        //     return;
        // }
       // setErrors(newErrors); //field specific error

      // if (Object.keys(newErrors).length === 0){ field specific error

       console.log("Signup data:");
       console.log("Name:", name);
       console.log("Email:", email);
       console.log("Password:", password);
       console.log("Mobile:", mobile);
       console.log("City:", city)
       console.log("Address:", address);
       console.log("Pincode:", pincode)
    //  }
         const signupData = {
        userName  : name,
        mail : email,
        password : password,
        phonenumber :parseInt(mobile,10),
        city : city,
        address : address,
        pincode : parseInt(pincode, 10),
    };
    
    try {
        const response = await axios.post ('http://localhost:8080/signup', signupData,{
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        alert ("Signup successfull!");
        console.log("Response from the backend:", response.data);

        // need to clear state after successfully registred
        setName("");
        setEmail("");
        setPassword("");
        setCity("");
        setMobile("");
        setAddress("");
        setPincode("");

        // once register successfull then switch to login page of ours
        setIsLoginMode(true);

    }catch(error){
        console.error("signup error:", error.response?.data || error.message);
        alert(` Signup failed: ${error.response?.data || "something went wrong"}`)
    }

    };

  // used to switch from login to signup, while doing this am clearing the state also, else it will be shown on both page
  const handleModeSwitch = () => {
  // Switch the mode
  setIsLoginMode(!isLoginMode);

  // Clear all input fields
  setName('');
  setEmail('');
  setPassword('');
  setCity('');
  setMobile('');
  setAddress('');
  setPincode('');
};

  return (
    <div className='w-[430px] bg-white p-8 rounded-2x1 shadow-lg'>
          {/* Header title */}
          <div className='flex-justify-center mb-4'>
                <h2 className='text-2x1 font-semibold text-center'>{isLoginMode ? "Login" : "Sign Up"}</h2>
          </div>

           {/* Tab Controls */}
           <div className='relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden'>
               <button className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}
              // onClick={()=> setIsLoginMode(true)} >
              onClick={() => {
                if (!isLoginMode) handleModeSwitch();
               }}>
               Login
               </button>
               <button
               className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}` }
               //onClick={()=> setIsLoginMode(false)}>
               onClick={() => {
                if (isLoginMode) handleModeSwitch(); // only reset if switching from login to signup
               }} >
                Sign Up
               </button>
               <div className={`absolute top-0- h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all ${isLoginMode ? "left-0" : "left-1/2"}`}></div>
           </div> 

           {/* Form section */}
            <form className='space-y-4' onSubmit={handleSignupSubmit}>
                {/* { !isLoginMode && (
                    <input type="text" placeholder="Name" required
                    value={name} onChange={(e) =>setName(e.target.value)}
                    className='w-full p-1.2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />

                     <>  // field specific error
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
                        className='w-full p-1.2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </>
                )} */}

                 {/* Shared field - both login and signup */}

                 <input type="text" placeholder={isLoginMode ? "UserName" : "Name"} required
                 value={name} onChange={(e) =>setName(e.target.value)}
                 className='w-full p-1.2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />

                 <input type="password" placeholder="Password" required
                 value={password} onChange={(e) =>setPassword(e.target.value)}
                 className='w-full p-1.2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'/>
                 
                 {/* Signup field */}
                 {!isLoginMode && (
                    <>
                    <input type="text" placeholder="Email" required
                     value={email} onChange={(e) =>setEmail(e.target.value)}
                     className='w-full p-1.2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />

                    <input type="text" placeholder="City" required
                    value={city} onChange={(e) =>setCity(e.target.value)}
                    className='w-full p-1.2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'/>

                    <input type="number" placeholder="Mobile Number" required
                    value={mobile} onChange={(e) =>setMobile(e.target.value)}
                    className='w-full p-1.2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />

                    <input type="text" placeholder="Address" required
                    value={address} onChange={(e) =>setAddress(e.target.value)}
                    className='w-full p-1.2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />

                    <input type="text" placeholder="Pincode" 
                    value={pincode} onChange={(e) =>setPincode(e.target.value)}
                    className='w-full p-1.2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
                    </>
                 )}

                
                
                {/* forget password field - Login (orginal) */}
                { isLoginMode && (
                      <div className='text-right'>
                        <p className='text-cyan-600 hover:underline' >Forget Password</p>
                      </div>
                )}

                {/* Shared button - Login N signup */}
                <button className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition'>
                    {isLoginMode ? "Login" : "Signup"}
                </button>

                {/* Switch link */}
                <p className="text-center text-gray-600"> {isLoginMode ? "Don't have an account " : "Already have an account "}
                <a href="#" onClick={(e) => { e.preventDefault(); handleModeSwitch(); }} className="text-cyan-600 hover:underline" >
                    {isLoginMode ? "Sign up" : "Login"}
                </a>
                {isLoginMode ? " now" : ""}
                </p>


            </form>
    </div>
  )
}

export default Login


