import HeroSection from "@/components/HeroSection/HeroSection";
import { redirect } from "next/navigation";

export default function Home() {
  // redirect("/homepage");
  return (
    <>
      <HeroSection />
    </>
  );
}
