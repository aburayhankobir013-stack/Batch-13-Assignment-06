

export default function Review(){
  return(
    <div className="container mx-auto flex items-center justify-around bg-violet-800 py-4">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-2xl font-bold text-white">
          50K+
        </h1>
        <p className="font-semibold text-white">
          Active Users
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-2xl font-bold text-white">
          200+
        </h1>
        <p className="font-semibold text-white">
          Premium Tools
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-2xl font-bold text-white">
          4.9
        </h1>
        <p className="font-semibold text-white">
          Rating
        </p>
      </div>
    </div>
  );
}