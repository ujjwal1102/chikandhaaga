import React from "react";
import NavbarBasic from "../components/header";
import CarouselIndicatorsInside from "../components/slider";
import FabricMarquee from "../components/features";
import ShopCard from "../components/ShopCard";
import Categories from "../components/categories";
import ShopByFabric from "../components/ShopByFabric";
import ChikanDhaagaFooter from "../components/Footer";

export default function HomePage({ db }) {
  if (!db) {
    return <div className="text-center p-12">Loading ChikanDhaaga...</div>;
  }

  return (
    <>
      <NavbarBasic />
      <CarouselIndicatorsInside />
      <Categories categories={db.categories} />
      <FabricMarquee fabrics={db.fabrics} />
      <ShopCard products={db.products} />
      <ShopByFabric fabrics={db.fabrics} products={db.products} />
      <ChikanDhaagaFooter />
    </>
  );
}
