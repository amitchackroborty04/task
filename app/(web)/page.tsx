import NewDrops from '@/components/Homepage-components/NewDrops'
import Hero from '@/components/Homepage-components/Hero'
import { Navbar } from '@/components/Homepage-components/Navbar'
import React from 'react'
import Category from '@/components/Homepage-components/Category'
import { Review } from '@/components/Homepage-components/Review'
import Footer from '@/components/Homepage-components/Footer'

const page = () => {
  return (
    <div >
        <Navbar/>
        <Hero/>
        <NewDrops/>
        <Category/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default page