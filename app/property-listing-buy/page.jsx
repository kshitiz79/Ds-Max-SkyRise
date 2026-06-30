"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Custom inline SVG icons
const BedIcon = () => (
  <svg width="18" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.25 0.666626H3.75C1.6825 0.666626 0 2.34913 0 4.41663V16.9166C0 17.1466 0.186667 17.3333 0.416667 17.3333C0.646667 17.3333 0.833333 17.1466 0.833333 16.9166V14.8333H19.1667V16.9166C19.1667 17.1466 19.3533 17.3333 19.5833 17.3333C19.8133 17.3333 20 17.1466 20 16.9166V4.41663C20 2.34913 18.3175 0.666626 16.25 0.666626ZM3.75 1.49996H16.25C17.8583 1.49996 19.1667 2.80829 19.1667 4.41663V10.6666H17.5V9.41663C17.5 7.80829 16.1917 6.49996 14.5833 6.49996H12.5C11.44 6.49996 10.5108 7.06829 10 7.91579C9.48917 7.06829 8.56 6.49996 7.5 6.49996H5.41667C3.80833 6.49996 2.5 7.80829 2.5 9.41663V10.6666H0.833333V4.41663C0.833333 2.80829 2.14167 1.49996 3.75 1.49996ZM10.4167 10.6666V9.41663C10.4167 8.26829 11.3508 7.33329 12.5 7.33329H14.5833C15.7325 7.33329 16.6667 8.26829 16.6667 9.41663V10.6666H10.4167ZM3.33333 10.6666V9.41663C3.33333 8.26829 4.26833 7.33329 5.41667 7.33329H7.5C8.64833 7.33329 9.58333 8.26829 9.58333 9.41663V10.6666H3.33333ZM0.833333 14V11.5H19.1667V14H0.833333Z"
      fill="currentColor"
    />
  </svg>
);

const LocationPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.001 19.9992L9.4143 19.5033C7.5793 17.9508 1.5918 12.5633 1.5918 8.40917C1.5918 3.7725 5.3643 0 10.001 0C14.6376 0 18.4101 3.7725 18.4101 8.40917C18.4101 12.5633 12.4226 17.9508 10.5876 19.5033L10.001 19.9992ZM10.001 0.833333C5.82346 0.833333 2.42513 4.23167 2.42513 8.40917C2.42513 12.3025 8.69513 17.8033 9.9518 18.8675L10.001 18.9092L10.0501 18.8675C11.3068 17.8042 17.5768 12.3025 17.5768 8.40917C17.5768 4.23167 14.1785 0.833333 10.001 0.833333Z"
      fill="currentColor"
    />
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export default function PropertyListingPage() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: "serene-heights",
      name: "Sky Ora Serene Heights",
      price: "₹85 L onwards",
      location: "Whitefield, Bangalore",
      region: "east",
      bhk: "2 & 3 BHK Apartments",
      status: "ready-to-move",
      statusLabel: "Ready to Move",
      image: "/nwe/building1.png",
      desc: "Experience rising luxury in the heart of East Bangalore's IT corridor.",
    },
    {
      id: "grand-residency",
      name: "Sky Ora Grand Residency",
      price: "₹1.1 Cr onwards",
      location: "Sarjapur Road, Bangalore",
      region: "south",
      bhk: "3 BHK Apartments",
      status: "nearing-completion",
      statusLabel: "Nearing Completion",
      image: "/nwe/building3.png",
      desc: "Premium, hyper-ventilated, and expansive residences built for modern elite families.",
    },
    {
      id: "elara",
      name: "Sky Ora Elara",
      price: "₹72 L onwards",
      location: "Electronic City, Bangalore",
      region: "south",
      bhk: "2 & 3 BHK Apartments",
      status: "under-construction",
      statusLabel: "Under Construction",
      image: "/nwe/building5.png",
      desc: "Smart design homes tailored for active lifestyles, connectivity, and value.",
    },
    {
      id: "verdant-park",
      name: "Sky Ora Verdant Park",
      price: "₹95 L onwards",
      location: "Hebbal, Bangalore",
      region: "north",
      bhk: "2 & 3 BHK Apartments",
      status: "ready-to-move",
      statusLabel: "Ready to Move",
      image: "/nwe/building7.png",
      desc: "Breathtaking landscapes combined with ISO certified infrastructure in North Bangalore.",
    }
  ];

  // Set initial filters based on URL search parameters if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const filterParam = params.get("filter");
      if (filterParam) {
        setStatusFilter(filterParam);
      }
    }
  }, []);

  const filteredProjects = projects.filter((proj) => {
    const matchesStatus = statusFilter === "all" || proj.status === statusFilter;
    const matchesLocation = locationFilter === "all" || proj.region === locationFilter;
    const matchesSearch = proj.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          proj.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesLocation && matchesSearch;
  });

  return (
    <main className="flex-1 w-full bg-zinc-50 font-sans">
      
      {/* Page Header */}
      <section
        className="relative bg-cover bg-white bg-center bg-no-repeat py-20 text-white text-center flex flex-col items-center justify-center md:min-h-[500px] min-h-[300px]"
        style={{ backgroundImage: "url('/cta-bg-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#1D1D1D]/85 z-0" />
        <div className="relative z-10 container mx-auto px-4 max-w-[1416px]">
          <p className="text-sm font-semibold text-[#00CC61] uppercase tracking-widest mb-3">
            Our Projects
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-bold uppercase leading-tight mb-4 tracking-tight">
            Find Your Perfect Home
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-semibold max-w-[800px] mx-auto leading-relaxed">
            From the heart of the city to its most promising corridors — explore our residential projects across Bangalore.
          </p>
          <div className="h-[2px] w-24 bg-[#00CC61] mx-auto mt-6" />
        </div>
      </section>

      {/* Main Listing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1416px]">
          
          {/* Filters Bar */}
          <div className="bg-zinc-50 border border-gray-150 rounded-[25px] p-6 md:p-8 mb-12 shadow-sm flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            
            {/* Status Filters */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">Project Status</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "all", label: "All Projects" },
                  { value: "ready-to-move", label: "Ready to Move" },
                  { value: "nearing-completion", label: "Nearing Completion" },
                  { value: "under-construction", label: "Under Construction" }
                ].map((st) => (
                  <button
                    key={st.value}
                    onClick={() => setStatusFilter(st.value)}
                    className={`px-4 py-2 text-xs font-bold rounded-[12px] border transition-all cursor-pointer ${
                      statusFilter === st.value
                        ? "bg-[#1D1D1D] border-[#1D1D1D] text-white shadow-sm"
                        : "bg-white border-gray-200 text-gray-600 hover:border-gray-450 hover:bg-zinc-50"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Filters */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">Location</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "all", label: "All Regions" },
                  { value: "east", label: "East Bangalore" },
                  { value: "south", label: "South Bangalore" },
                  { value: "north", label: "North Bangalore" },
                  { value: "west", label: "West Bangalore" }
                ].map((loc) => (
                  <button
                    key={loc.value}
                    onClick={() => setLocationFilter(loc.value)}
                    className={`px-4 py-2 text-xs font-bold rounded-[12px] border transition-all cursor-pointer ${
                      locationFilter === loc.value
                        ? "bg-[#1D1D1D] border-[#1D1D1D] text-white shadow-sm"
                        : "bg-white border-gray-200 text-gray-600 hover:border-gray-450 hover:bg-zinc-50"
                    }`}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="flex flex-col gap-2 w-full lg:max-w-[280px]">
              <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">Search</span>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search project..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-250 rounded-[12px] pl-10 pr-4 py-2.5 text-xs outline-none focus:border-[#00CC61] text-[#1D1D1D] font-medium"
                />
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                  <SearchIcon />
                </span>
              </div>
            </div>

          </div>

          {/* Listing Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white rounded-[25px] border border-gray-150 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 gap-0 group"
                >
                  {/* Left Column Image */}
                  <div className="relative sm:col-span-5 h-[240px] sm:h-auto min-h-[220px] bg-zinc-100 overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                      sizes="(max-width: 768px) 100vw, 20vw"
                    />
                    <span className="absolute top-4 left-4 px-3.5 py-2 bg-[#1D1D1D]/90 backdrop-blur-md text-[10px] font-bold text-white rounded-[8px] uppercase tracking-wider">
                      {proj.statusLabel}
                    </span>
                  </div>

                  {/* Right Column Content */}
                  <div className="p-6 sm:col-span-7 flex flex-col justify-between h-full bg-white">
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#00CC61] uppercase tracking-wider">
                        <span>{proj.bhk}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#1D1D1D] uppercase leading-tight mb-2">
                        {proj.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                        <span className="text-gray-400"><LocationPinIcon /></span>
                        <span>{proj.location}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans">
                        {proj.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Starting Price</span>
                        <span className="text-lg font-bold text-[#1D1D1D]">{proj.price}</span>
                      </div>
                      <Link
                        href={`/property-details?id=${proj.id}`}
                        className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[12px] bg-[#1D1D1D] text-white border border-[#1D1D1D] font-bold text-xs uppercase tracking-wider transition-colors duration-500 hover:text-[#1D1D1D]"
                      >
                        <span className="relative z-10 flex items-center gap-1.5">
                          <span>View Details</span>
                          <span>&rarr;</span>
                        </span>
                        <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-zinc-100 transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] group-hover/btn:top-[-45%] z-0" />
                      </Link>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-zinc-50 border border-dashed border-gray-250 rounded-[20px] max-w-[600px] mx-auto mb-20">
              <p className="text-gray-500 font-medium font-sans mb-0">No projects found matching the criteria.</p>
              <button
                onClick={() => { setStatusFilter("all"); setLocationFilter("all"); setSearchQuery(""); }}
                className="text-[#00CC61] hover:underline font-bold mt-2 text-sm uppercase tracking-wide cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Slogan Message Block */}
          <div className="bg-[#1D1D1D] text-white p-8 md:p-12 rounded-[25px] relative overflow-hidden shadow-xl max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Text Quote */}
              <div className="lg:col-span-8">
                <span className="text-[00CC61] text-xs font-semibold uppercase tracking-widest block mb-4">
                  A Message on Homeownership
                </span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase mb-6 tracking-tight leading-tight">
                  Every Home is a Story, Create Yours here.
                </h3>
                <blockquote className="text-gray-300 text-sm md:text-base leading-relaxed italic m-0 font-sans border-l-2 border-[#00CC61] pl-6">
                  "A home should feel like it was made for you and that is exactly the standard we hold ourselves to at Skyora. My focus has always been on putting people at the centre of everything we design and deliver. From the first conversation to the day you receive your keys, we want every Skyora homeowner to feel heard, valued, and genuinely excited about the life that awaits them. This is not just our business — it is our passion, and it shows in every home we build."
                </blockquote>
              </div>

              {/* MD Bio Card */}
              <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="relative w-20 h-20 rounded-full border border-[#00CC61]/40 overflow-hidden mx-auto mb-4 bg-zinc-800">
                  <Image
                    src="/banner-img-1.jpg"
                    alt="Ms. Nisha Nakul Sharma"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-white text-base font-bold uppercase m-0 leading-snug">Ms. Nisha Nakul Sharma</h4>
                <p className="text-[#00CC61] text-xs font-semibold uppercase tracking-wider mt-1 mb-0">Managing Director</p>
                <p className="text-gray-400 text-[10px] mt-0.5 mb-0">Skyora Builders</p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
