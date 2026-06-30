"use client";

import { useState } from "react";

// Inline icons for the 4 Feature Blocks
const DesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M8 11h8" />
    <path d="M12 7v8" />
  </svg>
);

const QualityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ComplianceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const TransparentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);

  const featureBlocks = [
    {
      id: 0,
      label: "The Skyora Difference",
      title: "Smart Design, Every Time",
      desc: "Our apartments are architected for real life — open layouts, natural light, cross-ventilation, and storage that actually makes sense.",
      icon: <DesignIcon />,
      tableTitle: "Design Standards & Offerings",
      points: [
        {
          title: "Residential Apartments Across Bangalore",
          desc: "Thoughtfully designed 1, 2 & 3 BHK apartments spanning East, West, North, and South Bangalore."
        },
        {
          title: "Prime Location Developments",
          desc: "Every Skyora project is strategically located — well-connected, fast-appreciating, and close to what matters most."
        },
        {
          title: "End-to-End In-House Execution",
          desc: "From planning and approvals to construction and handover — everything is managed under one roof for complete quality control."
        }
      ]
    },
    {
      id: 1,
      label: "The Skyora Difference",
      title: "Zero Compromise on Quality",
      desc: "From foundation to finish, we use only certified materials and follow ISO-grade construction practices. What you see in the sample flat is exactly what you get.",
      icon: <QualityIcon />,
      tableTitle: "Quality Standards & Methodologies",
      points: [
        {
          title: "ISO Certified Quality Standards and Practices",
          desc: "Every Skyora home is built to internationally recognised quality benchmarks — no shortcuts, no compromises."
        },
        {
          title: "Standardised Construction Methodologies",
          desc: "Consistent processes at every stage ensure safety, precision, and superior finish across all our projects."
        },
        {
          title: "Transparent and Seamless Home Ownership Journey",
          desc: "No hidden costs, no surprises — just a clear and honest path from booking to possession."
        },
        {
          title: "Complete Backward Integration (In-house Manufacturing and Workforce)",
          desc: "Our own skilled workforce and in-house capabilities mean tighter quality control and faster delivery."
        }
      ]
    },
    {
      id: 2,
      label: "The Skyora Difference",
      title: "Fully Compliant, Always",
      desc: "Every Skyora project is 100% RERA registered, BDA/BBMP/BMRDA approved, and supported by all major banks and NBFCs for seamless home loan processing.",
      icon: <ComplianceIcon />,
      tableTitle: "Legal Approvals & Compliances",
      points: [
        {
          title: "100% RERA Compliant Projects",
          desc: "Every Skyora project is fully RERA registered — your investment is always protected."
        },
        {
          title: "All Major Approvals Secured from BDA, BBMP, BMRDA, and BIAPPA",
          desc: "Buy with complete confidence knowing every clearance is in place before construction begins."
        },
        {
          title: "Financing Available from All Major Banks and Financial Institutions",
          desc: "Seamless home loan support from leading banks and NBFCs — making your dream home easier to own."
        }
      ]
    },
    {
      id: 3,
      label: "The Skyora Difference",
      title: "Transparent All the Way",
      desc: "No hidden charges. No last-minute surprises. Just clear pricing, honest timelines, and a team that picks up your calls.",
      icon: <TransparentIcon />,
      tableTitle: "Customer Assurance & Integrity",
      points: [
        {
          title: "Thousands of Delighted Homeowners",
          desc: "Our greatest achievement is the trust and happiness of every family that calls a Skyora apartment home."
        },
        {
          title: "Extensive Portfolio of Quality Homes Built",
          desc: "A growing legacy of well-designed, durably built residential projects across Bangalore."
        },
        {
          title: "Recognised with Prestigious Industry Awards",
          desc: "Acknowledged by leading real estate platforms for our consistent standards and delivery excellence."
        },
        {
          title: "Commitment to Lifetime Customer Support and Assurance",
          desc: "Our relationship with you doesn't end at possession — we're with you long after you move in."
        }
      ]
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-24 bg-zinc-50 border-t border-b border-gray-200/50">
      <div className="container mx-auto px-4 max-w-[1416px]">
        {/* Section Heading */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-[#434343] uppercase tracking-widest mb-2 font-sans">
            The Skyora Difference
          </p>
          <h2 className="text-3xl md:text-[49px] font-bold text-[#1D1D1D] uppercase leading-tight font-sans">
            Why Thousands Choose Skyora
          </h2>
          <div className="h-[2px] w-24 bg-[#00CC61] mx-auto mt-6" />
        </div>

        {/* Feature Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Feature Selection Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {featureBlocks.map((block) => (
              <div
                key={block.id}
                onClick={() => setActiveTab(block.id)}
                className={`p-6 rounded-[20px] border transition-all duration-300 cursor-pointer flex gap-5 items-start ${
                  activeTab === block.id
                    ? "bg-white border-[#00CC61] shadow-md scale-[1.02]"
                    : "bg-white/60 hover:bg-white border-gray-150 hover:shadow-sm"
                }`}
              >
                <span className={`w-12 h-12 rounded-xl flex items-center justify-center flex-none transition-colors ${
                  activeTab === block.id ? "bg-[#1D1D1D] text-white" : "bg-zinc-100 text-gray-500"
                }`}>
                  {block.icon}
                </span>
                <div className="flex flex-col">
                  <h3 className={`text-lg font-bold uppercase mb-2 ${
                    activeTab === block.id ? "text-[#1D1D1D]" : "text-gray-700"
                  }`}>
                    {block.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed m-0">
                    {block.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Detailed Grid Content corresponding to the active block */}
          <div className="lg:col-span-7 bg-white border border-gray-150 rounded-[20px] p-8 md:p-10 shadow-sm min-h-[480px] flex flex-col justify-between transition-all duration-300">
            <div>
              <span className="text-xs font-semibold text-[#00CC61] uppercase tracking-widest mb-3 block">
                {featureBlocks[activeTab].label}
              </span>
              <h3 className="text-2xl font-bold text-[#1D1D1D] uppercase mb-8 pb-4 border-b border-gray-100 font-sans">
                {featureBlocks[activeTab].tableTitle}
              </h3>
              
              {/* Detailed Points List */}
              <div className="flex flex-col gap-6">
                {featureBlocks[activeTab].points.map((pt, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-none mt-1">
                      <CheckIcon />
                    </span>
                    <div className="flex flex-col">
                      <h4 className="text-base font-bold text-[#1D1D1D] leading-snug mb-1">
                        {pt.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed m-0 font-sans">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom accent banner */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <span>Skyora Builders · Certified Development practices</span>
              <span className="font-semibold text-[#00CC61] uppercase">100% Verified</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
