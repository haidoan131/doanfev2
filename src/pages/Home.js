import React from 'react'
import Header from './../components/header/Header';
import Banner from './../components/banner/Banner';
import FindProduct from './../components/findproduct/FindProduct';
import PerCare from './../components/petcare/PerCare';

export default function Home() {
  return (
    <div>
    <Header/>
    <Banner/>
    <FindProduct/>
    <PerCare/>
    </div>
  )
}
