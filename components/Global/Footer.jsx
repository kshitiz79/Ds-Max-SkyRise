"use client";

import Image from "next/image";
import Link from "next/link";

// SVG Icons
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
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

const EnvelopeIcon = () => (
  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.4168 1.6642C15.3772 1.55157 15.2837 1.46657 15.1668 1.43753C15.0407 1.40707 12.0473 0.68457 8.50065 0.68457C5.01778 0.68457 1.96415 1.40636 1.83594 1.43753C1.71836 1.46586 1.62344 1.55228 1.58378 1.66632C1.54836 1.76974 0.708984 4.2404 0.708984 7.50015C0.708984 10.7599 1.54836 13.2299 1.58378 13.334C1.62344 13.4487 1.71907 13.5352 1.83736 13.5635C1.86923 13.5713 5.08082 14.3157 8.49994 14.3157C12.0388 14.3157 15.0393 13.5932 15.1654 13.5628C15.2822 13.5337 15.3772 13.4487 15.4161 13.3347C15.4515 13.232 16.2909 10.7804 16.2909 7.50015C16.2909 4.19224 15.4508 1.7662 15.4154 1.6642H15.4168ZM8.50065 1.3929C11.4601 1.3929 14.0922 1.92415 14.8069 2.08282C14.8735 2.29886 14.989 2.69836 15.1101 3.24095C14.8374 3.53845 13.6821 4.76528 11.9779 6.08349C10.5945 7.15307 9.01348 8.07674 8.50065 8.36928C7.98711 8.07745 6.40611 7.15378 5.02344 6.08349C3.32628 4.77095 2.17311 3.54907 1.89403 3.24449C2.01444 2.70261 2.12848 2.30099 2.19436 2.08282C2.92111 1.92557 5.59153 1.3929 8.49994 1.3929H8.50065ZM14.8062 12.9182C14.088 13.0762 11.453 13.6074 8.50065 13.6074C5.64182 13.6074 2.93032 13.0733 2.19436 12.9161C2.00311 12.2885 1.41732 10.1437 1.41732 7.50015C1.41732 6.20745 1.55828 5.03232 1.72403 4.0959C2.25244 4.6399 3.24836 5.60607 4.58994 6.64307C6.30482 7.96978 8.24848 9.04007 8.33065 9.08469C8.38378 9.11374 8.44186 9.12861 8.50065 9.12861C8.55944 9.12861 8.61823 9.11374 8.67065 9.08469C8.75282 9.04007 10.6958 7.96978 12.4107 6.64307C13.7551 5.60324 14.7524 4.63565 15.2801 4.09236C15.4444 5.0224 15.5833 6.19399 15.5833 7.50015C15.5833 10.1564 14.9961 12.2949 14.8055 12.9182H14.8062Z"
      fill="currentColor"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.6458 7.79167C16.4503 7.79167 16.2917 7.633 16.2917 7.4375C16.2917 3.72725 13.2727 0.708333 9.5625 0.708333C9.367 0.708333 9.20833 0.549667 9.20833 0.354167C9.20833 0.158667 9.367 0 9.5625 0C13.6637 0 17 3.33625 17 7.4375C17 7.633 16.8413 7.79167 16.6458 7.79167ZM14.1667 7.4375C14.1667 4.89883 12.1012 2.83333 9.5625 2.83333C9.367 2.83333 9.20833 2.992 9.20833 3.1875C9.20833 3.383 9.367 3.54167 9.5625 3.54167C11.7109 3.54167 13.4583 5.28912 13.4583 7.4375C13.4583 7.633 13.617 7.79167 13.8125 7.79167C14.008 7.79167 14.1667 7.633 14.1667 7.4375ZM15.7491 15.7753L16.4418 14.9784C16.8017 14.6186 17 14.1397 17 13.6312C17 13.1226 16.8017 12.643 16.4071 12.2535L14.6745 10.9267C13.9322 10.1844 12.7245 10.1837 11.9807 10.9246L10.8956 11.9829C8.28892 10.9211 6.16533 8.79537 5.02067 6.10158L6.07467 5.02138C6.81771 4.27833 6.81771 3.06921 6.10512 2.36087L4.7175 0.559583C3.99712 -0.160792 2.72496 -0.143792 2.04 0.543292L1.20842 1.26863C0.428542 2.04425 0 3.09754 0 4.233C0 9.72187 7.27812 17 12.767 17C13.9025 17 14.955 16.5715 15.7491 15.7753ZM4.18554 1.02425L5.57317 2.82554C6.03996 3.29233 6.03996 4.05237 5.57033 4.52271L4.35058 5.77362C4.25283 5.87421 4.22308 6.02296 4.2755 6.15329C5.50021 9.20267 7.89721 11.599 10.8531 12.7266C10.982 12.7762 11.1279 12.7457 11.2264 12.6501L12.4773 11.4304C12.4773 11.4304 12.4794 11.4282 12.4801 11.4268C12.9327 10.9735 13.6871 10.9445 14.2085 11.4573L15.941 12.784C16.4078 13.2508 16.4078 14.0101 15.9247 14.4953L15.2313 15.2922C14.5881 15.9368 13.7126 16.2917 12.767 16.2917C7.69533 16.2917 0.708333 9.30467 0.708333 4.233C0.708333 3.28737 1.06321 2.41188 1.69079 1.785L2.52308 1.05896C2.76108 0.820958 3.07487 0.704792 3.38371 0.704792C3.6805 0.704792 3.97233 0.812458 4.18625 1.02496L4.18554 1.02425Z"
      fill="currentColor"
    />
  </svg>
);

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscribe logic
  };

  const discoverLinks = [
    { label: "Whitefield", href: "/property-listing-buy" },
    { label: "Sarjapur Road", href: "/property-listing-buy" },
    { label: "Electronic City", href: "/property-listing-buy" },
    { label: "Hebbal", href: "/property-listing-buy" },
    { label: "Yelahanka", href: "/property-listing-buy" },
    { label: "Kanakapura Road", href: "/property-listing-buy" },
  ];

  const quickLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Our Projects", href: "/property-listing-buy" },
    { label: "Amenities", href: "/#why-choose-us" },
    { label: "Channel Partner", href: "/contact-us?subject=channel-partner" },
    { label: "Refer & Earn", href: "/contact-us?subject=refer" },
    { label: "Insights", href: "/blog" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "X (Twitter)", href: "https://x.com" },
  ];

  return (
    <footer
      className="bg-[#1D1D1D] bg-cover bg-center bg-no-repeat pt-20 lg:pt-32 pb-[50px] relative overflow-hidden"
      style={{ backgroundImage: "url('/footer-bg-1.svg')" }}
    >
      {/* Dark tint overlay for standard visual design accessibility */}
      <div className="absolute inset-0 bg-[#1D1D1D]/90 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1416px] relative z-10">

        {/* Main Footer widgets grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 lg:gap-y-0 text-white text-center md:text-left">

          {/* Column 1: Logo and Newsletter */}
          <div className="lg:col-span-5 pr-0 md:pr-10 lg:pr-20">
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="relative w-[158px] h-10 mb-10 md:mb-12 block">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </Link>

              <div className="w-full">
                <h3 className="text-xl font-semibold text-white mb-6 lg:mb-5 font-sans text-center md:text-left">
                  Stay Updated on New Launches:
                </h3>
                <form onSubmit={handleSubmit} className="relative w-full max-w-[420px] mx-auto md:mx-0">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    required
                    autoComplete="email"
                    className="w-full bg-transparent border border-white/20 rounded-[20px] py-3.5 pl-6 pr-14 text-white text-sm outline-none focus:border-white transition-all font-sans"
                  />
                  <button
                    type="submit"
                    aria-label="Submit newsletter"
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-white hover:text-[#00CC61] transition-colors cursor-pointer"
                  >
                    <SendIcon />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Column 2: Discover Locations */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-[17px] font-sans text-center md:text-left">
              Locations
            </h3>
            <ul className="flex flex-col items-center md:items-start space-y-3.5 list-none p-0 m-0 text-base text-[#E2E2E2] font-sans">
              {discoverLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#00CC61] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-[17px] font-sans text-center md:text-left">
              Quick Links
            </h3>
            <ul className="flex flex-col items-center md:items-start space-y-3.5 list-none p-0 m-0 text-base text-[#E2E2E2] font-sans">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#00CC61] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold text-white mb-[17px] font-sans text-center md:text-left">
              Contact Us
            </h3>
            <ul className="flex flex-col space-y-5 list-none p-0 m-0 text-base text-[#E2E2E2] font-sans">

              {/* Address */}
              <li className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white flex-none mt-1 md:mt-0">
                  <LocationPinIcon />
                </span>
                <p className="m-0 leading-relaxed text-sm pt-0.5 text-center md:text-left">
                  Sky Ora Builders Pvt. Ltd., <br />
                  3rd Floor, Site No.31, Flat No.301, <br />
                  Vinayaka Layout, Opp Blinkit Gowdown, <br />
                  Doddathogur, Bengaluru, <br />
                  Karnataka - 560100
                </p>
              </li>

              {/* Email */}
              <li className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-4">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white flex-none">
                  <EnvelopeIcon />
                </span>
                <a href="mailto:hello@skyorabuilders.com" className="text-sm hover:text-[#00CC61] text-center md:text-left transition-colors">
                  hello@skyorabuilders.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-4">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white flex-none">
                  <PhoneIcon />
                </span>
                <a href="tel:+918095132132" className="text-sm hover:text-[#00CC61] text-center md:text-left transition-colors">
                  +91 80951 32132
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Footer bottom separator */}
        <div className="border-t border-white/10 mt-20 lg:mt-[100px] mb-8" />

        {/* Bottom row: Copyright, social & currency */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-5 md:gap-y-0 text-sm text-[#E2E2E2] font-sans">

          {/* Copyright text */}
          <div className="order-2 md:order-1 text-center md:text-left text-xs max-w-[700px] text-gray-400 leading-relaxed">
            All images, floor plans, and renderings shown on this website are for representational purposes only. Pricing is indicative and subject to change. All projects are RERA registered. Please contact our sales team for the most current information. Skyora Builders Pvt. Ltd. &copy; 2025. All rights reserved.
          </div>

          {/* Socials & currency options */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 order-1 md:order-2">
            <span className="text-white font-medium">INR</span>

            {/* Social icons row */}
            <div className="flex items-center gap-5">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00CC61] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
