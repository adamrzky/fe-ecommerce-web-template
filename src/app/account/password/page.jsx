"use client"
import Menu from "@/components/account/Menu";
import MainLayout from "@/components/MainLayout";
import { useAuthStore } from "@/store/authStore";
import baseUrl from "@/utils/constains";
import axios from "axios";
import { useEffect, useRef } from "react";
import { showSuccessAlert, showErrorAlert } from "@/components/Notification";
import useMenuStore from "@/store/menuStore";

const ChangePassword = () => {
   const inputRef = useRef();
   const { user } = useAuthStore();
   const { setActiveMenu } = useMenuStore();
   
   useEffect(() => {
      setActiveMenu("password");
   }, [setActiveMenu]);

   const handleSubmit = async () => {
      const { password, newPassword } = inputRef.current;
      const passwordModel = {
         old_password: password.value,
         new_password: newPassword.value
      };

      try {
         await axios.post(`${baseUrl}/auth/change-password`, passwordModel, {
            headers: {
               Authorization: `Bearer ${user.token}`,
            }
         });
         password.value = "";
         newPassword.value = "";
         showSuccessAlert("Success Updated Password");
      }catch(err) {
         console.log(err);
         showErrorAlert(err);
      }
   }

   return (
      <MainLayout>
         <section id="account" className="mx-auto max-w-[1320px] my-8 px-10 xl:px-0 flex flex-col xl:flex-row">
            <Menu/>
            <section id="profile-form" className="xl:ml-32 mt-10 xl:mt-0 w-full">
               <h1>Change Password</h1>
               <form ref={inputRef} className="bg-white flex flex-col items-start my-7 shadow-lg gap-10 p-8 w-full max-w-[1000px]">
                  <div className="max-w-96 w-full">
                     <label className="text-sm">Password</label>
                     <input name="password" className="text-sm border-slate-300 w-full mt-5 border-2 p-2 focus:outline-none focus:ring-0 focus:border-[#EB6D20]" type="password" placeholder="********"/>
                  </div>

                  <div className="max-w-96 w-full">
                     <label className="text-sm">New password</label>
                     <input name="newPassword" className="text-sm border-slate-300 w-full mt-5 border-2 p-2 focus:outline-none focus:ring-0 focus:border-[#EB6D20]" type="password" placeholder="********"/>
                  </div>
               </form>

               <button onClick={handleSubmit} className="bg-[#EB8426] ml-4 whitespace-nowrap hover:bg-[#EB6D20] text-white font-bold xl:py-3 xl:px-[30px] py-2 px-5 rounded-full focus:outline-none focus:shadow-outline" type="submit">
                Update
               </button>
            </section>
         </section>
      </MainLayout>
   )
}

export default ChangePassword;