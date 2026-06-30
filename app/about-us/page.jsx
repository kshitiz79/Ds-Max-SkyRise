"use client";

import Image from "next/image";
import Link from "next/link";

// Custom inline SVG icons for Core Values
const InnovationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
  </svg>
);

const LeadershipIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const PartnershipIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ExcellenceIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const TeamworkIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-3-3.87a3.3 3.3 0 0 0-2-1.13" />
    <path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <circle cx="17" cy="4" r="3" />
  </svg>
);

const IntegrityIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// Inline SVGs for Services
const CustomInteriorsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <path d="M3 3h18v18H3z" />
    <path d="M9 3v18" />
    <path d="M3 9h18" />
  </svg>
);

const PropertyMgmtIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const FacilityMgmtIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export default function AboutUsPage() {
  const values = [
    {
      title: "Innovation",
      description: "We challenge the ordinary. From smart floor plans to tech-enabled living spaces, innovation is at the heart of every Skyora home we design and deliver.",
      icon: <InnovationIcon />,
    },
    {
      title: "Leadership",
      description: "We lead with vision, not just volume. Skyora sets the benchmark for modern residential development in Bangalore — inspiring confidence in every homebuyer we serve.",
      icon: <LeadershipIcon />,
    },
    {
      title: "Partnership",
      description: "Great homes are built on great relationships. We work hand-in-hand with landowners, channel partners, and homebuyers to create outcomes where everyone wins.",
      icon: <PartnershipIcon />,
    },
    {
      title: "Excellence",
      description: "Good enough is never good enough for us. Every Skyora project is held to the highest standards of construction quality, design finish, and on-time delivery — no exceptions.",
      icon: <ExcellenceIcon />,
    },
    {
      title: "Teamwork",
      description: "Behind every Skyora home is a passionate team of architects, engineers, designers, and customer champions working in sync — because the best results are always a team effort.",
      icon: <TeamworkIcon />,
    },
    {
      title: "Integrity",
      description: "We say what we mean and deliver what we promise. Transparent pricing, honest communication, and ethical practices are non-negotiable at Skyora — always.",
      icon: <IntegrityIcon />,
    },
  ];

  const directors = [
    {
      name: "Shri. Ramamohan Reddy Thirumala",
      role: "Managing Director, Skyora Builders",
      quote: "At Skyora Builders, our foundation is built on a singular belief — that every family in Bangalore deserves a home that truly reflects their aspirations. My journey in real estate has taught me that trust is the most valuable asset we can ever build. With every project we deliver, I personally ensure that our commitment to quality, transparency, and timely possession never wavers. Skyora is not just a builder — it is a promise we make to every homeowner, and one we intend to keep for generations to come.",
      image: "/about-img-2.jpg",
    },
    {
      name: "Shri. Bhaskara Reddi Papi Reddi",
      role: "Managing Director, Skyora Builders",
      quote: "The Bangalore of today is not the Bangalore of yesterday and the homes we build must evolve with it. My vision for Skyora has always been to create residential spaces that are smart, sustainable, and designed for real-world living. I bring to this company a deep understanding of construction excellence and an uncompromising standard for material quality. Every Skyora apartment that stands tall across this city is a reflection of our team's passion, precision, and relentless pursuit of better.",
      image: "/about-img-1.jpg",
    },
    {
      name: "Ms. Nisha Nakul Sharma",
      role: "Managing Director, Skyora Builders",
      quote: "I believe the future of real estate belongs to those who listen to customers, to communities, and to changing lifestyles. At Skyora, I champion a people-first approach in everything we do, from the way we design our spaces to the way we communicate with our homebuyers. My focus is on building not just apartments, but thriving communities where modern families feel safe, connected, and inspired every single day. When a family walks into their Skyora home for the first time, that moment of joy is what drives everything we do.",
      image: "/banner-img-1.jpg",
    },
  ];

  return (
    <main className="flex-1 w-full bg-zinc-50 font-sans">
      
      {/* Hero Header Banner */}
      <section
        className="relative bg-cover bg-white bg-center bg-no-repeat py-20 text-white text-center flex flex-col items-center justify-center md:min-h-[600px] min-h-[300px]"
        style={{ backgroundImage: "url('/cta-bg-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#1D1D1D]/85 z-0" />

        <div className="relative z-10 container mx-auto px-4 max-w-[1416px]">
          <p className="text-sm font-semibold text-[#00CC61] uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-bold uppercase leading-tight mb-4 tracking-tight">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-semibold max-w-[800px] mx-auto leading-relaxed">
            Built Different. By Design.
          </p>
          <div className="h-[2px] w-24 bg-[#00CC61] mx-auto mt-6" />
        </div>
      </section>

      {/* Section 2: Intro */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1416px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col">
              <h2 className="text-[#C6A15B] text-lg font-semibold uppercase tracking-wider mb-2 text-center lg:text-left">
                Who We Are
              </h2>
              <h3 className="text-3xl md:text-[42px] font-bold text-[#1D1D1D] leading-tight mb-6 uppercase text-center lg:text-left">
                Built Different. By Design.
              </h3>
              <p className="text-[#434343] text-base md:text-lg leading-relaxed mb-6 text-center lg:text-left font-sans">
                Skyora Builders was born from a simple idea: that modern Bangaloreans deserve homes that match the pace, ambition, and energy of their lives.
              </p>
              <p className="text-[#434343] text-base md:text-lg leading-relaxed text-center lg:text-left font-sans">
                We are a new-age real estate company rooted in Bangalore, committed to developing residential apartments that blend smart design, premium quality, and real value. Every project we take on starts with a question — *What would make someone genuinely proud to call this home?* From our first brick to your last move-in box, we're with you at every step.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative w-full h-[320px] md:h-[450px] rounded-[20px] overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
              <Image
                src="/about-img-1.jpg"
                alt="Skyora Builders"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Crafting Skylines. Shaping Lives. */}
      <section className="py-16 md:py-24 bg-zinc-50 border-t border-b border-gray-200/50">
        <div className="container mx-auto px-4 max-w-[1416px]">
          <div className="max-w-[900px] mx-auto text-center mb-16">
            <h2 className="text-[#C6A15B] text-lg font-semibold uppercase tracking-wider mb-2">
              Beyond Construction
            </h2>
            <h3 className="text-3xl md:text-[40px] font-bold text-[#1D1D1D] uppercase leading-tight mb-5">
              CRAFTING SKYLINES. SHAPING LIVES.
            </h3>
            <p className="text-[#434343] text-base md:text-lg leading-relaxed font-sans">
              Skyora Builders was founded with a clear purpose — to redefine what residential living looks like in Bangalore. We design and deliver contemporary apartments that speak to a new generation of homeowners: ambitious, discerning, and ready to rise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-[#00CC61]">
                  <CustomInteriorsIcon />
                </span>
                <h4 className="text-2xl font-bold text-[#1D1D1D] mb-4 uppercase">
                  Custom Interiors
                </h4>
                <p className="text-[#434343] text-sm leading-relaxed font-sans">
                  Personalise your space to reflect your taste and lifestyle, with curated interior solutions tailored to every Skyora home.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center text-[#00CC61] font-semibold text-sm">
                Tailored Spaces &rarr;
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-[#00CC61]">
                  <PropertyMgmtIcon />
                </span>
                <h4 className="text-2xl font-bold text-[#1D1D1D] mb-4 uppercase">
                  Property Management
                </h4>
                <p className="text-[#434343] text-sm leading-relaxed font-sans">
                  Comprehensive support: Rental management, property resale assistance, structural modifications, and architectural upgrade assistance.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center text-[#00CC61] font-semibold text-sm">
                End-to-End Assistance &rarr;
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-[#00CC61]">
                  <FacilityMgmtIcon />
                </span>
                <h4 className="text-2xl font-bold text-[#1D1D1D] mb-4 uppercase">
                  Facility Management
                </h4>
                <p className="text-[#434343] text-sm leading-relaxed font-sans">
                  Seamless upkeep of your community, so your home and surrounding environment always feels brand new.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center text-[#00CC61] font-semibold text-sm">
                Lifetime Upkeep &rarr;
              </div>
            </div>
          </div>

          <div className="mt-16 bg-[#1D1D1D] text-white p-8 md:p-12 rounded-[20px] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-[700px] text-center md:text-left">
              <h4 className="text-xl font-bold uppercase text-[#00CC61] mb-2">Our Core Promise</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base m-0 font-sans">
                As we grow across Bangalore, our commitment remains unchanged: to build with integrity, design with purpose, and deliver with pride. Every project we undertake is a step toward a smarter, more liveable city.
              </p>
            </div>
            <div className="flex-shrink-0 text-center md:text-right">
              <p className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-tight m-0">
                We don't just build apartments. <br />
                <span className="text-[#00CC61]">We build the life you've imagined.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Message from the Managing Directors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1416px]">
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <h2 className="text-[#C6A15B] text-lg font-semibold uppercase tracking-wider mb-2">
              Our Leadership
            </h2>
            <h3 className="text-3xl md:text-[40px] font-bold text-[#1D1D1D] uppercase leading-tight">
              Message from the Managing Directors
            </h3>
            <div className="h-[2px] w-24 bg-[#00CC61] mx-auto mt-6" />
          </div>

          {/* Grid Layout for MDs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {directors.map((dir, idx) => (
              <div key={idx} className="bg-zinc-50 border border-gray-150 rounded-[25px] overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-all duration-300">
                <div className="relative h-[280px] w-full bg-zinc-900">
                  <Image
                    src={dir.image}
                    alt={dir.name}
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white text-lg font-bold uppercase">{dir.name}</h4>
                    <p className="text-[#00CC61] text-xs font-semibold uppercase tracking-wider mt-0.5">{dir.role}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <p className="text-gray-600 text-sm leading-relaxed italic m-0 font-sans">
                    "{dir.quote}"
                  </p>
                  <div className="h-[2px] w-12 bg-[#00CC61] mt-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Core Values */}
      <section className="py-16 md:py-24 bg-zinc-50 border-t border-gray-200/50">
        <div className="container mx-auto px-4 max-w-[1416px]">
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <h2 className="text-[#C6A15B] text-lg font-semibold uppercase tracking-wider mb-2">
              Driven by Values
            </h2>
            <h3 className="text-3xl md:text-[40px] font-bold text-[#1D1D1D] uppercase leading-tight">
              Our Core Values
            </h3>
            <div className="h-[2px] w-24 bg-[#00CC61] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-150 hover:border-[#00CC61]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <span className="w-12 h-12 bg-zinc-50 text-[#00CC61] rounded-xl flex items-center justify-center mb-5">
                  {val.icon}
                </span>
                <h4 className="text-xl font-bold text-[#1D1D1D] mb-3 uppercase font-sans tracking-wide">
                  {val.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed m-0 font-sans">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
