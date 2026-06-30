"use client";

import { useState } from "react";
import Image from "next/image";

// SVG Icons for the Steps
const ExploreIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path
        d="M28.9013 11.3361L19.42 1.85364C18.2466 0.68363 16.6571 0.0266113 15 0.0266113C13.3429 0.0266113 11.7535 0.68363 10.58 1.85364L1.09877 11.3361C0.749297 11.6834 0.472227 12.0965 0.283618 12.5516C0.095009 13.0067 -0.001388 13.4948 1.50994e-05 13.9874V26.2586C1.50994e-05 27.2532 0.395103 28.207 1.09836 28.9103C1.80163 29.6136 2.75545 30.0086 3.75002 30.0086H26.25C27.2446 30.0086 28.1984 29.6136 28.9017 28.9103C29.6049 28.207 30 27.2532 30 26.2586V13.9874C30.0014 13.4948 29.905 13.0067 29.7164 12.5516C29.5278 12.0965 29.2507 11.6834 28.9013 11.3361ZM18.75 27.5086H11.25V22.5911C11.25 21.5966 11.6451 20.6428 12.3484 19.9395C13.0516 19.2362 14.0055 18.8411 15 18.8411C15.9946 18.8411 16.9484 19.2362 17.6517 19.9395C18.3549 20.6428 18.75 21.5966 18.75 22.5911V27.5086ZM27.5 26.2586C27.5 26.5902 27.3683 26.9081 27.1339 27.1425C26.8995 27.3769 26.5815 27.5086 26.25 27.5086H21.25V22.5911C21.25 20.9335 20.5915 19.3438 19.4194 18.1717C18.2473 16.9996 16.6576 16.3411 15 16.3411C13.3424 16.3411 11.7527 16.9996 10.5806 18.1717C9.4085 19.3438 8.75002 20.9335 8.75002 22.5911V27.5086H3.75002C3.41849 27.5086 3.10055 27.3769 2.86613 27.1425C2.63171 26.9081 2.50002 26.5902 2.50002 26.2586V13.9874C2.50117 13.6561 2.63275 13.3386 2.86627 13.1036L12.3475 3.62489C13.0521 2.92356 14.0058 2.52982 15 2.52982C15.9942 2.52982 16.9479 2.92356 17.6525 3.62489L27.1338 13.1074C27.3664 13.3415 27.4979 13.6574 27.5 13.9874V26.2586Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const ConnectIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26.2501 26.8749V29.9999H23.7501V26.8749C23.7501 25.1511 22.3488 23.7499 20.6251 23.7499H9.37508C7.65258 23.7499 6.25008 25.1511 6.25008 26.8749V29.9999H3.75008V26.8749C3.75008 23.7736 6.27383 21.2499 9.37508 21.2499H20.6251C23.7263 21.2499 26.2501 23.7736 26.2501 26.8749ZM16.0301 7.61864C17.5988 7.97989 18.8776 9.24864 19.2488 10.8149C19.5001 11.8736 19.3626 12.8886 18.9513 13.7499H20.5838C21.2101 13.7499 21.7576 13.2899 21.8301 12.6674C21.9151 11.9336 21.8838 11.1649 21.7163 10.3786C21.1613 7.77989 19.0526 5.68364 16.4501 5.14864C12.0288 4.23989 8.12633 7.61114 8.12633 11.8749C8.12633 13.7111 8.85008 15.3811 10.0263 16.6149C10.0763 15.5549 10.4588 14.5811 11.0713 13.7949C10.7863 13.2149 10.6263 12.5624 10.6263 11.8736C10.6263 9.12489 13.1738 6.95989 16.0313 7.61739L16.0301 7.61864ZM8.58883 5.03489C10.5001 3.24364 13.0026 2.35864 15.6263 2.52114C20.5313 2.83864 24.3751 7.10739 24.3751 12.2386C24.3751 14.4511 22.5763 16.2499 20.3638 16.2499H17.3676C17.0638 15.2111 16.1051 14.4511 14.9676 14.4511C13.5863 14.4511 12.4676 15.5699 12.4676 16.9511C12.4676 18.3324 13.5863 19.4511 14.9676 19.4511C15.6413 19.4511 16.2538 19.1836 16.7026 18.7499H20.3626C23.9526 18.7499 26.8738 15.8286 26.8738 12.2386C26.8751 5.79239 22.0051 0.427387 15.7876 0.0261371C12.4576 -0.190113 9.29883 0.941137 6.88008 3.21114C4.64633 5.30489 3.30383 8.20614 3.14258 11.2511H5.64633C5.80008 8.87239 6.83133 6.68364 8.59008 5.03489H8.58883Z"
      fill="currentColor"
    />
  </svg>
);

const DealIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 10C30 12.06 29.2175 14.1738 28.0238 16.205C27.6813 15.3388 27.1537 14.5363 26.4375 13.8738C27.0925 12.5463 27.5 11.235 27.5 10C27.5 6.61253 24.9237 3.75003 21.875 3.75003C19.0812 3.75003 17.49 4.88128 16.4175 5.86753L11.6375 10.3038C11.1963 10.7463 11.0913 11.49 11.4338 11.9663C11.6575 12.2775 11.9862 12.465 12.3575 12.495C12.7262 12.5288 13.0837 12.3938 13.3425 12.1325L18.5588 7.13878L20.2875 8.94378L18.74 10.425L24.6737 15.6325C26.0638 16.8525 26.4062 18.9013 25.47 20.3975C24.8937 21.3175 23.9525 21.9363 22.8888 22.0925C22.8163 22.1025 22.745 22.1113 22.6725 22.1175C22.6675 22.7613 22.4963 23.3988 22.145 23.9613C21.5688 24.8813 20.6275 25.5 19.5637 25.6563C19.3325 25.6888 19.1025 25.7025 18.8725 25.6913C18.805 26.1688 18.6425 26.6338 18.3787 27.055C17.8025 27.975 16.8612 28.5925 15.7975 28.7488C15.6187 28.775 15.44 28.7875 15.2638 28.7875C14.38 28.7875 13.5225 28.4688 12.85 27.8775L8.97 24.3975C4.87625 20.7 0 15.2013 0 10C0 5.17503 3.645 1.25003 8.125 1.25003C10.1287 1.25003 11.6663 1.72003 12.8725 2.33628L10.8738 4.19128C10.1113 3.92378 9.21125 3.75003 8.125 3.75003C5.07625 3.75003 2.5 6.61253 2.5 10C2.5 13.3425 5.39125 17.7963 10.6438 22.5425L14.5113 26.01C14.7575 26.2263 15.0988 26.3263 15.4362 26.2775C15.7788 26.2275 16.0725 26.0338 16.2612 25.73C16.5487 25.2688 16.4062 24.5838 15.935 24.1713L11.9263 20.36L13.6462 18.545L18.2987 22.9375C18.5225 23.1325 18.8687 23.235 19.2013 23.1825C19.5438 23.1325 19.8375 22.9375 20.0262 22.635C20.3137 22.1738 20.1712 21.4888 19.7 21.075L15.25 17.0463L16.9188 15.1863L21.5963 19.3488C21.8463 19.5688 22.1888 19.6713 22.525 19.6188C22.8675 19.5688 23.1613 19.3738 23.35 19.0713C23.6375 18.61 23.495 17.925 23.0238 17.5113L16.9263 12.16L15.0887 13.9188C14.4 14.6088 13.4487 14.9988 12.4587 14.9988C11.1512 14.9988 10.0525 14.3288 9.4025 13.4263C8.34625 11.9588 8.56 9.84253 9.9 8.50253L14.7188 4.03003C16.0212 2.83378 18.1737 1.24878 21.8725 1.24878C26.3525 1.24878 29.9975 5.17378 29.9975 9.99878L30 10Z"
      fill="currentColor"
    />
  </svg>
);

