import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {useForm} from "react-hook-form";
import { netflixbackgroundimage } from "../Constant.js/contants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,updateProfile
} from "firebase/auth";
``;
import { auth } from "./firebase";
const Login = () => {
  const [signup, setsignup] = useState(true);
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

const navigate=useNavigate();
  function toggleSignup() {
    setsignup(!signup);
  }

  function onSubmit(data){
    if(data.name){
handlesignup(data);
      
    }
    else{
handleLogin(data);
    }
  }
  // LOGIN
  async function handleLogin(data) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

toast.success("Login Successful");  
navigate("/Browse")
    } catch (error) {
      console.log(error.message);

      toast.error(error.message);
    }
  } 


  async function handlesignup(data) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      )

  await updateProfile(auth.currentUser,{
displayName:data.name,
photoURL:"https://cdn-icons-png.flaticon.com/512/149/149071.png"
      })
  toast.success("singup Successful");  
navigate("/Browse")

    } catch (error) {

      toast.error(error.message);
    }
  }



  return (
      <div className="relative top-0 left-0 w-full h-full overflow-hidden">

        <img src={netflixbackgroundimage} alt="login background" />
        <div className="absolute top-1/2 left-1/2 z-10 bg-white/5 backdrop-blur-lg  bg-opacity-50 p-8 rounded-2xl shadow-lg w-80 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <h2 className="text-2xl  text-white font-bold mb-6 text-center">
            {signup ? "Login" : "Sign Up"}
          </h2>
          {/* EMAIL */}
          <form onSubmit={handleSubmit(onSubmit)} >
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full mb-2 p-2 border  border-white placeholder:text-gray-400 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
           {...register("email",{
            required:"Email is required"
           })}
          />
          {errors.email &&(<p className="text-sm text-red-500" >{errors.email.message}</p>)}

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full mb-2 p-2 border  border-white  placeholder:text-gray-400 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            {...register("password",{
              required:"Password is required"
            })}
          />
{errors.password &&(<p className="text-sm text-red-500" >{errors.password.message}</p>)}
          {!signup&&(
<input 
type="text"
placeholder="Enter Name"
className="w-full mb-4 p-2 border  border-white  placeholder:text-gray-400 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
{...register("name",{
required:"Name is Required"
})}
/>
)}
{errors.name&&(<p className="text-sm text-red-500" >{errors.name.message}</p>)}



{/* LOGIN BUTTON */}
          {signup ? (
            <button
            type="submit"
              className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
            >
              Login
            </button>
          ) : (
            <button
            type="submit"
              className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
            >
              Sign Up
            </button>
          )}

          {/* TOGGLE BUTTON */}

          </form>

                    <button
            className="w-full mt-4 bg-gray-200 text-gray-700 p-2 rounded-md hover:bg-gray-300"
            onClick={toggleSignup}
          >
            {signup ? "Create New Account" : "Already Have Account ? Login"}
          </button>
        </div>
      </div>
  );
};

export default Login;
