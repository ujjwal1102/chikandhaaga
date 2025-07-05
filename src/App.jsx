import { useState } from 'react'
import './App.css'
import NavbarBasic from './components/header'
import CarouselIndicatorsInside from './components/slider'
import FabricMarquee from './components/features'
import CardEcommerce from './components/typesStaticCard'
import ShopCard from './components/ShopCard'
import Categories from './components/categories'
import ShopByFabric from './components/ShopByFabric'
import ChikanDhaagaFooter from './components/Footer'

function App() {

  return (
    <>
    <NavbarBasic/>
    <CarouselIndicatorsInside/>
    <Categories/>
    <FabricMarquee/>
    <ShopCard/>
    <CardEcommerce/>
    <ShopByFabric/>
    <ChikanDhaagaFooter/>
    </>
  )
}

export default App
