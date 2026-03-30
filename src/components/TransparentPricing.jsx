import { IoIosCheckmark } from "react-icons/io";

export default function TransparentPricing(){
  return(
    <div className="container mx-auto border border-red-500 flex flex-col gap-4">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold">
          Simple, Transparent Pricing
        </h1>
        <p className="font-semibold text-gray-700">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="border border-red-500 flex justify-center gap-4 px-50 py-8">
        <div className="border border-red-500 flex-1 p-4 flex flex-col justify-between rounded-md shadow-md">
          <div>
            <h1 className="text-xl font-bold">
              Starter
            </h1>
            <p className="text-gray-700 font-semibold">
              Perfect for getting started
            </p>
          </div>
          <div>
            <span className="text-2xl font-bold">$0</span><sub className="text-xl font-bold text-gray-700">/Month</sub>
          </div>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl text-green-900" /><span>Access to free tools</span></li>
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl text-green-900" /><span>Basic templates</span></li>
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl text-green-900" /><span>Community support</span></li>
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl text-green-900" /><span>1 project per month</span></li>
          </ul>
          <button className="py-1 font-bold text-white bg-violet-800 rounded-full cursor-pointer shadow-md">
            Get Started Free
          </button>
        </div>
        <div className="border border-red-500 p-4 flex flex-col flex-1 justify-between gap-4 rounded-md shadow-md bg-violet-800 text-white relative">
          <div className="px-4 py-1 rounded-full bg-yellow-300 text-red-500 font-semibold shadow-md absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">Most Popular</div>
          <div>
            <h1 className="text-xl font-bold">
              Pro
            </h1>
            <p className="font-semibold">
              Best for professionals
            </p>
          </div>
          <div>
            <span className="text-2xl font-bold">$29</span><sub className="text-xl font-bold">/Month</sub>
          </div>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl" /><span>Access to all premium tools</span></li>
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl" /><span>Unlimited templates</span></li>
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl" /><span>Priority support</span></li>
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl" /><span>Unlimited projects</span></li>
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl" /><span>Cloud sync</span></li>
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl" /><span>Advanced analytics</span></li>
          </ul>
          <button className="py-1 font-bold bg-white text-violet-800 rounded-full cursor-pointer shadow-md">
            Get Started Free
          </button>
        </div>
          <div className="border border-red-500 p-4 flex-1 flex flex-col justify-between gap-4 rounded-md shadow-md">
          <div>
            <h1 className="text-xl font-bold">
              Enterprise
            </h1>
            <p className="text-gray-700 font-semibold">
              For teams and businesses
            </p>
          </div>
          <div>
            <span className="text-2xl font-bold">$99</span><sub className="text-xl font-bold text-gray-700">/Month</sub>
          </div>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl text-green-900" /><span>Everything in Pro</span></li>
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl text-green-900" /><span>Team collaboration</span></li>
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl text-green-900" /><span>Custom integrations</span></li>
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl text-green-900" /><span>Dedicated support</span></li>
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl text-green-900" /><span>SLA guarantee</span></li>
            <li className="flex items-center gap-1"><IoIosCheckmark className="font-bold text-xl text-green-900" /><span>Custom branding</span></li>
          </ul>
          <button className="py-1 font-bold text-white bg-violet-800 rounded-full cursor-pointer shadow-md">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
}