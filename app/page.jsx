import Hero from "@/components/Home/Hero";
import FeaturedProperty from "@/components/Home/FeaturedProperty";
// import PropertyLocation from "@/components/Home/PropertyLocation";
import AboutUs from "@/components/Home/AboutUs";
import StartCounter from "@/components/Home/StartCounter";
import RentalProperty from "@/components/Home/RentalProperty";
// import WorkingProcess from "@/components/Home/WorkingProcess";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import PartnerWithUs from "@/components/Home/PartnerWithUs";
import ReferAndEarn from "@/components/Home/ReferAndEarn";
import BlogSection from "@/components/Home/BlogSection";
import Testimonial from "@/components/Home/Testimonial";
import CTA from "@/components/Home/CTA";
import ContactUs from "../components/Home/ContactUs";

export default function Home() {
  return (
    <main className="flex-1 w-full bg-zinc-50 dark:bg-black">
      <Hero />
      <FeaturedProperty />
      {/* <PropertyLocation /> */}
      <AboutUs />
      <StartCounter />
      <WhyChooseUs />
      <RentalProperty />
      <PartnerWithUs />
      {/* <WorkingProcess /> */}
      <Testimonial />
      <ReferAndEarn />
      <BlogSection />
      <CTA />
      <ContactUs />
    </main>
  );
}



