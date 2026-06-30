"use client";

import Link from "next/link";
import Image from "next/image";

// SVG Icons for the 3 key features (Trusted Partner, Personalized Service, Experienced Team)
const TrustedPartnerIcon = () => (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M27.0966 3.12082L17.9602 0.07436C17.661 -0.0252749 17.3377 -0.0252749 17.0385 0.07436L7.90206 3.12082C6.44942 3.60335 5.18579 4.5314 4.29071 5.7731C3.39562 7.01481 2.91461 8.50701 2.91602 10.0377V17.5C2.91602 28.5294 16.3327 34.6208 16.9073 34.8746C17.0937 34.9574 17.2954 35.0002 17.4994 35.0002C17.7033 35.0002 17.905 34.9574 18.0914 34.8746C18.666 34.6208 32.0827 28.5294 32.0827 17.5V10.0377C32.0841 8.50701 31.6031 7.01481 30.708 5.7731C29.8129 4.5314 28.5493 3.60335 27.0966 3.12082ZM29.166 17.5C29.166 25.4552 19.9508 30.6731 17.4994 31.9214C15.045 30.6775 5.83269 25.4756 5.83269 17.5V10.0377C5.83277 9.11935 6.12184 8.22431 6.65893 7.4794C7.19602 6.73449 7.9539 6.17747 8.82518 5.88728L17.4994 2.9954L26.1735 5.88728C27.0448 6.17747 27.8027 6.73449 28.3398 7.4794C28.8769 8.22431 29.1659 9.11935 29.166 10.0377V17.5Z"
            fill="currentColor"
        />
        <path
            d="M22.3129 12.1042L16.2054 18.2292L12.9329 14.8167C12.8016 14.6731 12.6428 14.5572 12.466 14.4759C12.2892 14.3946 12.0979 14.3495 11.9034 14.3433C11.709 14.3371 11.5152 14.3698 11.3335 14.4396C11.1519 14.5095 10.9861 14.6149 10.8458 14.7498C10.7056 14.8847 10.5937 15.0463 10.5169 15.2251C10.4401 15.4039 10.3998 15.5962 10.3985 15.7908C10.3971 15.9854 10.4347 16.1783 10.5091 16.3581C10.5835 16.538 10.6931 16.7011 10.8314 16.8379L14.1943 20.3379C14.4451 20.6088 14.7483 20.826 15.0854 20.9764C15.4226 21.1268 15.7867 21.2073 16.1558 21.2129H16.2039C16.5657 21.2141 16.9241 21.1434 17.2583 21.005C17.5925 20.8665 17.8959 20.6631 18.1508 20.4064L24.3808 14.1764C24.5169 14.0407 24.6249 13.8794 24.6986 13.7019C24.7724 13.5244 24.8104 13.3341 24.8106 13.1418C24.8108 12.9496 24.7732 12.7592 24.6998 12.5816C24.6264 12.4039 24.5188 12.2424 24.383 12.1063C24.2472 11.9703 24.086 11.8623 23.9084 11.7885C23.7309 11.7148 23.5406 11.6767 23.3484 11.6765C23.1562 11.6763 22.9658 11.714 22.7881 11.7873C22.6104 11.8607 22.449 11.9684 22.3129 12.1042Z"
            fill="currentColor"
        />
    </svg>
);

const PersonalizedServiceIcon = () => (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M31.7873 8.07772L21.579 1.18856C19.1012 -0.482693 15.8988 -0.482693 13.421 1.18856L3.21271 8.07772C1.20021 9.43689 0 11.6958 0 14.124V27.7083C0 31.729 3.27104 35 7.29167 35H27.7083C31.729 35 35 31.729 35 27.7083V14.124C35 11.6973 33.7998 9.43689 31.7873 8.07772ZM11.6667 32.0833C11.6667 28.8663 14.2829 26.25 17.5 26.25C20.7171 26.25 23.3333 28.8663 23.3333 32.0833H11.6667ZM32.0833 27.7083C32.0833 30.1204 30.1204 32.0833 27.7083 32.0833H26.25C26.25 27.2577 22.3256 23.3333 17.5 23.3333C12.6744 23.3333 8.75 27.2577 8.75 32.0833H7.29167C4.87958 32.0833 2.91667 30.1204 2.91667 27.7083V14.124C2.91667 12.6671 3.63708 11.3108 4.84458 10.4971L15.0529 3.60793C15.7967 3.10627 16.6483 2.85543 17.5 2.85543C18.3517 2.85543 19.2033 3.10627 19.9471 3.60793L30.1554 10.4971C31.3629 11.3123 32.0833 12.6671 32.0833 14.124V27.7083ZM17.5 10.2083C14.2829 10.2083 11.6667 12.8246 11.6667 16.0417C11.6667 19.2588 14.2829 21.875 17.5 21.875C20.7171 21.875 23.3333 19.2588 23.3333 16.0417C23.3333 12.8246 20.7171 10.2083 17.5 10.2083ZM17.5 18.9583C15.8915 18.9583 14.5833 17.6502 14.5833 16.0417C14.5833 14.4331 15.8915 13.125 17.5 13.125C19.1085 13.125 20.4167 14.4331 20.4167 16.0417C20.4167 17.6502 19.1085 18.9583 17.5 18.9583Z"
            fill="currentColor"
        />
    </svg>
);

