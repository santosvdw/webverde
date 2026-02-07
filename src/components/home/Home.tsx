import Nav from "../global/Nav.tsx";
import Header from "./Header.tsx";
import Banner from "../global/Banner.tsx";
import Uitdagingen from "./UItdagingen.tsx";
import KlantResultaten from "./KlantResultaten.tsx";
import OverMij from "./OverMij.tsx";
import Aanbod from "./Aanbod.tsx";
import Cta from "./Cta.tsx";
import Portfolio from "./Portfolio.tsx";
import FooterCta from "./FooterCta.tsx";
import Footer from "../global/Footer.tsx";

import '../../styles/main.scss';

function Home() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Banner color="green" />
        <Uitdagingen />
        <KlantResultaten />
        <OverMij />
        <Aanbod />
        <Cta />
        <Portfolio />
        <FooterCta />
      </main>
      <Footer />
    </>
  );
}

export default Home;
