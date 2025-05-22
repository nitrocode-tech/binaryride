import { Props } from "@/lib/interfaces";
import React from "react";

const dummyData: Props[] = [
  {
    title: "Save more good plan",
    description: `Choose a plan that fits your business needs 
and budget. No hidden fees, no surprises—
just straightforward pricing for powerful
financial management.`,
  },
  {
    planType: "Starter plan",
    title: "$99",
    description: `Starter Plan gives you the essential
tools to manage your finances with
ease`,
    idealFor: "Perfect for small businesses or startup",
  },
  {
    planType: "Basic plan",
    title: "$199",
    description: `The Basic Plan expands on our Starter
package with additional features and
integrations.`,
    idealFor: "Designed for growing businesses",
  },
];

const Pricing = () => {
  return (
    <div className="bg-black border-2 border-t-white">
      <div className=" w-[60%] mx-auto py-16 flex flex-col gap-22">
        <h1 className="text-5xl text-white text-center">
          Simple,tansparent pricing
        </h1>
      </div>
    </div>
  );
};

export default Pricing;
