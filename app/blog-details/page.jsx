"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetailsPage() {
  const [blogId, setBlogId] = useState(1);

  const blogsData = {
    1: {
      title: "Top 5 Emerging Localities in Bangalore for 2025 Homebuyers",
      category: "Localities",
      image: "/property-img-1.jpg",
      date: "June 28, 2026",
      readTime: "5 Min Read",
      author: "Skyora Editorial Team",
      content: [
        "Bangalore’s rapid urbanization and the continuous expansion of its IT corridors have made it one of the most dynamic real estate markets in the country. As we look towards 2025 and beyond, identifying high-appreciating, well-connected localities is crucial for homebuyers and investors looking to secure long-term value.",
        "Here are the top 5 emerging localities in Bangalore that represent the future of residential living:",
        "1. Varthur / East Whitefield Corridor: As central Whitefield reaches commercial saturation, developers are expanding further east. Varthur offers premium lake-side views, close proximity to major tech parks, and rapidly improving road infrastructure.",
        "2. Sarjapur Extension / Gunjur: Highly favored by tech professionals working in Outer Ring Road and Electronic City, Gunjur and Sarjapur Extension offer excellent school networks, expansive land parcels, and massive villa/apartment communities.",
        "3. Hebbal Extension / Thanisandra Road: North Bangalore is experiencing massive appreciation due to its proximity to Kempegowda International Airport and the upcoming Aerospace and IT SEZs. Thanisandra Road is a prime target for high-rise apartment living.",
        "4. Kanakapura Road Extension: Excellent metro connectivity and lush green surroundings make Kanakapura Road the ultimate choice for families seeking tranquility without sacrificing city access.",
        "5. Electronic City Phase 2 Extension / Doddathogur: Affordable land pricing, immediate access to large IT campuses, and highly developed retail convenience makes Phase 2 extension the absolute best entry point for first-time homebuyers."
      ]
    },
    2: {
      title: "RERA Explained: What Every Homebuyer in Bangalore Must Know",
      category: "Compliance",
      image: "/property-img-2.jpg",
      date: "June 25, 2026",
      readTime: "7 Min Read",
      author: "Legal Compliance Desk",
      content: [
        "The Real Estate (Regulation and Development) Act (RERA) was introduced to safeguard the interests of homebuyers and bring transparency, accountability, and efficiency into the real estate sector. For anyone purchasing a home in Bangalore, navigating RERA compliance is the single most important step before signing an agreement.",
        "Key aspects of RERA that every homebuyer must understand:",
        "1. Check the Registration Number: Never purchase or book an apartment that does not have an active Karnataka RERA number. The developer must display this number on all advertisements, brochures, and websites.",
        "2. Verification on RERA Portal: Go to the official Karnataka RERA website and search for the project using the registration number. You can verify the construction status, approved floor layouts, land ownership records, and scheduled completion date.",
        "3. Escrow Account Rule: RERA mandates that developers deposit 70% of buyer collections into a dedicated escrow account. This money can only be withdrawn for construction and land costs, preventing funds from being diverted to other projects.",
        "4. Compensation for Delay: If the developer fails to deliver the project on the agreed timeline, the buyer is entitled to a full refund with interest or monthly interest compensation until the handover is complete."
      ]
    },
    3: {
      title: "Renting vs Buying in Bangalore — A Practical Breakdown",
      category: "Financial Advice",
      image: "/property-img-3.jpg",
      date: "June 20, 2026",
      readTime: "6 Min Read",
      author: "Financial Advisory Team",
      content: [
        "Bangalore's soaring rental costs, especially in tech-heavy areas like Sarjapur, Whitefield, and Hebbal, have forced many tenants to ask a fundamental question: Should I continue paying high rent, or should I invest in a home of my own?",
        "While renting offers short-term flexibility, buying a residential property provides long-term stability and wealth creation. Let's do a practical comparison:",
        "1. Monthly Outflow: Rents in premium Bangalore societies have seen a 30-40% increase over the last three years. While a home loan EMI might be higher than rent initially, rents continue to escalate annually while home loan EMIs remain stable and eventually disappear.",
        "2. Asset Appreciation: Historically, residential real estate in Bangalore appreciates at 6-10% annually. Over a 10-year period, rent is a pure expense (0% return), whereas homeownership builds substantial equity and capital appreciation.",
        "3. Tax Benefits: Under Section 80C and Section 24 of the Income Tax Act, homebuyers can claim substantial deductions on both principal and interest repayments of home loans, significantly reducing the net cost of acquisition."
      ]
    },
    4: {
      title: "How to Choose the Right Floor in a High-Rise Apartment",
      category: "Home Guide",
      image: "/property-img-4.jpg",
      date: "June 15, 2026",
      readTime: "4 Min Read",
      author: "Architectural Planning Desk",
      content: [
        "Modern high-rise residential projects in Bangalore offer stunning views and premium lifestyles. However, when choosing an apartment unit, picking the right floor height is a crucial decision that impacts daily comfort, safety, and future resale value.",
        "Consider the following trade-offs when selecting a floor:",
        "1. Light and Ventilation: Higher floors generally receive superior natural light, better wind speeds, and cross-ventilation. If you enjoy panoramic cityscapes and fresh air, higher floors are the obvious choice.",
        "2. Noise and Privacy: Lower floors are closer to common amenities, traffic movement, and play areas, which can lead to higher ambient noise levels. Higher floors offer more privacy and isolation from street-level sound.",
        "3. Safety and Evacuation: In case of emergencies, lower floors are significantly easier to evacuate. If you have elderly family members or young children, this factor should be heavily weighted in your decision.",
        "4. Resale Value and Preferences: In Bangalore, lower-floor units (ground to 4th floor) are often in high demand because they avoid lift dependency. However, high-rise luxury towers often command premium pricing for penthouses and top floors."
      ]
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");
      if (id && blogsData[id]) {
        setBlogId(Number(id));
      }
    }
  }, []);

  const blog = blogsData[blogId];

  return (
    <main className="flex-1 w-full bg-zinc-50 font-sans">
      
      {/* Blog Details Header */}
      <section className="bg-zinc-950 text-white py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-[#1D1D1D]/90 z-0 pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 max-w-[946px]">
          
          <Link href="/blog" className="text-[#00CC61] text-xs font-bold uppercase tracking-wider mb-6 inline-flex items-center gap-1 hover:underline">
            <span>&larr; Back to all articles</span>
          </Link>

          <span className="px-3 py-1.5 bg-[#00CC61]/20 text-[#00CC61] rounded-[8px] text-[10px] font-bold uppercase tracking-wider mb-4 inline-block">
            {blog.category}
          </span>
          
          <h1 className="text-2xl sm:text-[38px] md:text-[45px] font-bold uppercase leading-tight tracking-tight m-0 mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <span>By {blog.author}</span>
            <span className="w-1.5 h-1.5 bg-[#00CC61] rounded-full" />
            <span>Published: {blog.date}</span>
            <span className="w-1.5 h-1.5 bg-[#00CC61] rounded-full" />
            <span>{blog.readTime}</span>
          </div>

        </div>
      </section>

      {/* Article Content Split */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[946px]">
          
          {/* Main banner image */}
          <div className="relative h-[250px] sm:h-[450px] rounded-[25px] overflow-hidden mb-12 shadow-sm bg-zinc-100">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article text */}
          <article className="prose max-w-none text-[#434343] text-base md:text-lg leading-relaxed font-sans">
            {blog.content.map((p, idx) => (
              <p key={idx} className="mb-6">
                {p}
              </p>
            ))}
          </article>

          {/* Bottom CTA Block */}
          <div className="mt-16 bg-zinc-50 border border-gray-150 rounded-[20px] p-8 text-center flex flex-col items-center justify-center">
            <h4 className="text-xl font-bold text-[#1D1D1D] uppercase mb-2">Looking for a compliant, beautifully designed home?</h4>
            <p className="text-gray-500 text-sm mb-6 max-w-[600px]">
              Every Skyora project is fully RERA registered, BDA/BBMP approved, and built with certified construction methodologies. Let's find your dream home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/property-listing-buy"
                className="px-6 py-2.5 rounded-[12px] bg-[#1D1D1D] text-white border border-[#1D1D1D] font-bold text-xs uppercase tracking-wider transition-colors hover:bg-zinc-800"
              >
                Explore Projects
              </Link>
              <Link
                href="/contact-us"
                className="px-6 py-2.5 rounded-[12px] bg-white text-[#1D1D1D] border border-gray-250 font-bold text-xs uppercase tracking-wider transition-colors hover:bg-zinc-50"
              >
                Book Site Visit
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
