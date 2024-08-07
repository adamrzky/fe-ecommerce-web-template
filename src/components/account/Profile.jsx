"use client"
import { useAuthStore } from "@/store/authStore";
import baseUrl from "@/utils/constains";
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = ({setIsEdit}) => {
   const { user } = useAuthStore();
   const [ profileData, setProfileData ] = useState(null);
   
   useEffect(() => {
      if(user) {
         const { ID } = user.user;
         axios.get(`${baseUrl}/profiles/${ID}/user`)
         .then((response) => {
               setProfileData(response.data.data);
            })
            .catch((err) => {
               console.log(err);
            });
      }
   }, [])

   return (
      <section id="profile" className="xl:ml-32 mt-10 xl:mt-0 w-full">
         <h1>My Profile</h1>
         <div className="bg-white grid xl:grid-cols-3 grid-cols-1 my-7 shadow-lg gap-10 p-8 w-full max-w-[1000px]">
            <div className="">
               <h4 className="text-sm">Full name</h4>
               <p className="w-full text-sm mt-5">{profileData?.Name || "-"}</p>
            </div>

            <div>
               <h4 className="text-sm">City</h4>
               <p className="text-sm mt-5">{profileData?.City || "-"}</p>
            </div>

            <div>
               <h4 className="text-sm">Phone number</h4>
               <p className="text-sm mt-5">{profileData?.Phone || "-"}</p>
            </div>

            <div>
               <h4 className="text-sm">Date</h4>
               <p className="text-sm mt-5">{(profileData?.Date?.split('T')[0]) || "-"}</p>
            </div>

            <div>
               <h4 className="text-sm">Gender</h4>
               <p className="text-sm mt-5">{profileData?.Gender || "-"}</p>
            </div>

            <div>
               <h4 className="text-sm">Address</h4>
               <p className="text-sm mt-5">{profileData?.Address || "-"}</p>
            </div>
         </div>

         <div>
            <button onClick={() => setIsEdit(true)} className="bg-[#EB8426] whitespace-nowrap hover:bg-[#EB6D20] text-white font-bold xl:py-3 xl:px-[30px] py-2 px-5 rounded-full focus:outline-none focus:shadow-outline" type="submit">
            Update
            </button>
         </div>
      </section>
   )
}

export default Profile;