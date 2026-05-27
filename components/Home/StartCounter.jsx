"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// CountUp component to animate metric numbers natively
const CountUp = ({ end, decimals = 0, duration = 2000, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = progress * end;
      setCount(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, trigger]);

  // Format to standard localized decimal count
  return <span>{count.toFixed(decimals)}</span>;
};

export default function StartCounter() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target); // Animate only once
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const counters = [
    {
      id: 1,
      icon: "/icons/apartment.svg",
      prefix: "",
      target: 12,
      suffix: "+",
      decimals: 0,
      description: "Projects delivered across prime Bangalore locations — on time, every time.",
    },
    {
      id: 2,
      icon: "/icons/mortgage.svg",
      prefix: "",
      target: 2,
      suffix: "K+",
      decimals: 0,
      description: "Happy families who call a Skyora home their own.",
    },
    {
      id: 3,
      icon: "/icons/review.svg",
      prefix: "",
      target: 8,
      suffix: "+",
      decimals: 0,
      description: "Industry awards recognising our commitment to quality and design.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1D1D1D] bg-cover bg-center bg-no-repeat py-[140px] lg:py-20 overflow-hidden"
      style={{ backgroundImage: "url('/counter-bg-1.jpg')" }}
    >
      {/* Self-contained slow rotation/float animation for the decorative star shapes */}
      <style jsx global>{`
        @keyframes floatStar {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.2) rotate(180deg);
          }
        }
        .animate-float-star {
          animation: floatStar 20s linear infinite;
        }
      `}</style>

      {/* Dark overlay to make numbers look extremely premium and legible */}
      <div className="absolute inset-0 bg-[#1D1D1D]/75 z-0" />

      <div className="container mx-auto px-4 max-w-[1416px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 text-center">
          {counters.map((item) => (
            <div key={item.id} className="flex flex-col items-center max-w-[264px] mx-auto">
              {/* Icon Container */}
              <div className="relative w-[50px] h-[50px] mb-7 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt="Counter Icon"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Animated Numbers */}
              <div className="text-[61px] leading-tight font-bold text-white mb-[15px] font-sans">
                {item.prefix}
                <CountUp
                  end={item.target}
                  decimals={item.decimals}
                  trigger={isIntersecting}
                />
                {item.suffix}
              </div>

              {/* Description */}
              <p className="text-base text-[#A3A3A3] font-normal leading-relaxed m-0 font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Star Shape 1 - Floating top-left */}
      <div className="absolute top-[10%] left-[2%] w-[33px] h-[33px] pointer-events-none z-10 hidden sm:block animate-float-star">
        <Image
          src="/star.svg"
          alt="Star Shape"
          fill
          className="object-contain"
        />
      </div>

      {/* Star Shape 2 - Floating bottom-right */}
      <div className="absolute bottom-[10%] right-[2%] w-[33px] h-[33px] pointer-events-none z-10 hidden sm:block animate-float-star">
        <Image
          src="/star.svg"
          alt="Star Shape"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
