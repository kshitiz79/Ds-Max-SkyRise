"use client";

import Link from "next/link";

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function ReferAndEarn() {
  const steps = [
    {
      step: "01",
      title: "Refer",
      desc: "Share your friend's details with us using our contact form."
    },
    {
      step: "02",
      title: "They Book",
      desc: "Your referral visits the site and purchases a Skyora home."
    },
    {
      step: "03",
      title: "You Earn",
      desc: "Collect your exclusive reward once the booking is confirmed."
    }
  ];

  return (
    <section id="refer-and-earn" className="py-20 md:py-24 bg-zinc-50 border-t border-b border-gray-200/50">
      <div className="container mx-auto px-4 max-w-[1416px]">
        
        {/* Heading */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-[#434343] uppercase tracking-widest mb-2 font-sans">
            Privileges
          </p>
          <h2 className="text-3xl md:text-[49px] font-bold text-[#1D1D1D] uppercase leading-tight font-sans">
            Refer a Friend. Earn Big Rewards.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mt-4 font-sans max-w-[600px] mx-auto">
            Know someone looking for a home in Bangalore? Refer them to Skyora and earn exclusive rewards when they book. It's that simple.
          </p>
          <div className="h-[2px] w-24 bg-[#00CC61] mx-auto mt-6" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-[1100px] mx-auto">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-150 rounded-[20px] p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Background gradient bubble */}
              <span className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-zinc-50 group-hover:bg-green-50 transition-colors duration-300 z-0" />
              
              <div className="relative z-10 flex flex-col">
                <span className="text-[40px] font-bold text-[#00CC61] leading-none mb-6 block font-sans">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-[#1D1D1D] uppercase mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed m-0 font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Area */}
        <div className="flex flex-col items-center justify-center gap-4">
          <Link
            href="/contact-us?subject=referral"
            className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[20px] bg-[#1D1D1D] text-white border border-[#1D1D1D] font-semibold text-sm transition-colors duration-500 hover:text-[#1D1D1D]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Refer Now</span>
              <span className="inline-block w-4.5 h-4.5 overflow-hidden -rotate-45 -translate-y-[1px]">
                <span className="flex w-[36px] -translate-x-[18px] group-hover/btn:translate-x-0 transition-transform duration-300 ease-in-out">
                  <span className="flex-none w-[18px] flex items-center justify-center">
                    <ArrowRightIcon />
                  </span>
                  <span className="flex-none w-[18px] flex items-center justify-center">
                    <ArrowRightIcon />
                  </span>
                </span>
              </span>
            </span>
            <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-white transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] group-hover/btn:top-[-40%] z-0" />
          </Link>
          <span className="text-xs text-gray-400 font-medium">
            * Terms & conditions apply.
          </span>
        </div>

      </div>
    </section>
  );
}
