"use client";

import { useState, useEffect, useRef } from "react";

// Standard Inline SVG Icons for Visual Excellence
const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const BuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <path d="M3 21h18"></path>
    <path d="M9 21V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12"></path>
  </svg>
);

const TagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);

const SlidersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"></line>
    <line x1="4" y1="10" x2="4" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12" y2="3"></line>
    <line x1="20" y1="21" x2="20" y2="16"></line>
    <line x1="20" y1="12" x2="20" y2="3"></line>
    <line x1="1" y1="14" x2="7" y2="14"></line>
    <line x1="9" y1="8" x2="15" y2="8"></line>
    <line x1="17" y1="16" x2="23" y2="16"></line>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

// Custom Select Component with outside-click handling
function CustomSelect({ value, onChange, options, placeholder, icon, isLocation = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="h-[45px] w-full border border-[#D1D1D1] rounded-[10px] px-4 flex items-center justify-between bg-white text-sm text-[#1D1D1D] font-medium focus:outline-none select-none cursor-pointer hover:border-gray-400 transition-colors"
      >
        <span className="flex items-center gap-2 truncate">
          {icon && <span className="flex-none">{icon}</span>}
          <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        </span>
        {isLocation ? (
          <MapPinIcon className="w-4 h-4 text-gray-500 flex-none" />
        ) : (
          <ChevronDownIcon
            className={`w-3.5 h-3.5 text-gray-500 flex-none transition-transform duration-200 ${isOpen ? "rotate-180" : ""
              }`}
          />
        )}
      </button>

      {isOpen && (
        <ul className="absolute top-[calc(100%+5px)] left-0 w-full bg-white border border-gray-100 shadow-[0_4px_16px_rgba(2,0,181,0.1)] rounded-[10px] py-1.5 z-[60] max-h-[220px] overflow-y-auto list-none m-0 p-0">
          {options.map((opt, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-gray-50 text-xs font-semibold text-[#1D1D1D] hover:text-[#00CC61] transition-colors ${value === opt.value ? "text-[#00CC61] bg-gray-50/50" : ""
                  }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Hero() {
  const [category, setCategory] = useState("buy");
  const [propertyType, setPropertyType] = useState("apartment");
  const [location, setLocation] = useState("");

  const categories = [
    { label: "Buy", value: "buy" },
    { label: "Rent", value: "rent" },
  ];

  const propertyTypes = [
    { label: "Apartment", value: "apartment" },
    { label: "House", value: "house" },
    { label: "Villa", value: "villa" },
    { label: "Office", value: "office" },
    { label: "Commercial", value: "commercial" },
    { label: "Land", value: "land" },
  ];

  const locations = [
    { label: "Search Location...", value: "" },
    { label: "Whitefield, Bangalore", value: "whitefield" },
    { label: "Sarjapur Road, Bangalore", value: "sarjapur" },
    { label: "Electronic City, Bangalore", value: "electronic-city" },
    { label: "Hebbal, Bangalore", value: "hebbal" },
    { label: "Yelahanka, Bangalore", value: "yelahanka" },
    { label: "Bannerghatta Road, Bangalore", value: "bannerghatta" },
    { label: "Kanakapura Road, Bangalore", value: "kanakapura" },
    { label: "Devanahalli, Bangalore", value: "devanahalli" },
    { label: "Marathahalli, Bangalore", value: "marathahalli" },
    { label: "JP Nagar, Bangalore", value: "jp-nagar" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching properties with options:", { category, propertyType, location });
    alert(`Searching: Category=${category}, Type=${propertyType}, Location=${location || "All"}`);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat w-full min-h-[700px] sm:min-h-[850px] xl:min-h-[1000px] flex items-center pt-[140px] pb-[60px] md:pt-[160px] md:pb-[80px] lg:pt-[220px] lg:pb-[140px]"
      style={{ backgroundImage: "url('/hero-bg-1.jpg')" }}
    >
      {/* Background soft shade overlay for text readability */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1416px] relative z-10">
        <div className="max-w-[946px] mx-auto flex flex-col items-center justify-center">
          {/* Main Title Heading */}
          <h1
            className="text-[32px] sm:text-[45px] md:text-[56px] lg:text-[51px] font-bold text-center text-[#1D1D1D] leading-[1.23] m-0 font-sans uppercase"
          >
            Rise Above. Live Beyond.
          </h1>
          <p className="text-center text-[#434343] text-lg mt-5 mb-0 max-w-[700px] mx-auto font-sans">
            Bangalore&apos;s next-generation residential apartments — designed for the way you actually live.
          </p>
          <p className="text-center text-black text-xs mt-5 mb-0 max-w-[650px] mx-auto font-sans">At Skyora Builders, we don't just construct homes. We engineer futures. From sleek studio apartments to expansive 3 BHK residences, every Skyora home is a statement — bold, functional, and built for people who expect more</p>
          {/* Spacer */}
          <div className="h-[40px] lg:h-[30px] w-full" />

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="#projects"
              className="group/btn relative overflow-hidden h-[48px] px-8 rounded-[20px] bg-[#1D1D1D] text-white border border-[#1D1D1D] font-semibold text-sm transition-colors duration-500 hover:text-[#1D1D1D] inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-white transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] group-hover/btn:top-[-40%] z-0" />
              <span className="relative z-10">Explore Projects →</span>
            </a>
            <a
              href="/contact-us"
              className="group/btn relative overflow-hidden h-[48px] px-8 rounded-[20px] bg-white text-[#1D1D1D] border border-[#1D1D1D] font-semibold text-sm transition-colors duration-500 hover:text-white inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-[#1D1D1D] transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] group-hover/btn:top-[-40%] z-0" />
              <span className="relative z-10">Book a Site Visit</span>
            </a>
          </div>

          {/* Supporting Tag Line */}
          <p className="text-center text-sm text-[#434343] font-medium font-sans tracking-wide">
            RERA Compliant · BDA Approved · 100% On-Time Delivery
          </p>

          {/* Spacer */}
          <div className="h-[40px] lg:h-[30px] w-full" />

          {/* Property Search Component container */}
          <div className="w-full bg-white rounded-[20px] p-[15px] shadow-[0_10px_30px_rgba(29,29,29,0.05)] border border-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-[10px] w-full justify-between sm:justify-start">

              {/* Category input (Buy/Rent) */}
              <div className="w-full md:w-[calc(50%-10px)] lg:w-[12%] xl:w-[calc(19%-10px)]">
                <CustomSelect
                  value={category}
                  onChange={setCategory}
                  options={categories}
                  placeholder="Category"
                  icon={<TagIcon />}
                />
              </div>

              {/* Property Type input */}
              <div className="w-full md:w-[calc(50%-10px)] lg:w-[22%] xl:w-[calc(25%)]">
                <CustomSelect
                  value={propertyType}
                  onChange={setPropertyType}
                  options={propertyTypes}
                  placeholder="Type"
                  icon={<BuildingIcon />}
                />
              </div>

              {/* Location input */}
              <div className="w-full md:w-full lg:w-[33%] xl:w-[calc(27%-10px)]">
                <CustomSelect
                  value={location}
                  onChange={setLocation}
                  options={locations}
                  placeholder="Search Location..."
                  isLocation={true}
                />
              </div>

              {/* Advanced Button wrapper */}
              <div className="w-full sm:w-auto xl:w-initial">
                <button
                  type="button"
                  onClick={() => alert("Advanced search filters opened!")}
                  className="w-full h-[45px] px-[15px] py-2 flex items-center justify-center gap-2 rounded-[10px] border border-[#D1D1D1] text-[#1D1D1D] font-medium text-sm hover:bg-gray-50 transition-colors cursor-pointer select-none"
                >
                  <span>Advanced</span>
                  <SlidersIcon />
                </button>
              </div>

              {/* Submit Search Button wrapper */}
              <div className="w-full sm:w-auto xl:w-initial">
                <button
                  type="submit"
                  className="group/btn relative overflow-hidden h-[45px] w-full px-6 rounded-[10px] bg-[#1D1D1D] text-white border border-[#1D1D1D] font-semibold text-sm transition-colors duration-500 hover:text-[#1D1D1D] inline-flex items-center justify-center gap-2 cursor-pointer select-none"
                >
                  {/* Sliding rising bubble effect */}
                  <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-white transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] group-hover/btn:top-[-40%] z-0" />

                  {/* Content sits above the rising bubble */}
                  <span className="relative z-10 flex items-center gap-2">
                    <SearchIcon />
                    <span>Search</span>
                  </span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
