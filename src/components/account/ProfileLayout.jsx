"use client"
import Profile from "@/components/account/Profile"
import { useEffect, useState } from "react";
import ProfileForm from "./ProfileForm";
import useMenuStore from "@/store/menuStore";

const ProfileLayout = () => {
   const [isEdit, setIsEdit] = useState(false);
   const { setActiveMenu } = useMenuStore();
   
   useEffect(() => {
      setActiveMenu("profile");
   }, [setActiveMenu]);

   return (
      <>
         {isEdit ? (
            <ProfileForm isEdit={isEdit} setIsEdit={setIsEdit}/>
          ) : (
          <Profile setIsEdit={setIsEdit}/>
          )}
      </>
   )
}

export default ProfileLayout;