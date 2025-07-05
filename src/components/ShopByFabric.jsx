import React, { useState } from 'react';

// --- Swiper ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "../assets/images/Lucknowi-Pearl-Anarkali.avif"
import img2 from "../assets/images/Ivory-Shadow-Work-Kurta.webp"
import img3 from "../assets/images/Pastel Georgette Saree.webp"
import img4 from "../assets/images/Men's Tehzeeb Kurta.avif"
import img5 from "../assets/images/Rosewater Pink Sharara.jpg"
import img6 from "../assets/images/Midnight Blue Angrakha.webp"
import img7 from "../assets/images/Jaali Work Palazzo Pants.jpg"
import img8 from "../assets/images/Sunshine Yellow Tunic.avif"
import img9 from "../assets/images/Emerald Green Straight Kurta.webp"
import img10 from "../assets/images/Hand-Embroidered Dupatta.avif"
import img11 from "../assets/images/Men's Onyx Black Kurta.webp"
import img12 from "../assets/images/Lilac Day Dress.webp"

// --- (Your data arrays would be here) ---
const fabricData = [
  {
    id: 1,
    name: "Cotton",
    products: [
      {
        id: 1,
        name: "Ivory Shadow-Work Kurta",
        price: 2899,
        originalPrice: 4200,
        imageUrl: img2,
      },
      {
        id: 2,
        name: "Sunshine Yellow Tunic",
        price: 2350,
        originalPrice: 3500,
        imageUrl: img8,
      },
      {
        id: 3,
        name: "Jaali Work Palazzo Pants",
        price: 1999,
        originalPrice: 2800,
        imageUrl: img7,
      },
      {
        id: 4,
        name: "Sunshine Yellow Tunic",
        price: 2350,
        originalPrice: 3500,
        imageUrl: img8,
      },
      {
        id: 5,
        name: "Jaali Work Palazzo Pants",
        price: 1999,
        originalPrice: 2800,
        imageUrl: img7,
      },
    ],
  },
  {
    id: 2,
    name: "Silk",
    products: [
      {
        id: 1,
        name: "Men's Tehzeeb Kurta",
        price: 3200,
        originalPrice: 4500,
        imageUrl: img4,
      },
      {
        id: 2,
        name: "Lucknowi Pearl Anarkali",
        price: 4599,
        originalPrice: 6999,
        imageUrl: img1,
      },
      {
        id: 4,
        name: "Pastel Georgette Saree",
        price: 7500,
        originalPrice: 9500,
        imageUrl: img3,
      },
    ],
  },
  {
    id: 3,
    name: "Georgette",
    products: [
      {
        id: 1,
        name: "Lucknowi Pearl Anarkali",
        price: 4599,
        originalPrice: 6999,
        imageUrl: img1,
      },
      {
        id: 2,
        name: "Pastel Georgette Saree",
        price: 7500,
        originalPrice: 9500,
        imageUrl: img3,
      },
      {
        id: 3,
        name: "Midnight Blue Angrakha",
        price: 5199,
        originalPrice: 7500,
        imageUrl: img6,
      },
      ,
      {
        id: 4,
        name: "Pastel Georgette Saree",
        price: 7500,
        originalPrice: 9500,
        imageUrl: img3,
      },
      {
        id: 5,
        name: "Midnight Blue Angrakha",
        price: 5199,
        originalPrice: 7500,
        imageUrl: img6,
      },
    ],
  },
  {
    id: 4,
    name: "Chanderi",
    products: [
      {
        id: 1,
        name: "Rosewater Pink Sharara",
        price: 6250,
        originalPrice: 8000,
        imageUrl: img5,
      },
      {
        id: 2,
        name: "Hand-Embroidered Dupatta",
        price: 1500,
        originalPrice: 2200,
        imageUrl: img10,
      },
      {
        id: 3,
        name: "Lilac Day Dress",
        price: 2950,
        originalPrice: 4000,
        imageUrl: img12,
      },
      ,
      {
        id: 4,
        name: "Hand-Embroidered Dupatta",
        price: 1500,
        originalPrice: 2200,
        imageUrl: img10,
      },
      {
        id: 5,
        name: "Lilac Day Dress",
        price: 2950,
        originalPrice: 4000,
        imageUrl: img12,
      },
    ],
  },
  {
    id: 5,
    name: "Other",
    products: [
      {
        id: 1,
        name: "Men's Onyx Black Kurta",
        price: 3500,
        originalPrice: 5000,
        imageUrl: img11,
      },
      {
        id: 2,
        name: "Emerald Green Straight Kurta",
        price: 3100,
        originalPrice: 4000,
        imageUrl: img9,
      },
      {
        id: 3,
        name: "Men's Onyx Black Kurta",
        price: 3500,
        originalPrice: 5000,
        imageUrl: img11,
      },
      {
        id: 4,
        name: "Emerald Green Straight Kurta",
        price: 3100,
        originalPrice: 4000,
        imageUrl: img9,
      },
      {
        id: 5,
        name: "Men's Onyx Black Kurta",
        price: 3500,
        originalPrice: 5000,
        imageUrl: img11,
      }
    ],
  },
];

