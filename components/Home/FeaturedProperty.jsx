"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// SVG Icons for Features and Slider navigation
const BedIcon = () => (
  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.25 0.666626H3.75C1.6825 0.666626 0 2.34913 0 4.41663V16.9166C0 17.1466 0.186667 17.3333 0.416667 17.3333C0.646667 17.3333 0.833333 17.1466 0.833333 16.9166V14.8333H19.1667V16.9166C19.1667 17.1466 19.3533 17.3333 19.5833 17.3333C19.8133 17.3333 20 17.1466 20 16.9166V4.41663C20 2.34913 18.3175 0.666626 16.25 0.666626ZM3.75 1.49996H16.25C17.8583 1.49996 19.1667 2.80829 19.1667 4.41663V10.6666H17.5V9.41663C17.5 7.80829 16.1917 6.49996 14.5833 6.49996H12.5C11.44 6.49996 10.5108 7.06829 10 7.91579C9.48917 7.06829 8.56 6.49996 7.5 6.49996H5.41667C3.80833 6.49996 2.5 7.80829 2.5 9.41663V10.6666H0.833333V4.41663C0.833333 2.80829 2.14167 1.49996 3.75 1.49996ZM10.4167 10.6666V9.41663C10.4167 8.26829 11.3508 7.33329 12.5 7.33329H14.5833C15.7325 7.33329 16.6667 8.26829 16.6667 9.41663V10.6666H10.4167ZM3.33333 10.6666V9.41663C3.33333 8.26829 4.26833 7.33329 5.41667 7.33329H7.5C8.64833 7.33329 9.58333 8.26829 9.58333 9.41663V10.6666H3.33333ZM0.833333 14V11.5H19.1667V14H0.833333Z"
      fill="currentColor"
    />
  </svg>
);

const BathIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.4183 10.719C19.0058 10.2548 18.4458 9.99981 17.8408 9.99981H0.833333V3.36565C0.833333 2.66398 1.0825 1.96565 1.59167 1.48398C2.53667 0.589812 3.86167 0.676479 4.71 1.38398L4.18917 4.37481C4.12417 4.74231 4.2 5.11898 4.40167 5.43398C4.625 5.78148 4.985 6.02231 5.39083 6.09565C5.4775 6.11231 5.56583 6.11898 5.65333 6.11898C5.97333 6.11898 6.28917 6.01565 6.54833 5.82231L9.40417 3.68065C10.0242 3.21481 10.1833 2.33898 9.75417 1.66898C9.49333 1.26315 9.04833 1.00731 8.56667 0.986479L5.355 0.842312C4.17667 -0.237688 2.2225 -0.378521 0.9025 1.00648C0.296667 1.64315 0 2.51648 0 3.39481V10.1531C0 10.3315 0.01 10.5073 0.0308333 10.684C0.1075 11.3431 0.3025 13.0106 0.3025 13.0106C0.534167 14.9773 1.52417 16.6731 2.93833 17.784C2.935 17.7948 2.51167 19.5015 2.51167 19.5015C2.45667 19.7256 2.59333 19.9506 2.81583 20.0056C2.84917 20.014 2.88333 20.0181 2.91583 20.0181C3.10333 20.0181 3.27333 19.8915 3.32 19.7015L3.67083 18.284C4.6275 18.8473 5.725 19.1656 6.88417 19.1656H13.3458C14.4258 19.1656 15.4517 18.889 16.36 18.3956L16.6783 19.6823C16.7258 19.8723 16.8958 19.999 17.0825 19.999C17.115 19.999 17.1492 19.9948 17.1825 19.9865C17.4058 19.9315 17.5425 19.7056 17.4867 19.4823L17.1017 17.9265C18.6167 16.8215 19.6858 15.064 19.9275 13.0098L19.9808 12.5456C20.06 11.8765 19.8542 11.2098 19.4158 10.7181L19.4183 10.719ZM9.06333 2.13481C9.2475 2.42315 9.1775 2.80898 8.905 3.01315L6.04917 5.15481C5.90083 5.26481 5.71917 5.30565 5.53917 5.27648C5.35833 5.24315 5.20417 5.13981 5.10417 4.98481C5.01583 4.84648 4.9825 4.68065 5.01083 4.51815L5.505 1.68315L8.53083 1.81731C8.74333 1.82731 8.93917 1.93981 9.065 2.13481H9.06333ZM19.155 12.4498L19.1017 12.914C18.7375 16.004 16.2642 18.334 13.3467 18.334H6.885C3.9675 18.334 1.49333 16.004 1.13 12.914L0.885833 10.834H17.8417C18.205 10.834 18.5442 10.9906 18.7967 11.2731C19.0767 11.5881 19.2075 12.0173 19.1567 12.4498H19.155Z"
      fill="currentColor"
    />
  </svg>
);

const AreaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.2025 7.03667L8.79417 12.1917C9.16667 12.415 9.58333 12.5258 10.0008 12.5258C10.4183 12.5258 10.835 12.4142 11.2075 12.1917L19.7992 7.03667C19.9242 6.96167 20.0017 6.82584 20.0017 6.67917C20.0017 6.53251 19.925 6.3975 19.7992 6.32167L11.2067 1.1675C10.4617 0.721672 9.53833 0.721672 8.79333 1.1675L0.2025 6.3225C0.0775 6.3975 0 6.53334 0 6.68001C0 6.82667 0.0766667 6.96084 0.2025 7.03667ZM10.7775 11.4767C10.2983 11.765 9.70167 11.765 9.2225 11.4767L6.01833 9.55417L10 7.165L13.9817 9.55417L10.7775 11.4767ZM14.7917 9.06834L10.81 6.67917L14.7917 4.29L18.7733 6.67917L14.7917 9.06834ZM9.2225 1.88167C9.70167 1.59417 10.2983 1.59417 10.7775 1.88167L13.9817 3.80417L10 6.19334L6.01833 3.80417L9.2225 1.88167ZM5.20833 4.29L9.19 6.67917L5.20833 9.06834L1.22667 6.67917L5.20833 4.29ZM19.9408 9.45167C20.0592 9.64917 19.995 9.90501 19.7983 10.0233L10.215 15.7733C10.1492 15.8133 10.075 15.8325 10.0008 15.8325C9.92667 15.8325 9.8525 15.8133 9.78667 15.7733L0.2025 10.0242C0.005 9.90584 -0.0583333 9.65001 0.06 9.45251C0.178333 9.25584 0.434167 9.19167 0.631667 9.31001L10.0008 14.9317L19.37 9.31001C19.5675 9.19167 19.8233 9.25584 19.9417 9.45251L19.9408 9.45167ZM19.9408 12.3683C20.0592 12.565 19.995 12.8217 19.7983 12.94L10.215 18.69C10.1492 18.73 10.075 18.7492 10.0008 18.7492C9.92667 18.7492 9.8525 18.73 9.78667 18.69L0.2025 12.94C0.005 12.8217 -0.0583333 12.5658 0.06 12.3683C0.178333 12.1708 0.434167 12.105 0.631667 12.225L10.0008 17.8467L19.37 12.225C19.5675 12.1042 19.8225 12.1717 19.9408 12.3683Z"
      fill="currentColor"
    />
  </svg>
);

const LocationPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.001 19.9992L9.4143 19.5033C7.5793 17.9508 1.5918 12.5633 1.5918 8.40917C1.5918 3.7725 5.3643 0 10.001 0C14.6376 0 18.4101 3.7725 18.4101 8.40917C18.4101 12.5633 12.4226 17.9508 10.5876 19.5033L10.001 19.9992ZM10.001 0.833333C5.82346 0.833333 2.42513 4.23167 2.42513 8.40917C2.42513 12.3025 8.69513 17.8033 9.9518 18.8675L10.001 18.9092L10.0501 18.8675C11.3068 17.8042 17.5768 12.3025 17.5768 8.40917C17.5768 4.23167 14.1785 0.833333 10.001 0.833333Z"
      fill="currentColor"
    />
    <path
      d="M9.99935 11.6667C8.16102 11.6667 6.66602 10.1717 6.66602 8.33333C6.66602 6.495 8.16102 5 9.99935 5C11.8377 5 13.3327 6.495 13.3327 8.33333C13.3327 10.1717 11.8377 11.6667 9.99935 11.6667ZM9.99935 5.83333C8.62102 5.83333 7.49935 6.955 7.49935 8.33333C7.49935 9.71167 8.62102 10.8333 9.99935 10.8333C11.3777 10.8333 12.4993 9.71167 12.4993 8.33333C12.4993 6.955 11.3777 5.83333 9.99935 5.83333Z"
      fill="currentColor"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const SliderArrowIcon = () => (
  <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M41.4142 16.4142C42.1953 15.6332 42.1953 14.3668 41.4142 13.5858L28.6863 0.857864C27.9052 0.0768156 26.6389 0.0768156 25.8579 0.857864C25.0768 1.63891 25.0768 2.90524 25.8579 3.68629L37.1716 15L25.8579 26.3137C25.0768 27.0948 25.0768 28.3611 25.8579 29.1421C26.6389 29.9232 27.9052 29.9232 28.6863 29.1421L41.4142 16.4142ZM0 17H40V13H0V17Z"
      fill="currentColor"
    />
  </svg>
);

