"use client";

import { useState } from "react";
import Link from "next/link";

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function PartnerWithUs() {
  const [activeTab, setActiveTab] = useState("landowners");

  const tabs = [
    {
      id: "landowners",
      title: "Landowners",
      headline: "Let's co-develop your plot into a landmark community.",
      desc: "Own a plot in Bangalore? Let's co-develop it into a high-value residential community. We handle design, construction, approvals, and sales — you share in the upside.",
      btnText: "Connect With Our Team",
      link: "/contact-us?subject=landowners"
    },
    {
      id: "channel-partners",
      title: "Channel Partners",
      headline: "Grow your real estate brokerage with Skyora.",
      desc: "Join our network of real estate agents and brokers. Earn industry-leading commissions, get access to our full project portfolio, and enjoy dedicated support.",
      btnText: "Become a Channel Partner",
      link: "/contact-us?subject=channel-partner"
    },
    {
      id: "investors",
      title: "Investors",
      headline: "Structured returns with maximum transparency.",
      desc: "Looking for a high-growth real estate investment? Skyora's investment programs offer structured returns with full transparency and legal security.",
      btnText: "Explore Investment Plans",
      link: "/contact-us?subject=investors"
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab);

  return (
    <section id="partner-with-us" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1416px]">
        
        {/* Header */}
        <div className="max-w-[800px] mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-[#434343] uppercase tracking-widest mb-2 font-sans">
            Grow With Skyora
          </p>
          <h2 className="text-3xl md:text-[49px] font-bold text-[#1D1D1D] uppercase leading-tight font-sans">
            Let's Build Something Together
          </h2>
          <div className="h-[2px] w-24 bg-[#00CC61] mx-auto mt-6" />
        </div>

        {/* Tabs Control Row */}
        <div className="flex justify-center mb-12 border-b border-gray-100 max-w-[600px] mx-auto">
          <div className="flex gap-8 justify-center w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 text-base font-bold uppercase tracking-wider relative transition-colors cursor-pointer select-none ${
                  activeTab === tab.id ? "text-[#00CC61]" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.title}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00CC61] animate-pulse-slow" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Content Block */}
        <div className="max-w-[946px] mx-auto bg-zinc-50 border border-gray-150 rounded-[30px] p-8 md:p-12 transition-all duration-500 hover:shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Tab Copy */}
            <div className="md:col-span-8 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1D1D1D] leading-tight mb-4 uppercase">
                {currentTab.headline}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed m-0 font-sans">
                {currentTab.desc}
              </p>
            </div>

            {/* Tab CTA */}
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <Link
                href={currentTab.link}
                className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[20px] bg-[#1D1D1D] text-white border border-[#1D1D1D] font-semibold text-sm transition-colors duration-500 hover:text-[#1D1D1D]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>{currentTab.btnText}</span>
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
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
