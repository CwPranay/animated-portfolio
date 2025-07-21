import Head from "next/head";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BackgroundCanvas from "@/components/BackgroundCanvas";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pranay G - MERN Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-[#111] text-white font-['Nunito']">
       <section  id="hero" className="relative flex flex-col min-h-screen overflow-hidden">

          <Header />
          <BackgroundCanvas />

          <div className="relative z-10 flex flex-1 items-center justify-center">
            <HeroSection />
          </div>
        </section>


      </main>
    </>
  );
}
