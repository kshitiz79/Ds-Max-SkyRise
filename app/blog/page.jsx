"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export default function BlogArchivePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const blogs = [
    {
      id: 1,
      title: "Top 5 Emerging Localities in Bangalore for 2025 Homebuyers",
      category: "localities",
      categoryLabel: "Localities",
      image: "/property-img-1.jpg",
      date: "June 28, 2026",
      readTime: "5 Min Read",
      excerpt: "Bangalore's real estate market is expanding rapidly. We break down the top 5 emerging corridors showing premium growth, upcoming metro lines, and smart residential value.",
    },
    {
      id: 2,
      title: "RERA Explained: What Every Homebuyer in Bangalore Must Know",
      category: "compliance",
      categoryLabel: "Compliance",
      image: "/property-img-2.jpg",
      date: "June 25, 2026",
      readTime: "7 Min Read",
      excerpt: "Buying a home is a lifetime investment. Learn how to verify RERA registration numbers, understand escrow compliance, and secure your rights under Karnataka RERA rules.",
    },
    {
      id: 3,
      title: "Renting vs Buying in Bangalore — A Practical Breakdown",
      category: "financial",
      categoryLabel: "Financial Advice",
      image: "/property-img-3.jpg",
      date: "June 20, 2026",
      readTime: "6 Min Read",
      excerpt: "With soaring rents in IT corridors, does buying a home make more financial sense? Here is a practical breakdown comparing EMIs, appreciation rates, and long-term security.",
    },
    {
      id: 4,
      title: "How to Choose the Right Floor in a High-Rise Apartment",
      category: "guide",
      categoryLabel: "Home Guide",
      image: "/property-img-4.jpg",
      date: "June 15, 2026",
      readTime: "4 Min Read",
      excerpt: "Lower floor convenience vs higher floor views and ventilation. We analyze which floor height suits your family, resale metrics, and engineering specifications.",
    }
  ];

  const categories = [
    { value: "all", label: "All Topics" },
    { value: "localities", label: "Localities" },
    { value: "compliance", label: "Compliance" },
    { value: "financial", label: "Financial Advice" },
    { value: "guide", label: "Home Guide" }
  ];

  const filteredBlogs = blogs.filter((b) => {
    const matchesCategory = activeCategory === "all" || b.category === activeCategory;
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex-1 w-full bg-zinc-50 font-sans">
      
      {/* Banner */}
      <section
        className="relative bg-cover bg-white bg-center bg-no-repeat py-20 text-white text-center flex flex-col items-center justify-center md:min-h-[500px] min-h-[300px]"
        style={{ backgroundImage: "url('/cta-bg-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#1D1D1D]/85 z-0" />
        <div className="relative z-10 container mx-auto px-4 max-w-[1416px]">
          <p className="text-sm font-semibold text-[#00CC61] uppercase tracking-widest mb-3">
            Insights
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-bold uppercase leading-tight mb-4 tracking-tight">
            Skyora Real Estate Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-semibold max-w-[800px] mx-auto leading-relaxed">
            Navigate Bangalore's Real Estate — Smartly. Tips, trends, and guides for buyers, investors, and homeowners.
          </p>
          <div className="h-[2px] w-24 bg-[#00CC61] mx-auto mt-6" />
        </div>
      </section>

      {/* Blog listing grid and filters */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1416px]">
          
          {/* Filters Bar */}
          <div className="bg-zinc-50 border border-gray-150 rounded-[25px] p-6 md:p-8 mb-12 shadow-sm flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 text-xs font-bold rounded-[12px] border transition-all cursor-pointer ${
                    activeCategory === cat.value
                      ? "bg-[#1D1D1D] border-[#1D1D1D] text-white shadow-sm"
                      : "bg-white border-gray-200 text-gray-600 hover:border-gray-450 hover:bg-zinc-50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:max-w-[280px]">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-250 rounded-[12px] pl-10 pr-4 py-2.5 text-xs outline-none focus:border-[#00CC61] text-[#1D1D1D] font-medium"
              />
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </span>
            </div>
          </div>

          {/* Grid Layout */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-[25px] border border-gray-150 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row group"
                >
                  {/* Image Column */}
                  <div className="relative w-full sm:w-[220px] h-[220px] sm:h-auto bg-zinc-150 flex-none overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                      sizes="(max-width: 768px) 100vw, 250px"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-[#1D1D1D]/90 backdrop-blur-sm rounded-[8px] text-[10px] font-bold text-white uppercase tracking-wider">
                      {blog.categoryLabel}
                    </span>
                  </div>

                  {/* Copy Column */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-2 font-sans">
                        <span>{blog.date}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span>{blog.readTime}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#1D1D1D] mb-3 uppercase leading-snug group-hover:text-[#00CC61] transition-colors line-clamp-2">
                        <Link href={`/blog-details?id=${blog.id}`}>
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>

                    <Link
                      href={`/blog-details?id=${blog.id}`}
                      className="text-[#00CC61] text-xs font-bold uppercase tracking-wider flex items-center gap-1 group/link mt-auto"
                    >
                      <span>Read Full Article</span>
                      <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-zinc-50 border border-dashed border-gray-250 rounded-[20px] max-w-[600px] mx-auto">
              <p className="text-gray-500 font-medium font-sans mb-0">No articles found matching your query.</p>
              <button
                onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                className="text-[#00CC61] hover:underline font-bold mt-2 text-sm uppercase tracking-wide cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}
