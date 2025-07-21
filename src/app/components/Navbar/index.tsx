import React from "react";
import Image from "next/image";
const Navbar = () => {
     // clip-path: polygon(0 0, calc(100% - 100px) 0%, 100% 100%, 0% 100%);
  return (
    <nav>
      <div className=" flex justify-between items-center py-5 mx-18">
        <div className="logo flex justify-between items-center">
          <Image src="/logo 11.png" alt="Logo" width={64} height={64} />
          <div className="flex flex-col pr-3">
            <span className="text-2xl font-bold text-title">تــــــوبـــــة</span>
            <span>مفاتيح الحياة السعيدة</span>
          </div>
        </div>
        <div className="nav-links">
          <ul className="flex items-center gap-5">
            <li>
              <a href="http://" className="text-title font-medium text-lg" target="_blank" rel="noopener noreferrer">الرئيسية</a>
            </li>
            <li>
              <a href="http://" className="text-title font-medium text-lg" target="_blank" rel="noopener noreferrer">من نحن</a>
            </li>
            <li>
              <a href="http://" className="text-title font-medium text-lg" target="_blank" rel="noopener noreferrer">الخدمات</a>
            </li>
            <li>
              <a href="http://" className="text-title font-medium text-lg" target="_blank" rel="noopener noreferrer">المناهج العلمية</a>
            </li>
            <li>
              <a href="http://" className="text-title font-medium text-lg" target="_blank" rel="noopener noreferrer">الصفحات</a>
            </li>
            <li>
              <a href="http://" className="text-title font-medium text-lg" target="_blank" rel="noopener noreferrer">اتصبا بنا</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
