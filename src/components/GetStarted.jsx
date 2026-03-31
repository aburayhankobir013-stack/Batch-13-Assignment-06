import UserImage from "../assets/images/user.png";
import PackageImage from "../assets/images/package.png";
import RocketImage from "../assets/images/rocket.png";

export default function GetStarted(){
  return(
    <div className="container mx-auto flex flex-col gap-4 mt-12.5">
      <div className="flex justify-center items-center flex-col gap-1">
        <h1 className="text-2xl font-bold">
          Get Started In 3 Steps
        </h1>
        <p className="text-gray-700 font-semibold">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 px-50 py-4">
        <div className="flex flex-col items-center text-center gap-2 relative rounded-md p-5 shadow-md">
          <div className="absolute top-0 right-0 -translate-x-1/4 translate-y-1/4 size-6 flex justify-center items-center rounded-full bg-violet-800 font-semibold text-white">
            01
          </div>
          <figure className="size-12.5 p-2 rounded-full bg-violet-200">
            <img src={UserImage} alt="user image" className="size-full"/>
          </figure>
          <h1 className="font-bold text-xl">
            Create Account
          </h1>
          <p className="font-semibold text-gray-700">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-2 relative rounded-md p-5 shadow-md">
          <div className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2 size-6 flex justify-center items-center rounded-full bg-violet-800 font-semibold text-white">
            02
          </div>
          <figure className="size-12.5 p-2 rounded-full bg-violet-200">
            <img src={PackageImage} alt="package image" className="size-full"/>
          </figure>
          <h1 className="font-bold text-xl">
            Choose Products
          </h1>
          <p className="font-semibold text-gray-700">
            Browse our catalog and select the tools that fit  your needs.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-2 relative rounded-md p-5 shadow-md">
          <div className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2 size-6 flex justify-center items-center rounded-full bg-violet-800 font-semibold text-white">
            03
          </div>
          <figure className="size-12.5 p-2 rounded-full bg-violet-200">
            <img src={RocketImage} alt="rocket image" className="size-full"/>
          </figure>
          <h1 className="font-bold text-xl">
            Start Creating
          </h1>
          <p className="font-semibold text-gray-700">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
}