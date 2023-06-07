import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import  HeaderHome  from '../components/HeaderHome'
import FooterHome from '../components/FooterHome'

import MainParroquias from '../components/MainParroquias'
import  HorariosParroquia  from "../components/HorariosParroquia";

export const AppRouter = () => {
   const  status = "authenticated"


   if (status === "checking") {
      return <h3>Cargando...</h3>;
   }

  

   return (
    <>
    <HeaderHome/>
      <Routes>
         {status !== "authenticated" ? (
            <>
               <Route path="/" element={<LoginPage />} />
               <Route path="/*" element={<Navigate to="/" />} />

            </>
         ) : (
            <>
               <Route path="/" element={<MainParroquias />} />
               <Route path="/horarios" element={<HorariosParroquia />} />
               <Route path="/*" element={<Navigate to="/" />} />
            </>
         )}
      </Routes>
      <FooterHome/>
   
 </>

   );
};
