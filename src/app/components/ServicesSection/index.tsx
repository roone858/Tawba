import React from "react";
import Image from "next/image";
const ServicesSection = () => {
  return (
    <div
      style={{ backgroundImage: "url(/service_bg.jpg)" }}
      className="mx-auto py-16 md:py-28 px-4 sm:px-6 lg:px-10 space-y-20"
    >
      <header className="flex flex-col justify-center  gap-3 md:gap-5 text-center">
        <div className="flex gap-2">
          <Image src={"sub-title2.svg"} alt="subTitle" width={18} height={18} />
          <span className="text-md text-deep-steel"> ماذا نقدك</span>
        </div>

        <h1 className="text-title text-center text-3xl md:text-5xl">
          الخدمات التى نقدمها
        </h1>
      </header>
      <div className="grid grid-cols-2 gap-6">
        <div className="service-item space-y-3">
          <div className="box-icon flex justify-center items-center p-2 rounded-full w-18 h-18 bg-lemon ">
            <Image
              src={"service_3_1.svg"}
              alt="subTitle"
              width={48}
              height={48}
            />
          </div>
          <div className="box-p space-y-0.5">
            <h2 className="text-md text-title text-2xl">
              {" "}
              اصول التجويد والتفسير{" "}
            </h2>
            <p className="text-body-color text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              accusantium.
            </p>
          </div>
        </div>
        <div className="service-item space-y-3">
          <div className="box-icon flex justify-center items-center p-2 rounded-full w-18 h-18 bg-lemon ">
            <Image
              src={"service_3_2.svg"}
              alt="subTitle"
              width={48}
              height={48}
            />
          </div>
          <div className="box-p space-y-0.5">
            <h2 className="text-md text-title text-2xl">
              {" "}
              رحلات الحج والعمرة{" "}
            </h2>
            <p className="text-body-color text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              accusantium.
            </p>
          </div>
        </div>
        <div className="service-item space-y-3">
          <div className="box-icon flex justify-center items-center p-2 rounded-full w-18 h-18 bg-lemon ">
            <Image
              src={"service_3_3.svg"}
              alt="subTitle"
              width={48}
              height={48}
            />
          </div>
          <div className="box-p space-y-0.5">
            <h2 className="text-md text-title text-2xl">
              خدمة الجمتعات والتبرعات
            </h2>
            <p className="text-body-color text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              accusantium.
            </p>
          </div>
        </div>
        <div className="service-item space-y-3">
          <div className="box-icon  flex justify-center items-center  p-2 rounded-full w-18 h-18 bg-lemon ">
            <Image
              src={"service_3_4.svg"}
              alt="subTitle"
              width={48}
              height={48}
            />
          </div>
          <div className="box-p space-y-0.5">
            <h2 className="text-md text-title text-2xl">دورة الخط العربي</h2>
            <p className="text-body-color text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              accusantium.
            </p>
          </div>
        </div>
      </div>
      <div className="btns flex flex-col sm:flex-row gap-3 sm:gap-5">
        <button className="py-3 px-6 md:py-4 md:px-8 rounded-lg bg-slate-600 text-white">
          اكتشف المزيد
        </button>
        <button className="py-3 px-6 md:py-4 md:px-8 rounded-lg bg-lemon ">
          تحميل التطبيق
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
