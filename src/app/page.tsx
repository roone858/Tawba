import About from "./components/AboutSection";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Pillars from "./components/PillarsSection";
import Slider from "./components/Slider";
import TopBar from "./components/TopBar";

export default function Home() {
  return (
    <div className="h-[4000px]">
      <TopBar />
      <Navbar />
      <div className="flex">
        <div
          style={{
            clipPath:
              "polygon(100% 0, 100% calc(100% - 100px), calc(100% - 140px) 100%, 0 100%, 0 0)",
          }}
          className="hidden lg:block relative bg-lemon   w-4 sm:w-6 lg:w-28  h-96  "
        ></div>
        <Slider />
      </div>
      <Gallery />
      <About />
      <Pillars />
    </div>
  );
}
