"use server"
import Menu from "@/components/account/Menu";
import ProfileLayout from "@/components/account/ProfileLayout";
import MainLayout from "@/components/MainLayout";


const Account = () => {
   return (
      <MainLayout>
         <section id="account" className="mx-auto max-w-[1320px] my-8 px-10 xl:px-0 flex flex-col xl:flex-row">
            <Menu/>
            <ProfileLayout/>
         </section>
      </MainLayout>
   )
}

export default Account;