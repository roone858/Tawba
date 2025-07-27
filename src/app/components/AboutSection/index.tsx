import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="mx-auto py-16 md:py-28 px-4 sm:px-6 lg:px-10 space-y-10">
      <header className="space-y-6 md:space-y-8">
        <div className="flex gap-2">
          <Image src={"sub-title2.svg"} alt="subTitle" width={18} height={18} />{" "}
          <span className="text-md text-deep-steel">من نحن</span>
        </div>
        <h3 className="text-3xl md:text-5xl text-title">
          مرحبا بك فى <br /> مركز توبة الاسلامى
        </h3>
        <p className="text-base md:text-lg text-body-color">
          تبدأ قصة الإسلام بميلاد سيدنا محمد بن عبد الله صلى الله عليه وسلم في
          مكة، المدينة الواقعة في شبه الجزيرة العربية. نشأ يتيمًا، فتولى عمه
          رعايته، وسرعان ما اشتهر بين قومه بصدقه وأمانته.
        </p>
      </header>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div className="space-y-8 md:space-y-10 lg:w-1/2">
          <div className="flex flex-row gap-6 md:gap-8 items-center">
            <div className="group p-2 bg-gray-200 rounded-full">
              <Image
                className="w-14 md:w-18 aspect-square transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                src={"./about_2_1.svg"}
                alt=""
                width={38}
                height={38}
              />
            </div>
            <div>
              <p className="text-title text-lg md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </p>
              <p className="text-body-color text-base md:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea,
                animi maxime quaerat libero totam enim ab dolores voluptate!
                Dolore, quae!
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6 md:gap-8 items-center">
            <div className="group p-2 bg-gray-200 rounded-full">
              <Image
                className="w-14 md:w-18 aspect-square transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                src={"./about_2_2.svg"}
                alt=""
                width={38}
                height={38}
              />
            </div>
            <div>
              <p className="text-title text-lg md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </p>
              <p className="text-body-color text-base md:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea,
                animi maxime quaerat libero totam enim ab dolores voluptate!
                Dolore, quae!
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6 md:gap-8 items-center">
            <div className="group p-2 bg-gray-200 rounded-full">
              <Image
                className="w-14 md:w-18 aspect-square transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                src={"./about_2_3.svg"}
                alt=""
                width={38}
                height={38}
              />
            </div>
            <div>
              <p className="text-title text-lg md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </p>
              <p className="text-body-color text-base md:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea,
                animi maxime quaerat libero totam enim ab dolores voluptate!
                Dolore, quae!
              </p>
            </div>
          </div>
          <div className="btns flex flex-col sm:flex-row gap-3 sm:gap-5">
            <button className="py-3 px-6 md:py-4 md:px-8 rounded-lg bg-lemon">
              اكتشف المزيد
            </button>
            <button className="py-3 px-6 md:py-4 md:px-8 rounded-lg bg-slate-600 text-white">
              بضاعتنا
            </button>
          </div>
        </div>
        <div className="space-y-5 lg:w-1/2">
          <div className="bg-slate-100 rounded-2xl flex flex-col gap-6 md:gap-10 p-6 md:p-10 py-12 md:py-20 justify-center items-center text-center">
            <Image alt="quote" src="/quote.svg" width={42} height={42} />
            <p className="text-base md:text-lg text-body-color">
              Islamic philosophy is not merely a historical phenomenon but a
              dynamic and evolving intellectual tradition. Its emphasis
            </p>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image alt="image" src="/testi.png" width={32} height={32} />
              <span className="text-lg text-title">محمود جمال</span>
            </div>
          </div>
          <button className="w-full py-4 md:py-6 px-8 md:px-12 bg-slate-600 text-base md:text-lg text-white rounded-xl">
            انضم الى مجتمعنا
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;