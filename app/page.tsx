import BussinessData from "@/components/bussinessdata";
import Navbar from "@/components/common/navbar";
import Finance from "@/components/finance";
import Hero from "@/components/home/hero";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BussinessData />
      <Finance />
      <Testimonials />
    </div>
  );
}