export default function WorkingProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      id: 1,
      icon: <ExploreIcon />,
      title: "Explore Projects",
      description: "Browse our residential projects across Bangalore — from ready-to-move apartments to upcoming launches in prime locations.",
    },
    {
      id: 2,
      icon: <ConnectIcon />,
      title: "Book a Site Visit",
      description: "Connect with our team for a personalized site visit. See the quality, the layout, and the community for yourself — no pressure, just clarity.",
    },
    {
      id: 3,
      icon: <DealIcon />,
      title: "Move Into Your Dream Home",
      description: "Finalize your booking with full transparency — clear pricing, honest timelines, and end-to-end support from our dedicated team.",
    },
  ];

  return (
    <section className="py-20 md:pb-[140px] bg-white">
      <div className="container mx-auto px-4 max-w-[1416px]">
        {/* Symmetrical grid with card layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 items-center">
          
          {/* Left Column - Video Play Block Overlays */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[650px] rounded-[20px] overflow-hidden bg-gray-50 border border-gray-100">
            {/* Main banner image */}
            <Image
              src="/banner-img-1.jpg"
              alt="Banner image"
              fill
              className="object-cover rounded-[20px] z-0"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />

            {/* Video overlay wrapper: absolutely positioned at the bottom right */}
            <div className="absolute right-0 bottom-0 w-3/5 h-2/5 z-10 pt-[5%] pl-[5%]">
              <div 
                onClick={() => setIsModalOpen(true)}
                className="group/video relative w-full h-full min-h-0 border-t-[10px] border-l-[10px] border-white rounded-br-[20px] overflow-hidden bg-gray-200 cursor-pointer bg-cover bg-center transition-all duration-300"
                style={{ backgroundImage: "url('/video-bg-1.jpg')" }}
              >
                {/* Visual overlay overlaying videobg */}
                <div className="absolute inset-0 bg-black/10 group-hover/video:bg-black/30 transition-all duration-300 z-0" />

                {/* Pulser play button circle */}
                <span className="relative z-10 w-full h-full flex items-center justify-center">
                  <span className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-500 group-hover/video:scale-110 z-10">
                    <span className="absolute inset-0 rounded-full bg-white/40 animate-ping duration-1500" />
                    <Image
                      src="/icons/play-circle.svg"
                      alt="Player icon"
                      width={40}
                      height={40}
                      className="object-contain translate-x-[2px]"
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Process content */}
          <div className="lg:col-span-7 xl:pl-[120px] lg:pl-10 pl-0">
            <div className="flex flex-col">
              <h2 className="text-center lg:text-left text-[28px] sm:text-[35px] md:text-[49px] font-bold text-[#1D1D1D] leading-tight m-0 uppercase mb-10 xl:mb-[67px] font-sans">
                How It Works? Simple Steps to Your Sky Ora Home
              </h2>

              <div className="flex flex-col space-y-[30px] max-w-[588px] mx-auto lg:mx-0">
                {steps.map((item) => (
                  <div key={item.id} className="group flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-5 md:gap-7">
                    {/* Circle Icon Container with custom hover scale fill */}
                    <div className="relative w-20 h-20 flex-none rounded-full border border-gray-150 text-[#1D1D1D] flex items-center justify-center overflow-hidden transition-all duration-400 ease-in-out group-hover:border-[#1D1D1D] group-hover:text-white">
                      {/* Scale bubble layer */}
                      <span className="absolute inset-0 bg-[#1D1D1D] rounded-full scale-0 opacity-0 transition-all duration-400 ease-in-out group-hover:scale-100 group-hover:opacity-100 z-0" />
                      {/* SVG Icon */}
                      <span className="relative z-10">{item.icon}</span>
                    </div>

                    {/* Step descriptions */}
                    <div className="flex flex-col pt-1.5">
                      <h3 className="text-xl sm:text-2xl md:text-[31px] font-semibold text-[#1D1D1D] mb-1.5 leading-snug font-sans">
                        {item.title}
                      </h3>
                      <p className="text-base text-[#434343] font-normal leading-relaxed m-0 font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Premium Video Pop-up Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-[6px] flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Style snippet to handle fade in animations */}
          <style jsx>{`
            .animate-fade-in {
              animation: fadeIn 0.3s ease-out forwards;
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}</style>
          
          <div 
            className="relative w-full max-w-[890px] aspect-video rounded-[20px] overflow-hidden bg-black shadow-2xl border border-zinc-800"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking video itself
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/45 hover:bg-black/85 text-white hover:text-red-400 flex items-center justify-center transition-all cursor-pointer z-20 font-bold border border-white/10"
            >
              ✕
            </button>
            
            {/* Responsive YouTube Player */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1PhiMWjAwcA?autoplay=1"
              title="Working Process Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