const ProductCard = ({ product }) => (
  <div className="relative bg-white border border-stone-200 rounded-xl shadow-sm group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl h-full flex flex-col">
    <a href="#" className="block overflow-hidden aspect-w-1 aspect-h-1">
      <div className="h-64 overflow-hidden">
  <img
    src={product.imageUrl}
    alt={product.name}
    className="object-cover w-full h-full
               transition-transform duration-300 ease-in-out
               group-hover:scale-105"
  />
</div>
    </a>
    <div className="relative p-4 mt-auto">
      <div className="transition-all duration-300 ease-in-out transform-gpu group-hover:opacity-0 group-hover:-translate-y-4">
        <h3 className="text-base font-medium text-stone-800">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-lg font-semibold text-stone-900">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="text-sm text-stone-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ease-in-out transform-gpu opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
        <div className="flex items-center justify-between">
          <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-stone-800 rounded-md hover:bg-stone-900">Add to Cart</button>
          <button aria-label="Add to Wishlist" className="flex items-center justify-center w-8 h-8 transition-all duration-300 bg-stone-100 rounded-full hover:bg-stone-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ProductCarousel = ({ products }) => (
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={24}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    breakpoints={{
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 5 },
    }}
    className="!pb-12 "
  >
    {products.map(product => (
      <SwiperSlide key={product.id} className="!h-auto pb-2">
        <ProductCard product={product} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default function ShopByFabric() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto p-4 lg:p-8 mb-16">
      <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-stone-800">Shop by Fabric</h2>
      </div>

      {/* Tab Buttons */}
      <div className="border-b border-stone-200">
        <ul className="flex -mb-px" role="tablist">
          {fabricData.map((fabric, index) => (
            <li key={fabric.id} className="flex-1" role="presentation">
              <button
                className={`inline-block w-full p-4 text-lg font-medium text-center border-b-2 transition-colors duration-300
                  ${activeTab === index 
                    ? 'border-stone-800 text-stone-800' 
                    : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300'
                  }`}
                role="tab"
                aria-selected={activeTab === index}
                onClick={() => setActiveTab(index)}
              >
                {fabric.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* --- UPDATED: Animated Tab Content Panels --- */}
      <div className="relative pt-8 min-h-[450px]"> {/* <-- KEY CHANGE: Relative container with a minimum height */}
        {fabricData.map((fabric, index) => (
          <div
            key={fabric.id}
            className={`
              absolute inset-x-0 w-full
              transition-all duration-500 ease-in-out  // <-- KEY CHANGE: Animation classes
              ${activeTab === index 
                ? 'opacity-100 translate-x-0'        // Active state: visible and in place
                : 'opacity-0 translate-x-4 pointer-events-none' // Inactive state: invisible and slightly to the right
              }
            `}
            role="tabpanel"
          >
            <ProductCarousel products={fabric.products} />
          </div>
        ))}
      </div>
    </div>
  );
}
