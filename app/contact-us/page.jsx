"use client";

import Link from "next/link";

// Custom inline SVG icons for contact cards
const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00CC61]">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function ContactUsPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will contact you shortly.");
  };

  return (
    <main className="flex-1 w-full bg-zinc-50 font-sans ">

      {/* Hero Header Banner */}
      <section
        className="relative bg-cover bg-white bg-center bg-no-repeat py-20 text-white text-center flex flex-col items-center justify-center md:min-h-[600px] min-h-[300px]"
        style={{ backgroundImage: "url('/cta-bg-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#1D1D1D]/85 z-0" />

        <div className="relative z-10 container mx-auto px-4 max-w-[1416px]">
          <p className="text-sm font-semibold text-[#00CC61] uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-bold uppercase leading-tight mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-semibold max-w-[800px] mx-auto leading-relaxed">
            Let's Build Your Dream Home
          </p>
          <div className="h-[2px] w-24 bg-[#00CC61] mx-auto mt-6" />
        </div>
      </section>

      {/* Main Details and Form Split Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1416px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Side: Contact Information Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="text-[#C6A15B] text-lg font-semibold uppercase tracking-wider mb-2 text-center lg:text-left">
                Contact Details
              </h2>
              <h3 className="text-3xl md:text-[38px] font-bold text-[#1D1D1D] leading-tight mb-6 uppercase text-center lg:text-left">
                Reach Out to Us
              </h3>

              {/* Address Card */}
              <div className="bg-zinc-50 border border-gray-100 rounded-[20px] p-6 md:p-8 flex gap-5 hover:shadow-md transition-shadow">
                <span className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-none">
                  <MapPinIcon />
                </span>
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-[#1D1D1D] uppercase mb-2">Office Address</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed m-0 font-sans">
                    Sky Ora Builders Pvt. Ltd. <br />
                    3rd Floor, Site No.31, Flat No.301, <br />
                    Vinayaka Layout, Opp Blinkit Gowdown, <br />
                    Doddathogur, Bengaluru, <br />
                    Karnataka - 560100
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <a
                href="tel:+918095132132"
                className="bg-zinc-50 border border-gray-100 rounded-[20px] p-6 md:p-8 flex gap-5 hover:shadow-md transition-shadow hover:border-[#00CC61]/35 group"
              >
                <span className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-none">
                  <PhoneIcon />
                </span>
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-[#1D1D1D] uppercase mb-2 group-hover:text-[#00CC61] transition-colors">Call Us</h4>
                  <p className="text-gray-600 text-sm md:text-base font-semibold leading-relaxed m-0 group-hover:text-gray-800">
                    +91 80951 32132
                  </p>
                  <span className="text-xs text-[#00CC61] font-semibold uppercase mt-2">&rarr; Call now for inquiry</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:hello@skyorabuilders.com"
                className="bg-zinc-50 border border-gray-100 rounded-[20px] p-6 md:p-8 flex gap-5 hover:shadow-md transition-shadow hover:border-[#00CC61]/35 group"
              >
                <span className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-none">
                  <EnvelopeIcon />
                </span>
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-[#1D1D1D] uppercase mb-2 group-hover:text-[#00CC61] transition-colors">Email Us</h4>
                  <p className="text-gray-600 text-sm md:text-base font-semibold leading-relaxed m-0 group-hover:text-gray-800 break-all">
                    hello@skyorabuilders.com
                  </p>
                  <span className="text-xs text-[#00CC61] font-semibold uppercase mt-2">&rarr; Shoot us an email</span>
                </div>
              </a>

            </div>

            {/* Right Side: Contact Form Card */}
            <div className="lg:col-span-7 h-full">
              <div className="bg-zinc-50 border border-gray-100 rounded-[20px] p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.02)] h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-[#1D1D1D] mb-2 uppercase">Get In Touch</h4>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                    Fill out the form below, and our dedicated team will get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-grow justify-between">

                  {/* Name field */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-bold text-[#1D1D1D] uppercase mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Enter your full name"
                      className="h-[50px] w-full border border-gray-250 rounded-[10px] px-4 bg-white text-sm text-[#1D1D1D] focus:outline-none focus:border-[#00CC61] transition-colors font-sans"
                    />
                  </div>

                  {/* Phone No field */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-xs font-bold text-[#1D1D1D] uppercase mb-2">
                      Phone No *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="Enter your phone number"
                      className="h-[50px] w-full border border-gray-250 rounded-[10px] px-4 bg-white text-sm text-[#1D1D1D] focus:outline-none focus:border-[#00CC61] transition-colors font-sans"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-bold text-[#1D1D1D] uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Enter your email address"
                      className="h-[50px] w-full border border-gray-250 rounded-[10px] px-4 bg-white text-sm text-[#1D1D1D] focus:outline-none focus:border-[#00CC61] transition-colors font-sans"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-xs font-bold text-[#1D1D1D] uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your query..."
                      className="w-full border border-gray-250 rounded-[10px] p-4 bg-white text-sm text-[#1D1D1D] focus:outline-none focus:border-[#00CC61] transition-colors font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group/btn relative overflow-hidden h-[50px] w-full rounded-[10px] bg-[#1D1D1D] text-white border border-[#1D1D1D] font-semibold text-sm transition-colors duration-500 hover:text-[#1D1D1D] inline-flex items-center justify-center gap-2 cursor-pointer select-none"
                  >
                    <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-white transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] group-hover/btn:top-[-45%] z-0" />
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Submit</span>
                    </span>
                  </button>

                  {/* DND Disclaimer */}
                  <p className="text-[11px] text-gray-400 font-sans leading-relaxed m-0 text-center">
                    In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it.
                  </p>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="w-full h-[400px] md:h-[500px] bg-gray-100 relative overflow-hidden border-t border-gray-150">
        <iframe
          src="https://maps.google.com/maps?q=Doddathogur,%20Electronic%20City,%20Bengaluru,%20Karnataka%20560100&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map showing Doddathogur Office"
          className="w-full h-full grayscale"
        ></iframe>
      </section>

    </main>
  );
}
