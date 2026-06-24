import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import GenderBanners from "@/components/GenderBanners";
import Collections from "@/components/Collections";
import InfoBar from "@/components/InfoBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturesBar />
      <Categories />
      <FeaturedProducts />
      <GenderBanners />
      <Collections />
      <InfoBar />
      <Footer />
    </main>
  );
}
