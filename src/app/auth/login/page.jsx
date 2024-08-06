"use client"

import { useAuthStore } from "@/store/authStore";
import baseUrl from "@/utils/constains";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { showSuccessAlert, showErrorAlert } from "@/components/Notification";

const Login = () => {
   const {login} = useAuthStore();
   const router = useRouter();
   const inputRef = useRef();

   const handleSubmit = async (event) => {
      event.preventDefault();

      const {username, password} = inputRef.current;
      const loginModel = {
         username: username.value,
         password: password.value
      }

      try {
         const data = await axios.post(`${baseUrl}/login`, loginModel);
         const {token, user} = data.data.data;
         const {Email, ID, Role} = user;
         const userModel = {
            token, 
            user: {Email, ID, Role}
         };
         login(userModel);
         showSuccessAlert("Login Success");
         router.push("/");
      }catch(err) {
         console.log(err);
         showErrorAlert(err);
      }
   }

   return (
      <>
         <section className="w-full min-h-[100vh] bg-[#FDFDFD] flex justify-center flex-col items-center py-10">
            <div className="w-full max-w-screen-sm p-6 shadow-xl rounded">
               <h2 className="text-gray-700 text-center text-xl font-semibold mb-3">Login to your account</h2>
               <form ref={inputRef} onSubmit={handleSubmit} className="bg-white px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
                     Username
                     </label>
                     <input name="username" className="text-md shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" required/>
                  </div>
                  <div className="mb-6">
                     <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                     Password
                     </label>
                     <input name="password" className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required/>
                     {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                  </div>
                  <div className="flex items-center justify-between">
                     <button className="bg-[#EB8426] whitespace-nowrap hover:bg-[#EB6D20] text-white font-bold xl:py-3 xl:px-[30px] py-2 px-5 rounded-full focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                     </button>
                     <Link href="/auth/register" className="text-right ml-2 max-w-2/4 inline-block align-baseline font-bold text-sm text-gray-500 hover:text-[#EB8426]">
                     Don't have account?
                     </Link>
                  </div>
               </form>
            </div>
         </section>
      </>
   )
}

export default Login;