const ExperiencedTeamIcon = () => (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.02056 16.0417C10.8351 16.0417 13.1247 13.7521 13.1247 10.9375C13.1247 8.12292 10.8351 5.83333 8.02056 5.83333C5.20597 5.83333 2.91639 8.12292 2.91639 10.9375C2.91639 13.7521 5.20597 16.0417 8.02056 16.0417ZM8.02056 8.75C9.2266 8.75 10.2081 9.73146 10.2081 10.9375C10.2081 12.1435 9.2266 13.125 8.02056 13.125C6.81451 13.125 5.83306 12.1435 5.83306 10.9375C5.83306 9.73146 6.81451 8.75 8.02056 8.75ZM12.8783 20.8746C12.4276 21.544 11.5235 21.7233 10.8541 21.2742C10.0156 20.7113 9.03555 20.4152 8.02056 20.4152C5.41451 20.4152 3.2343 22.365 2.94701 24.9506C2.86389 25.6958 2.23243 26.2485 1.49889 26.2485C1.44639 26.2485 1.39243 26.2456 1.33701 26.2398C0.536388 26.1508 -0.0396535 25.429 0.0478465 24.6298C0.498471 20.5654 3.92555 17.4985 8.02056 17.4985C9.61597 17.4985 11.156 17.9652 12.4787 18.8504C13.1481 19.2996 13.3274 20.2052 12.8783 20.8746ZM22.6039 10.2083C25.4185 10.2083 27.7081 7.91875 27.7081 5.10417C27.7081 2.28958 25.4185 0 22.6039 0C19.7893 0 17.4997 2.28958 17.4997 5.10417C17.4997 7.91875 19.7893 10.2083 22.6039 10.2083ZM22.6039 2.91667C23.8099 2.91667 24.7914 3.89813 24.7914 5.10417C24.7914 6.31021 23.8099 7.29167 22.6039 7.29167C21.3978 7.29167 20.4164 6.31021 20.4164 5.10417C20.4164 3.89813 21.3978 2.91667 22.6039 2.91667ZM24.7914 14.5833C19.1637 14.5833 14.5831 19.164 14.5831 24.7917C14.5831 30.4194 19.1637 35 24.7914 35C30.4191 35 34.9997 30.4194 34.9997 27.7083C34.9997 19.164 30.4191 14.5833 24.7914 14.5833ZM24.7914 32.0833C20.7708 32.0833 17.4997 28.8123 17.4997 24.7917C17.4997 20.771 20.7708 17.5 24.7914 17.5C28.812 17.5 32.0831 20.771 32.0831 24.7917C32.0831 28.8123 28.812 32.0833 24.7914 32.0833ZM29.4901 23.0242C30.0472 23.6046 30.0283 24.5277 29.4478 25.0863L26.2206 28.1838C25.5614 28.8342 24.6864 29.1623 23.8099 29.1623C22.9335 29.1623 22.0556 28.8342 21.3847 28.1794L19.7339 26.5621C19.1578 25.9977 19.1506 25.0746 19.7135 24.5C20.2764 23.924 21.1995 23.9152 21.7756 24.4796L23.4249 26.0954C23.6349 26.3025 23.9776 26.2981 24.1862 26.0925L27.4281 22.9804C28.007 22.4248 28.9316 22.4408 29.4901 23.0242Z"
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

export default function AboutUs() {
    return (
        <section className="bg-white py-[120px] lg:py-20">
            {/* Self-contained float animations for floating shape borders/dots */}
            <style>{`
        @keyframes floatShape1 {
          0%, 100% { transform: translate(0px, 0px); opacity: 1; }
          50% { transform: translate(15px, 16px); opacity: 0; }
        }
        @keyframes floatShape2 {
          0%, 100% { transform: translate(0px, 0px); opacity: 1; }
          50% { transform: translate(-60px, -50px); opacity: 0; }
        }
      `}</style>

            <div className="container mx-auto px-4 max-w-[1416px]">
                {/* Section Heading Row */}
                <div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left gap-y-6 mb-[60px] lg:mb-12">
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-sm font-semibold text-[#434343] uppercase tracking-widest mb-2 font-sans">Who We Are</p>
                        <h2 className="text-[30px] sm:text-[39px] md:text-[49px] font-bold text-[#1D1D1D] leading-tight m-0 uppercase font-sans">
                            Built Different. <br />
                            By Design.
                        </h2>
                        <p className="text-[#434343] text-base leading-relaxed mt-4 mb-0 max-w-[560px] mx-auto md:mx-0 font-sans">
                            Skyora Builders was born from a simple idea: that modern Bangaloreans deserve homes that match the pace, ambition, and energy of their lives.
                            We are a new-age real estate company rooted in Bangalore, committed to developing residential apartments that blend smart design, premium quality, and real value. Every project we take on starts with a question — What would make someone genuinely proud to call this home?
                        </p>
                    </div>
                    <div>
                        {/* View All Button with Bubble effect and Arrow micro-interaction */}
                        <Link
                            href="/about-us"
                            className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[20px] border border-[#1D1D1D] text-[#1D1D1D] hover:text-[#1D1D1D] font-medium text-sm capitalize transition-colors duration-500"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <span>Learn More</span>
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

                {/* Double Image Wrapper with Floating SVG Background Shapes */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20 lg:mb-12">
                    {/* Border Shape (animated, floating top-left) */}
                    <span
                        className="absolute left-[-16px] top-[-16px] z-0 select-none hidden lg:block opacity-45"
                        style={{ animation: "floatShape1 10s linear infinite" }}
                    >
                        <Image src="/border.svg" alt="Border shape" width={100} height={100} className="w-auto h-auto" />
                    </span>

                    {/* Dots Shape (animated, floating bottom-right) */}
                    <span
                        className="absolute right-[-40px] bottom-[-40px] z-0 select-none hidden lg:block opacity-45"
                        style={{ animation: "floatShape2 20s linear infinite" }}
                    >
                        <Image src="/dots.svg" alt="Dots shape" width={120} height={120} className="w-auto h-auto" />
                    </span>

                    {/* Card Image 1 */}
                    <div className="relative h-[260px] sm:h-[320px] md:h-[480px] w-full rounded-[20px] overflow-hidden z-1 shadow-sm">
                        <Image
                            src="/about-img-1.jpg"
                            alt="About Us image 1"
                            fill
                            className="object-cover rounded-[20px]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Card Image 2 */}
                    <div className="relative h-[260px] sm:h-[320px] md:h-[480px] w-full rounded-[20px] overflow-hidden z-1 shadow-sm">
                        <Image
                            src="/about-img-2.jpg"
                            alt="About Us image 2"
                            fill
                            className="object-cover rounded-[20px]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* 3-Column Key Features Iconboxes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[30px] w-full">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <span className="w-[70px] h-[70px] bg-[#1D1D1D] text-white flex items-center justify-center rounded-[20px] mb-[22px] transition-transform duration-300 hover:scale-105">
                            <TrustedPartnerIcon />
                        </span>
                        <div className="flex flex-col">
                            <h3 className="text-[22px] md:text-[25px] font-bold text-[#1D1D1D] mb-[7px] leading-tight font-sans uppercase tracking-wide">
                                Smart Design
                            </h3>
                            <p className="text-md leading-relaxed text-[#434343] m-0 font-sans">
                                Our apartments are architected for real life — open layouts, natural light, cross-ventilation, and storage that actually makes sense.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <span className="w-[70px] h-[70px] bg-[#1D1D1D] text-white flex items-center justify-center rounded-[20px] mb-[22px] transition-transform duration-300 hover:scale-105">
                            <PersonalizedServiceIcon />
                        </span>
                        <div className="flex flex-col">
                            <h3 className="text-[22px] md:text-[25px] font-bold text-[#1D1D1D] mb-[7px] leading-tight font-sans uppercase tracking-wide">
                                Zero Compromise
                            </h3>
                            <p className="text-md leading-relaxed text-[#434343] m-0 font-sans">
                                From foundation to finish, we use only certified materials and follow ISO-grade construction practices. What you see is exactly what you get.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <span className="w-[70px] h-[70px] bg-[#1D1D1D] text-white flex items-center justify-center rounded-[20px] mb-[22px] transition-transform duration-300 hover:scale-105">
                            <ExperiencedTeamIcon />
                        </span>
                        <div className="flex flex-col">
                            <h3 className="text-[22px] md:text-[25px] font-bold text-[#1D1D1D] mb-[7px] leading-tight font-sans uppercase tracking-wide">
                                Fully Compliant
                            </h3>
                            <p className="text-md leading-relaxed text-[#434343] m-0 font-sans">
                                Every Sky Ora project is 100% RERA registered, BDA/BBMP/BMRDA approved, and supported by all major banks and NBFCs for seamless home loan processing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
