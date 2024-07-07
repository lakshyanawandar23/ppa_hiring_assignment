// pages/index.js
"use client"
import CustomCarousel from './components/caursel';
import CommunitySection from './components/communitysection';
import CountUpComponent from './components/countup';
import FooterDesignSection from './components/footerdesign';
import Header from './components/header';
import Testimonial from './components/testimonial';
import Footer from './components/footer';
export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="p-4">
        <section className="text-center my-8">
       <CustomCarousel></CustomCarousel>
       <CommunitySection/>
        </section>
        <section className="text-center my-8">
          <h2 className="text-3xl font-bold">Helping a local business reinvent itself</h2>
          <p className="mt-4">Statistics here...</p>
          <CountUpComponent/>
        </section>
        <FooterDesignSection/>
        <Testimonial/>
        <Footer/>
      </main>
    </div>
  );
}

