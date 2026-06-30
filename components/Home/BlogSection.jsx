"use client";

import Link from "next/link";
import Image from "next/image";

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Emerging Localities in Bangalore for 2025 Homebuyers",
      category: "Localities",
      image: "/property-img-1.jpg",
      date: "June 28, 2026",
      readTime: "5 Min Read"
    },
    {
      id: 2,
      title: "RERA Explained: What Every Homebuyer in Bangalore Must Know",
      category: "Compliance",
      image: "/property-img-2.jpg",
      date: "June 25, 2026",
      readTime: "7 Min Read"
    },
    {
      id: 3,
      title: "Renting vs Buying in Bangalore — A Practical Breakdown",
      category: "Financial Advice",
      image: "/property-img-3.jpg",
      date: "June 20, 2026",
      readTime: "6 Min Read"
    },
    {
      id: 4,
      title: "How to Choose the Right Floor in a High-Rise Apartment",
      category: "Home Guide",
      image: "/property-img-4.jpg",
      date: "June 15, 2026",
      readTime: "4 Min Read"
    }
  ];

  return (
    <section id="insights" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1416px]">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left gap-y-6 mb-16">
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm font-semibold text-[#434343] uppercase tracking-widest mb-2 font-sans">
              Insights
            </p>
            <h2 className="text-3xl md:text-[49px] font-bold text-[#1D1D1D] uppercase leading-tight font-sans">
              Navigate Bangalore's <br className="hidden md:block" /> Real Estate — Smartly
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mt-3 mb-0 max-w-[600px] font-sans">
              Tips, trends, and guides for first-time homebuyers, investors, and everyone in between.
            </p>
          </div>
          <div>
            <Link
              href="/blog"
              className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[20px] border border-[#1D1D1D] text-[#1D1D1D] hover:text-[#1D1D1D] font-medium text-sm capitalize transition-colors duration-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Read All Articles</span>
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
              <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-[#1D1D1D] opacity-5 group-hover/btn:top-[-45%] transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] z-0" />
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-[20px] border border-gray-100 p-2.5 hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Thumbnail */}
              <Link
                href={`/blog-details?id=${blog.id}`}
                className="block relative h-[200px] w-full overflow-hidden rounded-[15px] mb-4 bg-gray-50"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <span className="absolute left-4 top-4 px-3 py-1.5 bg-[#1D1D1D]/90 backdrop-blur-sm rounded-[8px] text-[11px] font-bold text-white uppercase tracking-wider">
                  {blog.category}
                </span>
              </Link>

              {/* Title & Metadata */}
              <div className="px-3 pb-3 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2 font-sans">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#1D1D1D] mb-4 leading-snug group-hover:text-[#00CC61] transition-colors font-sans line-clamp-2">
                    <Link href={`/blog-details?id=${blog.id}`}>
                      {blog.title}
                    </Link>
                  </h3>
                </div>

                <Link
                  href={`/blog-details?id=${blog.id}`}
                  className="text-[#00CC61] text-xs font-bold uppercase tracking-wider flex items-center gap-1 group/link"
                >
                  <span>Read Article</span>
                  <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
