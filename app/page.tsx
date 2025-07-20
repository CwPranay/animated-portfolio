import Head from "next/head";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
// import BackgroundCanvas from "@/components/BackgroundCanvas";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pranay G - MERN Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-[#111] text-white font-['Nunito']">
        <section className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-1 items-center justify-center">
            <HeroSection />
          </div>
        </section>

      </main>
    </>
  );
}
