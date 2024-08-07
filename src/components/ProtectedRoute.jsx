"use client"

import { useAuthStore } from "@/store/authStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({children}) => {
   const router = useRouter();
   const pathname = usePathname();
   const {user} = useAuthStore();

   useEffect(() => {
      if(user) {
         const loginRoutesList = ["/auth/login", "/auth/register"];
         if(loginRoutesList.includes(pathname)) {
            router.push("/");
         }
      } else {
         const loginRoutesList = ["/account", "/account/password"];
         if(loginRoutesList.includes(pathname)) {
            router.push("/auth/login");
         }
      }
   })

   return <>{children}</>;
};

export default ProtectedRoute;