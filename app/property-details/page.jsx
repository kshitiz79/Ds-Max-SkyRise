"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Custom inline SVG icons for details page
const BedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    <path d="M6 8v9" />
  </svg>
);

const LocationPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const TagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

export default function PropertyDetailsPage() {
  const [projectId, setProjectId] = useState("serene-heights");

  const projectsData = {
    "serene-heights": {
      name: "Sky Ora Serene Heights",
      location: "Whitefield, Bangalore East",
      price: "₹85 L onwards",
      bhk: "2 & 3 BHK Apartments",
      status: "Ready to Move",
      image: "/nwe/building1.png",
      image2: "/nwe/building2.png",
      area: "1150 - 1580 Sq.Ft.",
      units: "120 Exclusive Units",
      rera: "PRM/KA/RERA/1251/446/PR/220524/004890",
      description: "Sky Ora Serene Heights stands as a beacon of modern architectural mastery in Whitefield. Designed for professionals who demand excellence, these premium 2 & 3 BHK apartments offer expansive open layouts, high-speed fiber connectivity, cross-ventilation, and maximum natural light. The rooftop infinity pool and premium lounge provide a perfect escape after a busy day in Bangalore's premier tech hub.",
      specifications: [
        { label: "Structure", detail: "R.C.C. framed structure designed to withstand wind and seismic loads." },
        { label: "Flooring", detail: "Double charged vitrified tiles of premium quality in living, dining, and bedrooms." },
        { label: "Kitchen", detail: "Granite platform with stainless steel sink. 2-feet height ceramic tile dadoing above platform." },
        { label: "Electrical", detail: "Concealed copper wiring with modular switches. TV, telephone, and high-speed fiber internet ready points." },
        { label: "Painting", detail: "Acrylic emulsion paint for internal walls, weatherproof exterior paint for external walls." }
      ],
      amenities: [
        "🏊 Rooftop Pool & Lounge",
        "🏋 Fully Equipped Fitness Center",
        "🌿 Landscaped Gardens & Walking Paths",
        "🔐 24/7 Security with Smart Access",
        "🚗 Covered Parking & EV Charging Points",
        "📶 High-Speed Fiber Internet Ready"
      ]
    },
    "grand-residency": {
      name: "Sky Ora Grand Residency",
      location: "Sarjapur Road, Bangalore South",
      price: "₹1.1 Cr onwards",
      bhk: "3 BHK Apartments",
      status: "Nearing Completion",
      image: "/nwe/building3.png",
      image2: "/nwe/building4.png",
      area: "1480 - 1850 Sq.Ft.",
      units: "88 Luxury Residences",
      rera: "PRM/KA/RERA/1251/310/PR/230125/005112",
      description: "Sky Ora Grand Residency is an enclave of luxury located in the rapidly growing corridor of Sarjapur Road. Architected specifically for expansive living, these 3 BHK residences prioritize space, premium ventilation, and high-grade finishes. Complete with a state-of-the-art health club, landscaped trails, and specialized EV charging infrastructure, Grand Residency sets a new standard for sophisticated urban living.",
      specifications: [
        { label: "Structure", detail: "Earthquake resistant R.C.C. structure with solid cement block masonry." },
        { label: "Flooring", detail: "Imported marble in living and dining rooms. Anti-skid ceramic tiles in bathrooms and balconies." },
        { label: "Doors", detail: "Teak wood main door frame with melamine polished veneer flush shutters." },
        { label: "Electrical", detail: "Premium copper wiring with modular plates. 100% DG backup for common areas." },
        { label: "Sanitary", detail: "Wall hung EWC and sanitary fittings of Jaguar/Kohler or equivalent premium brand." }
      ],
      amenities: [
        "🏋 Fully Equipped Fitness Center",
        "🌿 Landscaped Gardens & Walking Paths",
        "🎮 Kids' Play Zone & Recreational Areas",
        "🔐 24/7 Security with Smart Access",
        "🚗 Covered Parking & EV Charging Points",
        "🛍 Retail & Convenience Stores on Campus"
      ]
    },
    "elara": {
      name: "Sky Ora Elara",
      location: "Electronic City Phase 1, Bangalore South",
      price: "₹72 L onwards",
      bhk: "2 & 3 BHK Apartments",
      status: "Under Construction",
      image: "/nwe/building5.png",
      image2: "/nwe/building6.png",
      area: "1020 - 1450 Sq.Ft.",
      units: "150 Tech-Smart Units",
      rera: "PRM/KA/RERA/1251/308/PR/231124/005910",
      description: "Sky Ora Elara brings a fresh, vibrant, and tech-enabled living ecosystem to Electronic City. Ideal for young professionals and smart investors, Elara combines space-optimization with premium, certified building materials. The community features seamless high-speed internet connectivity, functional work-from-home zones, covered parking spaces, and an array of retail outlets on campus for immediate convenience.",
      specifications: [
        { label: "Structure", detail: "Monolithic shear wall structure using advanced formwork systems for durability." },
        { label: "Flooring", detail: "Premium vitrified tiles in all living spaces. Anti-skid vitrified tiles in wet areas." },
        { label: "Windows", detail: "UPVC sliding windows with safety grills and mosquito mesh provision." },
        { label: "Electrical", detail: "Concealed wiring with modular switches. Automation-friendly smart home configuration." },
        { label: "Plumbing", detail: "Dual piping system for water recycling and eco-friendly conservation." }
      ],
      amenities: [
        "🌿 Landscaped Gardens & Walking Paths",
        "🎮 Kids' Play Zone & Recreational Areas",
        "🔐 24/7 Security with Smart Access",
        "🚗 Covered Parking & EV Charging Points",
        "🛍 Retail & Convenience Stores on Campus",
        "📶 High-Speed Fiber Internet Ready"
      ]
    },
    "verdant-park": {
      name: "Sky Ora Verdant Park",
      location: "Hebbal, Bangalore North",
      price: "₹95 L onwards",
      bhk: "2 & 3 BHK Apartments",
      status: "Ready to Move",
      image: "/nwe/building7.png",
      image2: "/nwe/building8.png",
      area: "1210 - 1620 Sq.Ft.",
      units: "96 Premium Apartments",
      rera: "PRM/KA/RERA/1251/309/PR/220824/004905",
      description: "Nestled in the green canopy of Hebbal, Sky Ora Verdant Park offers peace and connectivity in equal measure. These premium 2 & 3 BHK apartments are fully completed and ready for possession. Featuring high-end modular interior configurations, dedicated kids' play zone, eco-friendly rainwater harvesting systems, and a fully equipped gym, Verdant Park delivers high-grade lifestyle security for modern families.",
      specifications: [
        { label: "Structure", detail: "High-strength concrete framed building designed for maximum safety." },
        { label: "Flooring", detail: "Laminated wooden flooring in master bedroom, vitrified tiles in other areas." },
        { label: "Kitchen", detail: "Polished granite counter with designer tile dado. Dedicated utility area for washing machine." },
        { label: "Painting", detail: "Interior: Smooth putty finish with Royal emulsion paint. Exterior: Weather-proof texture paint." },
        { label: "Security", detail: "Video door phone at main door connected to central security desk." }
      ],
      amenities: [
        "🏊 Rooftop Pool & Lounge",
        "🏋 Fully Equipped Fitness Center",
        "🌿 Landscaped Gardens & Walking Paths",
        "🎮 Kids' Play Zone & Recreational Areas",
        "🔐 24/7 Security with Smart Access",
        "🚗 Covered Parking & EV Charging Points"
      ]
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");
      if (id && projectsData[id]) {
        setProjectId(id);
      }
    }
  }, []);

  const project = projectsData[projectId];

  const handleDownloadBrochure = (e) => {
    e.preventDefault();
    alert(`Thank you! The brochure for ${project.name} will be sent to your email address shortly.`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Your query regarding ${project.name} has been received. Our sales representative will contact you shortly.`);
  };

  return (
    <main className="flex-1 w-full bg-zinc-50 font-sans">
      
      {/* Detail Banner */}
      <section className="relative bg-zinc-950 py-16 md:py-24 text-white">
        <div className="absolute inset-0 bg-[#1D1D1D]/90 z-0 pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 max-w-[1416px]">
          
          {/* Back button */}
          <Link href="/property-listing-buy" className="text-[#00CC61] text-xs font-bold uppercase tracking-wider mb-6 inline-flex items-center gap-1 hover:underline">
            <span>&larr; Back to all projects</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#00CC61] uppercase tracking-widest mb-2 block">
                {project.status}
              </span>
              <h1 className="text-3xl sm:text-[44px] md:text-[50px] font-bold uppercase leading-tight m-0 tracking-tight">
                {project.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  <LocationPinIcon />
                  {project.location}
                </span>
                <span className="w-1.5 h-1.5 bg-[#00CC61] rounded-full hidden sm:block" />
                <span className="flex items-center gap-1">
                  <BedIcon />
                  {project.bhk}
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:items-end">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Pricing From</span>
              <span className="text-2xl sm:text-3xl font-bold text-[#00CC61] mt-1">{project.price}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Grid Content Split */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1416px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Side: Images & specifications */}
            <div className="lg:col-span-8 flex flex-col">
              
              {/* Dual image banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="relative h-[260px] sm:h-[360px] rounded-[20px] overflow-hidden bg-zinc-100 shadow-sm">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative h-[260px] sm:h-[360px] rounded-[20px] overflow-hidden bg-zinc-100 shadow-sm">
                  <Image
                    src={project.image2}
                    alt={`${project.name} Interior`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1D1D1D] uppercase mb-4 pb-2 border-b border-gray-100">
                  Project Overview
                </h3>
                <p className="text-gray-600 text-base leading-relaxed font-sans m-0">
                  {project.description}
                </p>
              </div>

              {/* Configurations Summary Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-zinc-50 border border-gray-150 rounded-[20px] p-6 mb-12">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Super Area</span>
                  <span className="text-base font-bold text-[#1D1D1D] mt-1">{project.area}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Project Size</span>
                  <span className="text-base font-bold text-[#1D1D1D] mt-1">{project.units}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Status</span>
                  <span className="text-base font-bold text-[#1D1D1D] mt-1">{project.status}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">RERA Registered</span>
                  <span className="text-xs font-semibold text-[#00CC61] truncate mt-2" title={project.rera}>
                    Yes · Approved
                  </span>
                </div>
              </div>

              {/* Specifications Accordion/Grid */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#1D1D1D] uppercase mb-6 pb-2 border-b border-gray-100">
                  Technical Specifications
                </h3>
                <div className="flex flex-col gap-4">
                  {project.specifications.map((spec, idx) => (
                    <div key={idx} className="bg-zinc-50 border border-gray-150 rounded-[15px] p-5 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                      <span className="w-full sm:w-[150px] font-bold text-xs uppercase text-gray-700 tracking-wide mt-1">
                        {spec.label}
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed m-0 flex-1 font-sans">
                        {spec.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities Grid */}
              <div>
                <h3 className="text-2xl font-bold text-[#1D1D1D] uppercase mb-6 pb-2 border-b border-gray-100">
                  Premium Amenities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.amenities.map((am, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 border border-gray-100 rounded-[12px] bg-white font-medium text-sm text-[#1D1D1D]">
                      <span>{am}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Side: Form and Brochure Card */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
              
              {/* Query Form */}
              <div className="bg-zinc-50 border border-gray-150 rounded-[25px] p-6 md:p-8 shadow-sm">
                <h4 className="text-lg font-bold text-black uppercase mb-2">Request Information</h4>
                <p className="text-gray-500 text-xs mb-6">
                  Fill out the form below to receive pricing sheets, floor layouts, and schedule a site visit.
                </p>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="det-name" className="text-[10px] font-bold text-gray-700 uppercase mb-1">Name *</label>
                    <input
                      type="text"
                      id="det-name"
                      required
                      placeholder="Enter name"
                      className="w-full border border-gray-250 rounded-[8px] px-3 py-2 bg-white text-xs outline-none focus:border-[#00CC61] font-sans"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="det-phone" className="text-[10px] font-bold text-gray-700 uppercase mb-1">Phone No *</label>
                    <input
                      type="tel"
                      id="det-phone"
                      required
                      placeholder="Enter phone number"
                      className="w-full border border-gray-250 rounded-[8px] px-3 py-2 bg-white text-xs outline-none focus:border-[#00CC61] font-sans"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="det-email" className="text-[10px] font-bold text-gray-700 uppercase mb-1">Email *</label>
                    <input
                      type="email"
                      id="det-email"
                      required
                      placeholder="Enter email address"
                      className="w-full border border-gray-250 rounded-[8px] px-3 py-2 bg-white text-xs outline-none focus:border-[#00CC61] font-sans"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="det-msg" className="text-[10px] font-bold text-gray-700 uppercase mb-1">Message</label>
                    <textarea
                      id="det-msg"
                      rows={3}
                      placeholder="I am interested in..."
                      className="w-full border border-gray-250 rounded-[8px] p-3 bg-white text-xs outline-none focus:border-[#00CC61] font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group/btn relative overflow-hidden h-[42px] w-full rounded-[8px] bg-[#1D1D1D] text-white border border-[#1D1D1D] font-bold text-xs uppercase tracking-wider transition-colors duration-500 hover:text-[#1D1D1D] cursor-pointer select-none"
                  >
                    <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-white transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] group-hover/btn:top-[-45%] z-0" />
                    <span className="relative z-10">Send Request</span>
                  </button>

                  <p className="text-[9px] text-gray-400 font-sans leading-relaxed m-0 text-center">
                    In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it.
                  </p>
                </form>
              </div>

              {/* Brochure Download Card */}
              <div className="bg-[#1D1D1D] text-white rounded-[25px] p-6 md:p-8 shadow-sm relative overflow-hidden group">
                <span className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none" />
                <h4 className="text-lg font-bold uppercase mb-2">Project Brochure</h4>
                <p className="text-gray-300 text-xs mb-6 font-sans">
                  Get full documentation, structural layout metrics, floor sizes, and configuration maps in a single PDF.
                </p>

                <form onSubmit={handleDownloadBrochure} className="flex flex-col gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter email for brochure"
                    className="w-full bg-white/10 border border-white/20 rounded-[8px] px-3 py-2 text-xs outline-none focus:border-white text-white font-sans"
                  />
                  <button
                    type="submit"
                    className="group/btn relative overflow-hidden h-[42px] w-full rounded-[8px] bg-[#00CC61] text-white border border-[#00CC61] font-bold text-xs uppercase tracking-wider transition-colors duration-500 hover:text-[#00CC61] cursor-pointer select-none"
                  >
                    <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-white transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] group-hover/btn:top-[-45%] z-0" />
                    <span className="relative z-10">Download Brochure</span>
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
