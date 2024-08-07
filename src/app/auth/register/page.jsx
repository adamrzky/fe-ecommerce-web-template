"use client"

import baseUrl from "@/utils/constains";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { showSuccessAlert, showErrorAlert } from "@/components/Notification";
import MainLayout from "@/components/MainLayout";

const Register = () => {
   const inputRef = useRef();
   const router = useRouter()
   
   const handleSubmit = async (event) => {
      event.preventDefault();

      const {username, email, password} = inputRef.current;
      const registerModel = {
         username: username.value,
         email: email.value,
         password: password.value
      }

      try {
         await axios.post(`${baseUrl}/register`, registerModel);
         showSuccessAlert("Register Success");
         router.push("/auth/login");
         
      }catch(err) {
         console.log(err);
         showErrorAlert(err);
      }
   }

   return (
      <MainLayout>
         <section className="w-full my-5 flex justify-center flex-col items-center py-10">
            <div className="w-full max-w-screen-sm p-6 shadow-xl rounded">
               <h2 className="text-gray-700 text-center text-xl font-semibold mb-3">Register</h2>
               <form ref={inputRef} onSubmit={handleSubmit} className="bg-white px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
                        Username
                     </label>
                     <input name="username" className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:border-[#EB6D20]" id="username" type="text" placeholder="Username" required />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                        Email
                     </label>
                     <input name="email" className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:border-[#EB6D20]" id="email" type="email" placeholder="Email" required />
                  </div>
                  <div className="mb-6">
                     <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                        Password
                     </label>
                     <input name="password" className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-0 focus:border-[#EB6D20]" id="password" type="password" placeholder="******************" required />
                     {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                  </div>
                  <div className="flex items-center justify-between">
                     <button className="bg-[#EB8426] whitespace-nowrap hover:bg-[#EB6D20] text-white font-medium xl:py-3 xl:px-[30px] py-2 px-5 rounded-full focus:outline-none focus:shadow-outline" type="submit">
                        Sign Up
                     </button>
                     <Link href="/auth/login" className="text-right ml-2 max-w-2/4 inline-block align-baseline font-medium text-sm text-gray-500 hover:text-[#EB8426]">
                        Already have an account?
                     </Link>
                  </div>
               </form>
            </div>
         </section>
      </MainLayout>
   )
}

export default Register;