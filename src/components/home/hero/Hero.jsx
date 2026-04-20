import { FloatCard } from "./FloatCard";
import { PortCard } from "./PortCard";
import { ActionButtons } from "./ActionButtons";
import { CallToAction } from "./CallToAction";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 px-6">
      <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <CallToAction />
          <ActionButtons />
        </div>
        <div className="lg:col-span-5 relative">
          <PortCard />
          <FloatCard />
        </div>
      </div>
    </section>
  );
};