export default function FeaturedProperty() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const properties = [
    {
      id: 1,
      title: "Sky Ora Serene Heights",
      price: "₹85 L onwards",
      location: "Whitefield, Bangalore — 2 & 3 BHK Apartments",
      frontImg: "/nwe/building1.png",
      backImg: "/nwe/building2.png",
      beds: "2 & 3 BHK",
      baths: "Ready to Move",
      area: "1150 Sqft",
      link: "/property-details",
    },
    {
      id: 2,
      title: "Sky Ora Grand Residency",
      price: "₹1.1 Cr onwards",
      location: "Sarjapur Road, Bangalore — 3 BHK Apartments",
      frontImg: "/nwe/building3.png",
      backImg: "/nwe/building4.png",
      beds: "3 BHK",
      baths: "Nearing Completion",
      area: "1480 Sqft",
      link: "/property-details",
    },
    {
      id: 3,
      title: "Sky Ora Elara",
      price: "₹72 L onwards",
      location: "Electronic City, Bangalore — 2 & 3 BHK Apartments",
      frontImg: "/nwe/building5.png",
      backImg: "/nwe/building6.png",
      beds: "2 & 3 BHK",
      baths: "Under Construction",
      area: "1220 Sqft",
      link: "/property-details",
    },
    {
      id: 4,
      title: "Sky Ora Verdant Park",
      price: "₹95 L onwards",
      location: "Hebbal, Bangalore — 2 & 3 BHK Apartments",
      frontImg: "/nwe/building7.png",
      backImg: "/nwe/building8.png",
      beds: "2 & 3 BHK",
      baths: "Ready to Move",
      area: "1350 Sqft",
      link: "/property-details",
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

  const totalSlides = properties.length;
  const maxIndex = totalSlides - visibleSlides;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-[120px] lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1416px]">
        {/* Section Heading Row */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left gap-y-6 mb-[60px] lg:mb-12">
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm font-semibold text-[#434343] uppercase tracking-widest mb-2 font-sans">Our Projects</p>
            <h2 className="text-[30px] sm:text-[39px] md:text-[49px] font-bold text-[#1D1D1D] leading-tight m-0 uppercase font-sans">
              Find Your Perfect <br />
              Sky Ora Home
            </h2>
            <p className="text-[#434343] text-base leading-relaxed mt-3 mb-0 max-w-[500px] mx-auto sm:mx-0 font-sans">
              From the heart of the city to its most promising corridors — explore our residential projects across Bangalore.
            </p>
          </div>
          <div>
            {/* View All Button with Bubble effect and Arrow micro-interaction */}
            <Link
              href="/property-listing-buy"
              className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[20px] border border-[#1D1D1D] text-[#1D1D1D] hover:text-[#1D1D1D] font-medium text-sm capitalize transition-colors duration-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>View All Property</span>
                {/* Arrow wrapper with dual sliding arrows rotated -45deg */}
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
              {/* Rising bubble */}
              <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-[#1D1D1D] opacity-5 group-hover/btn:top-[-45%] transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] z-0" />
            </Link>
          </div>
        </div>

        {/* Carousel Slider container */}
        <div className="group/slider relative cs_hover_show_arrows">
          {/* Slider viewport */}
          <div className="overflow-hidden w-full relative">
            <div
              className="flex transition-transform duration-500 ease-in-out mx-[-12px]"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
            >
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 transition-opacity duration-300"
                >
                  {/* Property Card */}
                  <div className="bg-white rounded-[20px] transition-all duration-300 flex flex-col h-full border border-gray-100 p-2.5">
                    {/* Double Image Thumbnail (Zoom & Fade hover effect) */}
                    <Link
                      href={property.link}
                      className="group/thumb block relative h-[250px] sm:h-[340px] w-full overflow-hidden rounded-[20px] mb-[17px] bg-gray-50"
                    >
                      <Image
                        src={property.frontImg}
                        alt={property.title}
                        fill
                        className="object-cover rounded-[20px] transition-all duration-700 opacity-100 scale-100 group-hover/thumb:opacity-0 group-hover/thumb:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <Image
                        src={property.backImg}
                        alt={property.title}
                        fill
                        className="object-cover rounded-[20px] transition-all duration-700 opacity-0 scale-105 group-hover/thumb:opacity-100 group-hover/thumb:scale-100"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Price Badge */}
                      <span className="absolute left-[15px] top-[15px] px-[14px] py-[10px] bg-white/20 backdrop-blur-[20px] rounded-[10px] text-white font-semibold text-[20px] font-sans border border-white/10 z-10">
                        {property.price}
                      </span>
                    </Link>

                    {/* Card Content details */}
                    <div className="px-4 pb-4 flex flex-col flex-1 justify-between">
                      <div>
                        {/* Property Features stack */}
                        <ul className="flex items-center justify-between text-xs font-semibold text-[#1D1D1D] mb-[23px] list-none p-0 m-0 border-b border-gray-100 pb-4">
                          <li className="flex items-center gap-2">
                            <span className="text-[#1D1D1D]"><BedIcon /></span>
                            <span>{property.beds}</span>
                          </li>
                          <div className="w-[1px] h-4.5 bg-[#434343] opacity-20" />
                          <li className="flex items-center gap-2">
                            <span className="text-[#1D1D1D]"><BathIcon /></span>
                            <span>{property.baths}</span>
                          </li>
                          <div className="w-[1px] h-4.5 bg-[#434343] opacity-20" />
                          <li className="flex items-center gap-2">
                            <span className="text-[#1D1D1D]"><AreaIcon /></span>
                            <span>{property.area}</span>
                          </li>
                        </ul>

                        {/* Title Link */}
                        <h3 className="text-xl sm:text-[25px] font-bold text-[#1D1D1D] mb-[10px] leading-tight font-sans">
                          <Link href={property.link} className="hover:text-[#00CC61] transition-colors">
                            {property.title}
                          </Link>
                        </h3>

                        {/* Location details */}
                        <div className="flex gap-2 text-sm text-[#434343] mb-6 leading-relaxed items-start">
                          <span className="text-[#1D1D1D] mt-1 flex-none"><LocationPinIcon /></span>
                          <p className="m-0">{property.location}</p>
                        </div>
                      </div>

                      {/* View Details CTA Button */}
                      <div className="w-full">
                        <Link
                          href={property.link}
                          className="group/btn relative overflow-hidden h-[45px] w-full rounded-[20px] bg-[#1D1D1D] text-white border border-[#1D1D1D] font-medium text-sm transition-colors duration-500 hover:text-[#1D1D1D] inline-flex items-center justify-center gap-2"
                        >
                          <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-white transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] group-hover/btn:top-[-40%] z-0" />
                          <span className="relative z-10">View Details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Arrows (Responsive Logic: Absolute floating on hover for desktop, simple row below on small screens) */}
          <div className="absolute top-[170px] -translate-y-1/2 left-1/2 -translate-x-1/2 w-[calc(100%+60px)] hidden lg:flex justify-between pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-all duration-300 z-30">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous slide"
              className={`w-[50px] h-[50px] rounded-full border border-gray-200 bg-white flex items-center justify-center pointer-events-auto transition-all ${currentIndex === 0
                ? "opacity-30 cursor-not-allowed text-gray-300"
                : "cursor-pointer text-[#1D1D1D] hover:bg-[#1D1D1D] hover:text-white hover:border-[#1D1D1D] shadow-md"
                }`}
            >
              <span className="rotate-180"><SliderArrowIcon /></span>
            </button>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              aria-label="Next slide"
              className={`w-[50px] h-[50px] rounded-full border border-gray-200 bg-white flex items-center justify-center pointer-events-auto transition-all ${currentIndex === maxIndex
                ? "opacity-30 cursor-not-allowed text-gray-300"
                : "cursor-pointer text-[#1D1D1D] hover:bg-[#1D1D1D] hover:text-white hover:border-[#1D1D1D] shadow-md"
                }`}
            >
              <SliderArrowIcon />
            </button>
          </div>

          {/* Slider Arrows for Tablet & Mobile (Visible below the slider) */}
          <div className="flex lg:hidden items-center justify-center gap-8 mt-10">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous slide"
              className={`w-[45px] h-[45px] rounded-full border border-gray-200 bg-white flex items-center justify-center transition-all ${currentIndex === 0
                ? "opacity-30 cursor-not-allowed text-gray-300"
                : "cursor-pointer text-[#1D1D1D] hover:bg-[#1D1D1D] hover:text-white hover:border-[#1D1D1D] shadow"
                }`}
            >
              <span className="rotate-180 scale-75"><SliderArrowIcon /></span>
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              aria-label="Next slide"
              className={`w-[45px] h-[45px] rounded-full border border-gray-200 bg-white flex items-center justify-center transition-all ${currentIndex === maxIndex
                ? "opacity-30 cursor-not-allowed text-gray-300"
                : "cursor-pointer text-[#1D1D1D] hover:bg-[#1D1D1D] hover:text-white hover:border-[#1D1D1D] shadow"
                }`}
            >
              <span className="scale-75"><SliderArrowIcon /></span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
