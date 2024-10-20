"use client";
import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import {
  step,
} from "@/utils/content";
import { motion } from 'framer-motion';

const slideVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};
const Howtobuy: React.FC = () => {
  return (
    <div
    id = "how-to-buy"
      className="flex flex-col w-full bg-cover bg-center bg-[#0e1238]"
    >
      <div className="flex text-3xl md:text-4xl px-6 md:px-16 lg:px-44 pt-7 justify-center items-center gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 512 512"><path fill="#df8620" d="M382.825 304.576a131.562 131.562 0 0 0-253.65 0l-18.248 66.15A80 80 0 0 0 188.046 472h135.908a80 80 0 0 0 77.119-101.274Zm-20.682 116.5A47.638 47.638 0 0 1 323.954 440H188.046a48 48 0 0 1-46.272-60.765l18.248-66.149a99.563 99.563 0 0 1 191.956 0l18.248 66.149a47.636 47.636 0 0 1-8.083 41.845ZM146.1 230.31c2.784-17.4-.908-36.027-10.4-52.463s-23.78-28.947-40.237-35.236c-17.624-6.731-35.6-5.659-50.634 3.017c-29.887 17.256-37.752 59.785-17.529 94.805c9.489 16.436 23.778 28.95 40.235 35.236a64.058 64.058 0 0 0 22.863 4.371a55.133 55.133 0 0 0 27.771-7.389c15.025-8.677 24.945-23.714 27.931-42.341m-31.6-5.058c-1.43 8.929-5.81 15.92-12.333 19.686S87.4 249 78.95 245.775c-9.613-3.671-18.115-11.251-23.941-21.342c-11.2-19.4-8.538-42.8 5.82-51.092a23.483 23.483 0 0 1 11.847-3.058a31.951 31.951 0 0 1 11.368 2.217c9.613 3.673 18.115 11.252 23.941 21.343s8.139 21.248 6.515 31.409m35.066-61.235c11.362 9.083 24.337 13.813 37.458 13.812a54.965 54.965 0 0 0 11.689-1.261c33.723-7.331 54.17-45.443 45.58-84.958c-4.03-18.546-13.828-34.817-27.588-45.818c-14.735-11.78-32.189-16.239-49.147-12.551c-33.722 7.33-54.169 45.442-45.58 84.957c4.031 18.547 13.829 34.818 27.588 45.819m24.788-99.506a22.258 22.258 0 0 1 4.732-.5c5.948 0 12.066 2.327 17.637 6.781c8.037 6.425 13.826 16.234 16.3 27.621c4.76 21.895-4.906 43.368-21.107 46.89c-7.361 1.6-15.305-.628-22.367-6.275c-8.037-6.426-13.826-16.235-16.3-27.621c-4.761-21.901 4.905-43.374 21.105-46.896m292.817 81.117c-15.028-8.676-33.013-9.748-50.634-3.017c-16.457 6.287-30.746 18.8-40.235 35.236s-13.182 35.067-10.4 52.463c2.982 18.627 12.9 33.664 27.931 42.341a55.123 55.123 0 0 0 27.771 7.389a64.054 64.054 0 0 0 22.863-4.371c16.457-6.286 30.746-18.8 40.235-35.236c20.221-35.02 12.356-77.549-17.531-94.805m-10.18 78.805c-5.826 10.091-14.328 17.671-23.941 21.342c-8.446 3.228-16.692 2.931-23.215-.837s-10.9-10.757-12.333-19.686c-1.626-10.161.686-21.314 6.513-31.4s14.328-17.67 23.941-21.343a31.955 31.955 0 0 1 11.368-2.221a23.483 23.483 0 0 1 11.847 3.058c14.358 8.285 17.023 31.682 5.82 51.087m-143.704-47.865a54.965 54.965 0 0 0 11.689 1.261c13.12 0 26.1-4.729 37.458-13.812c13.759-11 23.557-27.272 27.588-45.818c8.589-39.515-11.858-77.627-45.58-84.957c-16.957-3.686-34.412.77-49.147 12.551c-13.76 11-23.558 27.272-27.588 45.817c-8.59 39.515 11.857 77.627 45.58 84.958m-14.31-78.16c2.474-11.387 8.263-21.2 16.3-27.621c5.572-4.454 11.689-6.781 17.637-6.781a22.258 22.258 0 0 1 4.732.5c16.2 3.522 25.866 25 21.107 46.89c-2.476 11.387-8.265 21.2-16.3 27.622c-7.061 5.646-15 7.874-22.367 6.275c-16.203-3.517-25.869-24.993-21.109-46.885"></path></svg>
        <span className="font-extrabold text-white">HOW TO BUY WOLF OF LINEA</span>
      </div>
      <div className="flex gap-3 px-6 md:px-16 lg:px-28 py-5 text-lg md:text-xl font-bold text-white">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides for screens >= 640px
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3, // 3 slides for screens >= 768px
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4, // 4 slides for screens >= 1024px
              spaceBetween: 10,
            },
          }}
        >
          {step.map((value, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-between h-[150px] items-center opacity-80 border rounded-lg p-3 bg-[#1e1e2f]"
              >
                <p className="flex justify-between items-center">
                  <span className="flex text-center">{value.step}{"."}</span>
                  <span className="text-sm text-thin"> {value.title}</span>
                </p>
                <p className="text-white text-thin text-sm">
                  {value.content}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export {
  Howtobuy,
};
