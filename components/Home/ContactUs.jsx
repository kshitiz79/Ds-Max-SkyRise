"use client";

import Image from 'next/image';
import React from 'react';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your inquiry has been submitted. Our team will get back to you shortly.");
    };

    return (
        <section className="bg-gray-100 py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1416px]">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className="text-[#C6A15B] text-lg font-semibold uppercase tracking-wider mb-2 text-center lg:text-left">
                            Contact Us
                        </h2>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black uppercase leading-tight mb-6 text-center lg:text-left">
                            Let's Build Your Dream Home
                        </h1>

                        <p className="text-gray-600 mb-8 text-center lg:text-left text-base md:text-lg leading-relaxed font-sans max-w-[550px]">
                            Reach out to Sky Ora Builders for project inquiries, site visits, partnerships, or any assistance. Connect with us directly at <a href="tel:+918095132132" className="font-bold text-[#00CC61] hover:underline">+91 80951 32132</a>.
                        </p>

                        <div className="relative w-full h-[320px] rounded-[20px] overflow-hidden shadow-md">
                            <Image
                                src="/about-img-2.jpg"
                                alt="Sky Ora Building"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="bg-white rounded-[25px] p-8 md:p-10 shadow-lg flex flex-col gap-6 border border-gray-100">
                            <div>
                                <h3 className="text-2xl font-bold text-black uppercase mb-2 font-sans">
                                    Get In Touch
                                </h3>
                                <p className="text-gray-500 text-sm mb-6">
                                    Please enter your requirements and contact information below.
                                </p>
                            </div>

                            {/* Name * */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="home-name"
                                    className="block mb-2 text-xs font-bold uppercase tracking-wider text-gray-700"
                                >
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="home-name"
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full border border-gray-250 rounded-[10px] px-4 py-3 text-sm outline-none focus:border-[#00CC61] font-sans"
                                />
                            </div>

                            {/* Phone No * */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="home-phone"
                                    className="block mb-2 text-xs font-bold uppercase tracking-wider text-gray-700"
                                >
                                    Phone No *
                                </label>
                                <input
                                    type="tel"
                                    id="home-phone"
                                    required
                                    placeholder="Enter your phone number"
                                    className="w-full border border-gray-250 rounded-[10px] px-4 py-3 text-sm outline-none focus:border-[#00CC61] font-sans"
                                />
                            </div>

                            {/* Email * */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="home-email"
                                    className="block mb-2 text-xs font-bold uppercase tracking-wider text-gray-700"
                                >
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="home-email"
                                    required
                                    placeholder="Enter your email address"
                                    className="w-full border border-gray-250 rounded-[10px] px-4 py-3 text-sm outline-none focus:border-[#00CC61] font-sans"
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="home-message"
                                    className="block mb-2 text-xs font-bold uppercase tracking-wider text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="home-message"
                                    rows={4}
                                    placeholder="Tell us about your requirements (BHK, location preference, etc.)"
                                    className="w-full border border-gray-250 rounded-[10px] p-4 text-sm outline-none focus:border-[#00CC61] font-sans"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="group/btn relative overflow-hidden h-[50px] w-full rounded-[10px] bg-[#1D1D1D] text-white border border-[#1D1D1D] font-semibold text-sm transition-colors duration-500 hover:text-[#1D1D1D] inline-flex items-center justify-center gap-2 cursor-pointer select-none"
                            >
                                <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-white transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] group-hover/btn:top-[-45%] z-0" />
                                <span className="relative z-10">Submit</span>
                            </button>

                            {/* DND Disclaimer Text */}
                            <p className="text-[11px] text-gray-400 font-sans leading-relaxed m-0 text-center">
                                In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it.
                            </p>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;