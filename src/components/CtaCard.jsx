export default function CtaCard() {
  return (
    <div className="container max-auto border border-red-500 bg-violet-800 py-25 flex flex-col items-center text-center gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white">Ready to Transform Your Workflow?</h1>
        <p className="text-white">
          Join thousands of professionals who are already using Digitools to
          work smarter.Start your free trial today.
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex items-center gap-4">
          <button className="px-4 py-1 rounded-full bg-white text-violet-800 font-bold cursor-pointer shadow-md">Explore Products</button>
          <button className="px-4 py-1 rounded-full border-2 border-white text-white font-bold shadow-md cursor-pointer">View Pricing</button>
        </div>
        <p className="text-white">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
}
