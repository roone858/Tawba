"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div
          className=""
          style={{ backgroundImage: 'url("/hero_bg_1_1.jpg")' }}
        >
          <div className="bg-title/75 ">
            <div className="mx-18 flex justify-between min-h-screen text-white ">
              <div className="flex flex-col justify-center gap-5 flex-8/12 ml-20 ">
                <p className="font-bold text-xl ">بسم الله الرحمن الرحيم</p>
                <h2 className=" text-4xl  leading-16">
                  وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ
                  وَالْمُؤْمِنُونَ وَسَتُرَدُّونَ إِلَىٰ عَالِمِ الْغَيْبِ
                  وَالشَّهَادَةِ فَيُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ
                </h2>
                <p>
                  inventore similique! Autem temporibus dolore voluptate dolores
                  velit quaerat labore, delectus recusandae sint eaque
                  asperiores dolorum optio nihil. Cum, fugit sapiente?
                </p>
                <div>
                    <button>القران الكريم كاملا</button>
                </div>
              </div>
              <div className=" flex-5/12 flex items-end">
                <Image
                  src={"/hero-image-1.jpg"}
                  width={500}
                  height={500}
                  className=" bottom-0 relative"
                  alt="Hero image 1"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundImage: 'url("/hero_bg_1_2")' }}></div>
        slide tesyt
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundImage: 'url("/hero_bg_1_3")' }}></div>
        slide tesyt
      </SwiperSlide>
      ...
    </Swiper>
  );
};
export default Slider;
