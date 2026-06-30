"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// SVG Arrow Icons
const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// Custom Star Rating SVG
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#00CC61" className="text-[#00CC61] flex-none">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const testimonials = [
    {
      id: 1,
      name: "Rahul M.",
      role: "Resident, Sky Ora Serene Heights",
      avatar: "/avatar-1.jpg",
      quote: "I was skeptical at first — every developer makes big promises. But Skyora actually delivered on every single one. The quality, the timeline, the support team — all top-notch",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya S.",
      role: "Resident, Sky Ora Grand Residency",
      avatar: "/avatar-2.jpg",
      quote: "Moving to Bangalore for work was stressful enough. Skyora made finding a home the easiest part of it. The transparency throughout the process was honestly refreshing.",
      rating: 5,
    },
    {
      id: 3,
      name: "Aditya & Sneha K.",
      role: "Residents, Sky Ora Elara",
      avatar: "/avatar-3.jpg",
      quote: "The apartment design is so thoughtful — from the kitchen layout to the balcony view. This doesn't feel like a builder flat. It feels like a home someone actually thought about.",
      rating: 5,
    },

  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = testimonials.length;
  const maxIndex = totalSlides - visibleSlides;

  // Handle auto-correction if current index overflows upon resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleSlides, maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="bg-[#1D1D1D] py-[127px] lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1416px]">
        {/* Section Heading Row */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left gap-y-6 mb-[60px] lg:mb-12">
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-2 font-sans">Real People. Real Stories.</p>
            <h2 className="text-[30px] sm:text-[39px] md:text-[49px] font-bold text-white leading-tight m-0 uppercase font-sans">
              Sky Ora Residents <br />
              Speak
            </h2>
          </div>
          <div className="flex items-center">
            {/* Header Arrow Controls */}
            <div className="flex items-center gap-[15px]">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                aria-label="Previous slide"
                className={`w-[50px] h-[45px] border rounded-[10px] flex items-center justify-center transition-all duration-400 ${currentIndex === 0
                  ? "border-white/20 text-white/20 cursor-not-allowed"
                  : "border-white text-white hover:bg-white hover:text-[#1D1D1D] cursor-pointer"
                  }`}
              >
                <ArrowLeftIcon />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                aria-label="Next slide"
                className={`w-[50px] h-[45px] border rounded-[10px] flex items-center justify-center transition-all duration-400 ${currentIndex === maxIndex
                  ? "border-white/20 text-white/20 cursor-not-allowed"
                  : "border-white text-white hover:bg-white hover:text-[#1D1D1D] cursor-pointer"
                  }`}
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slider viewport */}
        <div className="overflow-hidden w-full relative">
          <div
            className="flex transition-transform duration-500 ease-in-out mx-[-12px]"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
              >
                {/* Testimonial Card */}
                <div className="border border-[#434343] rounded-[15px] p-[30px] md:p-[50px] flex flex-col justify-between h-full bg-transparent min-h-[380px]">

                  {/* Top: Avatar information */}
                  <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-5 mb-10 lg:mb-[30px]">
                    <div className="relative w-[60px] h-[60px] rounded-full border border-[#434343] overflow-hidden flex-none">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="60px"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl md:text-[25px] font-semibold text-white leading-tight mb-0 font-sans">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#E2E2E2] mb-0 font-sans mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Middle: Testimonial content and quote overlay */}
                  <div className="relative mb-10 lg:mb-[30px] flex-grow text-center sm:text-left">
                    <blockquote className="text-base text-[#E2E2E2] leading-relaxed italic m-0 relative z-10 font-sans pr-0 sm:pr-10 text-center sm:text-left">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>

                    {/* Absolute quote icon at middle-right */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-9 h-[26px] opacity-40 z-0 pointer-events-none hidden sm:block">
                      <Image
                        src="/icons/quote-right.svg"
                        alt="Quote icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Bottom: Rating star metrics */}
                  <div className="flex items-center justify-center sm:justify-start gap-[7px] z-10">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA share story */}
        <div className="mt-16 text-center border-t border-white/10 pt-10">
          <p className="text-base text-gray-300 font-sans font-medium">
            Want to share your Skyora story?{" "}
            <a
              href="/contact-us?subject=testimonial"
              className="text-[#00CC61] hover:underline inline-flex items-center gap-1 font-bold ml-1 transition-colors uppercase tracking-wider"
            >
              <span>Submit Your Testimonial</span>
              <span>&rarr;</span>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
