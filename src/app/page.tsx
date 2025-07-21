import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import TopBar from "./components/TopBar";

export default function Home() {
  return (
    <div className="h-[4000px]">
      <TopBar />
      <Navbar />
      <Slider />
    </div>
  );
}
