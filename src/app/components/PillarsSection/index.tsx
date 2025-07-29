"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./style.css";

const Pillars = () => {
  const pillars = [
    {
      id: 1,
      title: "الشهادة",
      description: "شهادة أن لا إله إلا الله وأن محمداً رسول الله",
      image: "/pillar_2_1.jpg",
      icon: "/icon-1.svg",
    },
    {
      id: 2,
      title: "إقامة الصلاة",
      description: "الصلوات الخمس المفروضة في اليوم والليلة",
      image: "/pillar_2_2.jpg",
      icon: "/icon-2.svg",
    },
    {
      id: 3,
      title: "صوم رمضان",
      description: "الصيام في شهر رمضان من طلوع الفجر إلى غروب الشمس",
      image: "/pillar_2_3.jpg",
      icon: "/icon-3.svg",
    },
    {
      id: 4,
      title: "إيتاء الزكاة",
      description: "إخراج جزء من المال لمستحقيه من الفقراء والمساكين",
      image: "/pillar_2_4.jpg",
      icon: "/icon-4.svg",
    },
    {
      id: 5,
      title: "حج البيت",
      description: "الحج إلى الكعبة مرة في العمر لمن استطاع إليه سبيلا",
      image: "/pillar_2_5.jpg",
      icon: "/icon-5.svg",
    },
  ];

  const pillarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="mx-auto py-16 px-4 sm:px-6 lg:px-10 space-y-16">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center gap-3 md:gap-5 text-center"
      >
        <div className="flex gap-2 items-center">
          <Image
            src="/sub-title2.svg"
            alt="أيقونة أركان الإسلام"
            width={18}
            height={18}
          />
          <span className="text-md text-deep-steel">أركان الإسلام</span>
        </div>

        <h1 className="text-title text-3xl md:text-5xl font-bold">
          تعرف على أركان <br className="hidden sm:block" /> الإسلام الخمسة
        </h1>
      </motion.header>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-6 lg:gap-10">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={pillarVariants}
            className="pillar-item sm:w-40 md:w-48 lg:w-56 relative space-y-6"
          >
            <div className="group relative">
              <div className="image-container rounded-full mt-14 sm:mt-20 w-28 h-28 sm:w-32 sm:h-32 mx-auto aspect-square overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={pillar.image}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  alt={`صورة ${pillar.title}`}
                  width={200}
                  height={200}
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-lemon opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center gap-2 bg-lemon px-4 py-3 shadow-md cursor-default"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={pillar.icon}
                  alt={`أيقونة ${pillar.title}`}
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <h3 className="text-base md:text-lg font-bold text-center">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm text-center text-white/90 hidden sm:block">
                {pillar.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pillars;
