import AOS from "aos";
import { useEffect } from "react";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Footer from "../components/organisms/Footer";
import Jumbotron from "../components/organisms/Jumbotron";
import Navbar from "../components/organisms/Navbar";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import TransactionStep from "../components/organisms/TransactionStep";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        {/* title */}
        <title>StoreGG - Topup & Get a New Experience in Gaming</title>
        {/* desc web ini tentang apa */}
        <meta name="description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />

        {/* kalau share di sosmed nanti muncul url, gambar, judul: */}
        <meta property="og:title" content="StoreGG - Topup & Get a New Experience in Gaming" />
        <meta property="og:description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <meta property="og:url" content="http://localhost:3000/" />
      </Head>
      <Navbar />
      <Jumbotron />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
