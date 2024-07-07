// pages/index.js
"use client"
// use dynamic import because it will load the component only when client go on that route and render it on client side by diabling ssr
import dynamic from 'next/dynamic';
const CustomCarousel=dynamic(()=> import ('./components/caursel'),{ssr:false});
const  CommunitySection =dynamic(()=>import('./components/communitysection'),{ssr:false});
const CountUpComponent =dynamic(()=>import( './components/countup'),{ssr:false});
const FooterDesignSection =dynamic(()=>import( './components/footerdesign'),{ssr:false});
import Header from './components/header';
const Testimonial =dynamic(()=>  import( './components/testimonial'),{ssr:false});
import Footer from './components/footer';
export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="p-4">
          <section  className="text-center my-8">  <CustomCarousel></CustomCarousel></section>
          <section  className='text-center my-8'>  <CommunitySection/></section>
        <section className="text-center my-8">
          <h2 className="text-3xl font-bold">Helping a local business reinvent itself</h2>
          <p className="mt-4">Statistics here...</p>
          <CountUpComponent/>
        </section>
        <section className='text-center my-8'>
        <FooterDesignSection/>
        </section>
        <section className='text-center my-8'> <Testimonial/></section>
       <section className='text-center my-8'><Footer/></section> 
      </main>
    </div>
  );
}

