import AOS from "aos";
import { useEffect } from "react";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Footer from "../components/organisms/Footer";
import Jumbotron from "../components/organisms/Jumbotron";
import Navbar from "../components/organisms/Navbar";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import TransactionStep from "../components/organisms/TransactionStep";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
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
