
import React from 'react'
import Hero from './Sections/Hero'
import PopularProducts from './Sections/PopularProducts'
import SuperQuality from './Sections/SuperQuality'
import Services from './Sections/Services'
import CustomerReviews from './Sections/CustomerReviews'
import Subscribe from './Sections/Subscribe'
import Footer from './Sections/Footer'
import Nav from './Components/Nav'
import SpecialOffer from './Sections/SpecialOffer'

const App = () => {
  return (
    <main className="relative">
    <Nav />
    <section className=" xl:padding-l wide:padding-r padding-b ">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding"> 
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SpecialOffer />
    </section>
    <section className="bg-blue-100 sm:px-16 px-8 sm:py-24 py-12 sm:p-25 p-20">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 w-full">
      <Subscribe />
    </section>
    <section className="bg-black pb-8 padding-x padding-t">
      <Footer />
    </section>
      </main>
  )
}

export default App

