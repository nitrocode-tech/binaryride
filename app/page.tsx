import BussinessData from "@/components/bussinessdata";
import Navbar from "@/components/common/navbar";
import Finance from "@/components/finance";
import Hero from "@/components/home/hero";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="bg-[#070E14]">
      <Navbar />
      <Hero />
      <BussinessData />
      <Finance />
      <Testimonials />
      <Pricing />
    </div>
  );
}
