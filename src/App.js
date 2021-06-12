import React from 'react';
import Header from './components/header';
import Figures from './components/figures';
import Info from './components/Info';
import About from './components/about';
import Layout from './components/layout';
import Footer from './components/footer';
import { useGlobalContext } from './context/context';
import coupleMobileImg from './assets/couple-enjoying-day.jpeg';
import coupleDeskopImg from './assets/couple-desktop.jpeg';
import geersMobileImg from './assets/geers-store.jpeg';
import geersDesktopImg from './assets/geers-store-desktop.jpeg';
import { section1, section2 } from './data';

function App() {
  const { isTablet } = useGlobalContext();
  return (
    <>
      <Header />
      <Figures />
      <Info
        image={isTablet ? coupleDeskopImg : coupleMobileImg}
        imgDesc="Couple talking"
        texts={section1}
        type={1}
      />
      <Info
        image={isTablet ? geersDesktopImg : geersMobileImg}
        imgDesc="Geers Store"
        texts={section2}
        type={2}
      />
      <About />
      <Layout />
      <Footer />
    </>
  );
}
export default App;
