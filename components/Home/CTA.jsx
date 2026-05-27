"use client";

import Link from "next/link";

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function CTA() {
  return (
    <section className="pt-[140px] lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1416px]">
        <div
          className="relative overflow-hidden rounded-[20px] bg-fixed bg-cover bg-center bg-no-repeat py-[100px] px-6 md:px-12 text-center flex flex-col items-center justify-center min-h-[380px]"
          style={{ backgroundImage: "url('/cta-bg-1.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#1D1D1D]/75 z-0" />

          <h2 className="relative z-10 text-[35px] sm:text-[45px] md:text-[50px] lg:text-[61px] font-bold text-white leading-tight uppercase font-sans mb-[34px] max-w-[1000px]">
            Ready to Find Your{" "}
            <span className="relative inline-block text-[#00CC61]">
              Dream Home?
              <span className="absolute left-0 bottom-[-8px] w-full text-[#00CC61]">
                <svg
                  width="100%"
                  height="12"
                  viewBox="0 0 248 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="w-full"
                >
                  <path
                    d="M0.5 18.5004C34.3333 10.8337 131 -2.7996 247 4.0004"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>{" "}
            <br />
            Book a Site Visit Today.
          </h2>

          <div className="relative z-10">
            <Link
              href="/contact-us"
              className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3 rounded-[20px] border border-white text-white hover:text-[#1D1D1D] font-medium text-sm capitalize transition-colors duration-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Book a Site Visit</span>

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

              <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-white group-hover/btn:top-[-45%] transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] z-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}