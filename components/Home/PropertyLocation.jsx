"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Background cloud shapes SVGs
const CloudIcon1 = () => (
  <svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.4"
      d="M26.0996 10.9C26.0996 10.8 26.0996 10.7 26.0996 10.6C26.0996 10.5 26.0996 10.4 26.0996 10.3C26.0996 10.2 26.0996 10.2 26.0996 10.1C26.0996 10 25.9996 9.8 25.9996 9.7C25.4996 7.9 24.0996 6.3 22.3996 5.6C21.6996 3 19.1996 1 16.3996 1C13.9996 1 11.8996 2.4 10.7996 4.4C9.79961 3.8 8.69961 3.4 7.39961 3.4C3.89961 3.4 1.09961 6.2 1.09961 9.7C1.09961 13 3.59961 15.7 6.89961 16C7.49961 16.1 7.99961 16.2 7.99961 16.2H15.6996H23.5996C23.6996 16.2 23.6996 16.1 23.7996 16.1H24.3996C25.5996 15 26.3996 13.3 26.3996 11.5C26.0996 11.3 26.0996 11.1 26.0996 10.9Z"
      stroke="currentColor"
      strokeMiterlimit="10"
    />
  </svg>
);

const CloudIcon2 = () => (
  <svg width="44" height="27" viewBox="0 0 44 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.4"
      d="M42.7 16.8001C42.7 16.6001 42.7 16.5001 42.7 16.4001C42.7 16.3001 42.7 16.1001 42.6 16.0001C42.6 15.9001 42.6 15.8001 42.5 15.6001C42.5 15.4001 42.4 15.2001 42.3 15.0001C41.4 11.9001 39.2 9.4001 36.3 8.2001C35.1 3.8001 31 0.600098 26.3 0.600098C22.3 0.600098 18.8 2.9001 17 6.3001C15.4 5.2001 13.4 4.6001 11.4 4.6001C5.6 4.6001 1 9.3001 1 15.0001C1 20.5001 5.2 25.0001 10.6 25.4001C11.6 25.6001 12.4 25.7001 12.4 25.7001H25.1H38.2C38.3 25.6001 38.4 25.5001 38.5 25.5001H39.5C41.5 23.6001 42.8 20.9001 42.8 17.9001C42.7 17.4001 42.7 17.1001 42.7 16.8001Z"
      stroke="currentColor"
      strokeMiterlimit="10"
    />
  </svg>
);

export default function PropertyLocation() {
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef(null);

  const locations = [
    { id: 1, name: "Whitefield", count: "Skyora Serene Heights", img: "/city-tokyo.jpg", link: "/property-listing-search" },
    { id: 2, name: "Sarjapur Road", count: "Skyora Grand Residency", img: "/city-dubai.jpg", link: "/property-listing-search" },
    { id: 3, name: "Electronic City", count: "Skyora Elara", img: "/city-jakarta.jpg", link: "/property-listing-search" },
    { id: 4, name: "Hebbal", count: "Skyora Verdant Park", img: "/city-newyork.jpg", link: "/property-listing-search" },
    { id: 5, name: "Yelahanka", count: "Coming Soon", img: "/city-tokyo.jpg", link: "/property-listing-search" },
    { id: 6, name: "Kanakapura Road", count: "Coming Soon", img: "/city-hanoi.jpg", link: "/property-listing-search" },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = window.innerWidth >= 1024 ? 480 : 314; // card width (456 or 290) + gap (24)
      const index = Math.round(scrollLeft / cardWidth);
      setActiveDot(Math.min(index, locations.length - 1));
    }
  };

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth >= 1024 ? 480 : 314;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveDot(index);
    }
  };

  // Add scroll listener
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F9F4F1] py-[120px] lg:py-20 z-1">
      {/* Self-contained float animations for cloud background shapes */}
      <style>{`
        @keyframes particleMovement {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(20px, -10px) scale(1.2); }
        }
        @keyframes particleMovementReverse {
          0%, 100% { transform: translate(0px, 0px) scale(1.2); }
          50% { transform: translate(-20px, 10px) scale(1); }
        }
      `}</style>

      {/* Floating Cloud Shapes in the background */}
      <span
        className="absolute left-[20%] top-[10%] text-[#434343] select-none hidden lg:block opacity-45"
        style={{ animation: "particleMovement 10s linear infinite" }}
      >
        <CloudIcon1 />
      </span>
      <span
        className="absolute left-[12%] top-[14%] text-[#434343] select-none hidden lg:block opacity-45"
        style={{ animation: "particleMovementReverse 10s linear infinite 5s" }}
      >
        <CloudIcon2 />
      </span>
      <span
        className="absolute right-[20%] top-[10%] text-[#434343] select-none hidden lg:block opacity-45"
        style={{ animation: "particleMovement 10s linear infinite" }}
      >
        <div className="scale-x-[-1]">
          <CloudIcon1 />
        </div>
      </span>
      <span
        className="absolute right-[12%] top-[14%] text-[#434343] select-none hidden lg:block opacity-45"
        style={{ animation: "particleMovementReverse 10s linear infinite 5s" }}
      >
        <div className="scale-x-[-1]">
          <CloudIcon2 />
        </div>
      </span>

      <div className="container mx-auto px-4 max-w-[1416px] relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-[60px] lg:mb-12">
          <h2 className="text-[39px] md:text-[49px] font-bold text-[#1D1D1D] leading-tight m-0 uppercase font-sans">
            Prime Bangalore Locations, <br />
            Exceptional Living
          </h2>
          <p className="text-[#434343] text-base leading-relaxed mt-4 mb-0 max-w-[600px] mx-auto font-sans">
            From the heart of the city to its most promising corridors — Skyora projects span Bangalore&apos;s best addresses.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="w-full relative z-10">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory px-4 md:px-8 py-2 scroll-smooth"
        >
          {locations.map((loc, index) => (
            <div key={index} className="flex-shrink-0 snap-center">
              {/* City Card */}
              <Link
                href={loc.link}
                aria-label={`Click to view properties list in ${loc.name}`}
                className="group relative block w-[456px] h-[550px] md:w-[290px] md:h-[350px] rounded-[20px] overflow-hidden bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-200/10"
              >
                {/* Gradient Shaded Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 group-hover:from-black/60 transition-all duration-300 z-10 rounded-[20px]" />

                {/* City Cover Image */}
                <Image
                  src={loc.img}
                  alt={`${loc.name} city`}
                  fill
                  className="object-cover rounded-[20px] transition-transform duration-700 ease-in-out group-hover:scale-106 z-0"
                  sizes="(max-width: 768px) 290px, 456px"
                />

                {/* Overlay Text Details */}
                <div className="absolute bottom-[30px] left-[30px] z-20 text-white select-none">
                  <h3 className="text-[25px] font-bold uppercase tracking-wider font-sans mb-0">
                    {loc.name}
                  </h3>
                  <p className="text-sm font-medium opacity-90 mb-0 font-sans tracking-wide">
                    {loc.count}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="mt-[50px] lg:mt-10 flex items-center justify-center gap-3 select-none">
          {locations.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeDot === index ? "w-6 bg-[#00CC61]" : "w-2.5 bg-[#434343]/30 hover:bg-[#434343]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
