import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Daily from "@/components/Daily";
import Gallery from "@/components/Gallery";
import Admission from "@/components/Admission";
import News from "@/components/News";
import Access from "@/components/Access";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Daily />
        <Admission />
        <News />
        <Access />
      </main>
      <Footer />
    </>
  );
}
