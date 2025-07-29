"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";

const slides = [
  {
    bg: "/hero_bg_1_1.jpg",
    image: "/hero-image-1.jpg",
    verse:
      "وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ",
    source: "سورة التوبة (105)",
    description: "مرحباً بكم في مركز توبة الإسلامي، منارة للعلم وهداية المجتمع",
  },
  {
    bg: "/hero_bg_1_2.jpg",
    image: "/hero-image-2.jpg",
    verse:
      "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
    source: "سورة المجادلة (11)",
    description: "تعلم القرآن الكريم وعلومه بأحكام التجويد الصحيحة",
  },
  {
    bg: "/hero_bg_1_3.jpg",
    image: "/hero-image-3.jpg",
    verse: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ",
    source: "سورة فاطر (28)",
    description: "دورات شرعية متخصصة في الفقه والعقيدة والسيرة النبوية",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Animation variants
  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      effect="fade"
      autoplay={{
        delay: 8000, // Increased delay for better reading
        disableOnInteraction: false,
      }}
      loop={true}
      speed={1200} // Smoother transition
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="relative"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="bg-center bg-cover relative"
            style={{ backgroundImage: `url("${slide.bg}")` }}
          >
            <div className="bg-gradient-to-t from-black/90 to-black/70">
              <div className="px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between min-h-screen text-white">
                {/* Text Content */}
                <div className="flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 w-full lg:w-7/12 py-20 lg:py-24 xl:py-32 lg:ml-10 xl:ml-20">
                  <motion.div
                    key={`subtitle-${activeIndex}`}
                    initial="hidden"
                    animate="visible"
                    variants={slideFromRight}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="w-full max-w-[280px] mx-auto lg:mx-0"
                  >
                    <Image
                      src={"/sub-title.svg"}
                      width={280}
                      height={100}
                      alt="مركز توبة الإسلامي"
                      priority
                    />
                  </motion.div>

                  <motion.div
                    key={`content-${activeIndex}`}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed text-center lg:text-right font-arabic">
                      {slide.verse}
                    </h2>
                    <p className="text-lemon text-lg md:text-xl mt-2 text-center lg:text-right">
                      {slide.source}
                    </p>
                  </motion.div>

                  <motion.p
                    key={`desc-${activeIndex}`}
                    initial="hidden"
                    animate="visible"
                    variants={slideFromRight}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-base md:text-lg text-gray-300 text-center lg:text-right max-w-2xl lg:mr-0"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    key={`buttons-${activeIndex}`}
                    initial="hidden"
                    animate="visible"
                    variants={slideFromRight}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start"
                  >
                    <button className="px-6 py-3 bg-lemon hover:bg-lemon-dark text-title rounded-lg shadow-lg flex items-center justify-center transition-colors duration-300">
                      <FontAwesomeIcon icon={faPlay} className="ml-2" />
                      الاستماع للقرآن الكريم
                    </button>
                    <button className="px-6 py-3 border border-white hover:border-lemon hover:text-lemon text-white rounded-lg shadow-lg flex items-center justify-center transition-colors duration-300">
                      تعرف على خدماتنا
                      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    </button>
                  </motion.div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-5/12 flex items-end justify-end lg:justify-end mt-8 lg:mt-0">
                  <motion.div
                    key={`image-${activeIndex}`}
                    initial="hidden"
                    animate="visible"
                    variants={slideFromBottom}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
                  >
                    <Image
                      src={slide.image}
                      width={600}
                      height={600}
                      alt="صورة مركز توبة الإسلامي"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
