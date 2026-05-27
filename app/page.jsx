import Hero from "@/components/Home/Hero";
import FeaturedProperty from "@/components/Home/FeaturedProperty";
import PropertyLocation from "@/components/Home/PropertyLocation";
import AboutUs from "@/components/Home/AboutUs";
import StartCounter from "@/components/Home/StartCounter";
import RentalProperty from "@/components/Home/RentalProperty";
import WorkingProcess from "@/components/Home/WorkingProcess";
import Testimonial from "@/components/Home/Testimonial";
import CTA from "@/components/Home/CTA";

export default function Home() {
  return (
    <main className="flex-1 w-full bg-zinc-50 dark:bg-black">
      <Hero />
      <FeaturedProperty />
      <PropertyLocation />
      <AboutUs />
      <StartCounter />
      <RentalProperty />
      <WorkingProcess />
      <Testimonial />
      <CTA />
    </main>
  );
}



