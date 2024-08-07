"use client"
import { useAuthStore } from "@/store/authStore";
import baseUrl from "@/utils/constains";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { showSuccessAlert, showErrorAlert } from "@/components/Notification";

const ProfileForm = ({isEdit, setIsEdit}) => {
   const inputRef = useRef();
   const [ profileData, setProfileData ] = useState(null);
   const [ profileExists, setProfileExists ] = useState(false);
   const { user } = useAuthStore();
   const { ID } = user ? user.user : null;

   const handleSubmit = async () => {
      const {name, city, phone, date, gender, address} = inputRef.current;
      const profileModel = {
         user_id: Number(ID),
         name: name.value,
         city: city.value,
         phone: phone.value,
         date: `${date.value}T00:00:00Z`,
         gender: gender.value,
         address: address.value
      }
     
      try {
         if(profileExists) {
            await axios.put(`${baseUrl}/profiles/${profileData.ID}`, {...profileData, Date: `${profileData.Date}T00:00:00Z`}, {
               headers: {
                  Authorization: user.token,
               }
            });
         } else {
            await axios.post(`${baseUrl}/profiles`, profileModel, {
               headers: {
                  Authorization: user.token,
               }
            });
         }

         showSuccessAlert("Success Update Profile");
         setIsEdit(false);
      }catch(err) {
         showErrorAlert(err);
         console.log(err);
      }

   }

   useEffect(() => {
      if(isEdit) {
         axios.get(`${baseUrl}/profiles/${ID}/user`)
         .then((response) => {
            const profileResponse = response.data.data;
            setProfileData({...profileResponse, Date: `${profileResponse.Date.split("T")[0]}`});
            setProfileExists(true);
         })
         .catch((err) => {
            setProfileExists(false);
            console.log(err);
         });
      }
   }, [])

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setProfileData(prevState => ({
        ...prevState,
        [name[0].toUpperCase() + name.slice(1)]: value
      }));
   };

   return (
      <section id="profile-form" className="xl:ml-32 mt-10 xl:mt-0">
         <h1>My Profile</h1>
         <form ref={inputRef} className="bg-white grid xl:grid-cols-3 grid-cols-1 my-7 shadow-lg gap-10 p-8 w-full max-w-[1000px]">
            <div>
               <label className="text-sm">Full name</label>
               <input onChange={handleInputChange} value={profileData?.Name || ""} name="name" className="text-sm w-full mt-5 border-2 border-slate-300 p-2 focus:outline-none focus:ring-0 focus:border-[#EB6D20]" type="text" placeholder="Name"/>
            </div>

            <div>
               <label className="text-sm">City</label>
               <input onChange={handleInputChange} value={profileData?.City || ""} name="city" className="text-sm border-slate-300 w-full mt-5 border-2 p-2 focus:outline-none focus:ring-0 focus:border-[#EB6D20]" type="email" placeholder="City"/>
            </div>

            <div>
               <label className="text-sm">Phone number</label>
               <input onChange={handleInputChange} value={profileData?.Phone || ""} name="phone" className="text-sm border-slate-300 w-full mt-5 border-2 p-2 focus:outline-none focus:ring-0 focus:border-[#EB6D20]" type="number" placeholder="Number"/>
            </div>


            <div className="flex flex-col">
               <label className="text-sm">Date</label>
               <input onChange={handleInputChange} value={profileData?.Date || ""} name="date" className="text-sm border-slate-300 w-full mt-5 border-2 focus:outline-none focus:ring-0 focus:border-[#EB6D20]" type="date"/>
            </div>

            <div className="flex flex-col">
               <label className="text-sm">Gender</label>
               <select onChange={handleInputChange} value={profileData?.Gender || ""} name="gender" id="gender" className="text-sm border-slate-300 w-full mt-5 p-2 border-2 focus:ring-0 focus:outline-none focus:border-[#EB6D20]">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
               </select>
            </div>

            <div>
               <label className="text-sm">Address</label>
               <input onChange={handleInputChange} value={profileData?.Address || ""} name="address" className="text-sm border-slate-300 w-full mt-4 border-2 focus:outline-none focus:ring-0 focus:border-[#EB6D20]" type="text" placeholder="Address"/>
            </div>
         </form>

         <div>
            <button onClick={() => setIsEdit(false)} className="bg-slate-600 whitespace-nowrap hover:bg-slate-700 text-white font-bold xl:py-3 xl:px-[30px] py-2 px-5 rounded-full focus:outline-none focus:shadow-outline" type="submit">
            Back
            </button>
            <button onClick={handleSubmit} className="bg-[#EB8426] ml-4 whitespace-nowrap hover:bg-[#EB6D20] text-white font-bold xl:py-3 xl:px-[30px] py-2 px-5 rounded-full focus:outline-none focus:shadow-outline" type="submit">
            Submit
            </button>
         </div>
      </section>
   )
}

export default ProfileForm;