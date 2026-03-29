import { CiPlay1 } from "react-icons/ci";
import { FaRegDotCircle } from "react-icons/fa";
import HeroImage from "../assets/images/banner.png";

export default function Hero() {
  return (
    <div className="container mx-auto flex items-center justify-center gap-6 border border-red-500">
      <div className="flex flex-col gap-4">
        <button className="bg-gray-300 flex items-center gap-2 px-2 py-1 rounded-full shadow-md font-semibold text-violet-700 cursor-pointer self-start">
          <FaRegDotCircle />
          <span>New: AI-Powered Tools Available</span>
        </button>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="font-semibold text-gray-700">
            Access premium AI tools, design assets, templates, and productivity <br />
            software-all one place. Start creating faster today.<br /> Explore
            products.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="cursor-pointer px-4 py-2 rounded-full shadow-md bg-violet-800 text-white font-bold">
            Explore Products
          </button>
          <button className="cursor-pointer flex items-center gap-2 border-2 border-violet-950 px-4 py-2 rounded-full text-violet-800 font-semibold">
            <CiPlay1 />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
      <figure>
        <img src={HeroImage} alt="hero image" />
      </figure>
    </div>
  );
}
