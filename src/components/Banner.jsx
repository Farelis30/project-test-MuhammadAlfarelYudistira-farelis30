"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const Banner = ({ imageUrl, subtitle }) => {
  const path = usePathname();
  const title =
    path.replace("/", "").charAt(0).toUpperCase() +
    path.replace("/", "").slice(1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="relative"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: "500px",
          backgroundAttachment: "fixed",
        }}
        className="bg-cover bg-top"
      ></motion.div>
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full bg-gradient-to-t from-black to-slate-700 opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* Banner text */}
        <h1 className="text-6xl text-white">{title}</h1>
        <p className="text-2xl text-white mt-3">{subtitle}</p>
      </div>
      <div className="absolute -bottom-1 left- w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="2"
            d="M0,320L1440,64L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </motion.div>
  );
};

export default Banner;
