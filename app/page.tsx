import BussinessData from "@/components/bussinessdata";
import Navbar from "@/components/common/navbar";
import Finance from "@/components/finance";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BussinessData />
      <Finance />
    </div>
  );
}
