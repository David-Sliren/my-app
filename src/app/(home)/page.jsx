import { Hero } from "@/components/home/hero/Hero";
import { Stats } from "@/components/home/stats/Stats";
import { ContributionTable } from "@/components/home/table/ContributionTable";
import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className={titleFont.className}>
      <Hero />
      <Stats />
      <ContributionTable />
    </div>
  );
}
