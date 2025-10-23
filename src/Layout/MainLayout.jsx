import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    const location= useLocation()
  return (
    <div className="bg-[#0F172A] text-[#F8FAFC] h-screen">
      <Navbar></Navbar>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
         
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
