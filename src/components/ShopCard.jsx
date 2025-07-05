import React from 'react';
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


const productData = [
  {
    "id": 1,
    "name": "Lucknowi Pearl Anarkali",
    "price": 4599,
    "originalPrice": 6999,
    "imageUrl":  img1,
    "productUrl": "https://www.kalkifashion.com/pearl-white-lucknowi-anarkali-and-palazzo-set-in-georgette.html",
    "description": "Embrace the enchanting allure of our pearl white anarkali and palazzo set in georgette. The captivating Lucknowi embroidery, embellished with abla, sequins, resham, cut dana, moti, and zardosi, adds a touch of regal splendor to this extraordinary outfit.",
    "category": "Anarkali",
    "sizes": ["S", "M", "L", "XL"],
    "rating": 4.8,
    "reviews": 210
  },
  {
    "id": 2,
    "name": "Ivory Shadow-Work Kurta",
    "price": 2899,
    "originalPrice": 4200,
    "imageUrl": img2,
    "productUrl": "https://www.houseofchikankari.in/products/ruhani-chikankari-mulmul-straight-kurta",
    "description": "A classic ivory kurta featuring intricate shadow-work embroidery. Made from breathable cotton, it's perfect for both casual and semi-formal occasions.",
    "category": "Kurta",
    "sizes": ["M", "L", "XL", "XXL"],
    "rating": 4.6,
    "reviews": 155
  },
  {
    "id": 3,
    "name": "Pastel Georgette Saree",
    "price": 7500,
    "originalPrice": 9500,
    "imageUrl": img3,
    "productUrl": "https://www.meenaaday.com/products/pastel-green-georgette-saree-with-floral-print-and-sequins-work",
    "description": "Drape yourself in elegance with this pastel georgette saree. Adorned with delicate floral embroidery and a shimmering border, it's a timeless piece for any celebration.",
    "category": "Saree",
    "sizes": ["One Size"],
    "rating": 4.9,
    "reviews": 320
  },
  {
    "id": 4,
    "name": "Men's Tehzeeb Kurta",
    "price": 3200,
    "originalPrice": 4500,
    "imageUrl": img4,
    "productUrl": "https://www.ajio.com/tehzeeb-lucknowi-chikankari-embroidered-kurta/p/466698652_maroon",
    "description": "This men's kurta is a perfect blend of tradition and style. Crafted from fine silk, it features subtle embroidery on the collar and cuffs, making it ideal for festive occasions.",
    "category": "Men's Kurta",
    "sizes": ["S", "M", "L", "XL"],
    "rating": 4.5,
    "reviews": 95
  },
  {
    "id": 5,
    "name": "Rosewater Pink Sharara",
    "price": 6250,
    "originalPrice": 8000,
    "imageUrl": img5,
    "productUrl": "https://www.theloom.in/products/rosewater-pink-embroidered-chanderi-sharara-suit-with-organza-dupatta-set-of-3",
    "description": "Make a statement with this stunning rosewater pink sharara set. The flared pants are paired with a matching kurti and a lightweight dupatta, all embellished with intricate gota patti work.",
    "category": "Sharara",
    "sizes": ["S", "M", "L"],
    "rating": 4.7,
    "reviews": 180
  },
  {
    "id": 6,
    "name": "Midnight Blue Angrakha",
    "price": 5199,
    "originalPrice": 7500,
    "imageUrl": img6,
    "productUrl": "https://www.andaazfashion.com/midnight-blue-georgette-angrakha-style-anarkali-suit.html",
    "description": "This midnight blue angrakha is a true masterpiece. The overlapping panels and side tie-ups create a flattering silhouette, while the rich color and delicate embroidery add a touch of royalty.",
    "category": "Angrakha",
    "sizes": ["M", "L", "XL"],
    "rating": 4.8,
    "reviews": 130
  },
  {
    "id": 7,
    "name": "Jaali Work Palazzo Pants",
    "price": 1999,
    "originalPrice": 2800,
    "imageUrl": img7,
    "productUrl": "https://www.nykaafashion.com/house-of-kari-jaal-work-cotton-palazzo/p/4567290",
    "description": "These wide-legged palazzo pants are a perfect combination of comfort and style. Featuring intricate jaali work at the hem, they can be paired with a variety of kurtis and tops.",
    "category": "Palazzo",
    "sizes": ["S", "M", "L", "XL"],
    "rating": 4.4,
    "reviews": 250
  },
  {
    "id": 8,
    "name": "Sunshine Yellow Tunic",
    "price": 2350,
    "originalPrice": 3500,
    "imageUrl": img8,
    "productUrl": "https://www.bunaai.com/products/sunshine-yellow-cotton-tunic",
    "description": "Brighten up your day with this sunshine yellow tunic. Made from soft and breathable cotton, it features a simple yet elegant design with minimal embroidery, making it perfect for everyday wear.",
    "category": "Tunic",
    "sizes": ["S", "M", "L"],
    "rating": 4.6,
    "reviews": 110
  },
  {
    "id": 9,
    "name": "Emerald Green Straight Kurta",
    "price": 3100,
    "originalPrice": 4000,
    "imageUrl": img9,
    "productUrl": "https://www.biba.in/emerald-green-straight-kurta",
    "description": "This emerald green straight kurta is a versatile addition to any wardrobe. The rich color and classic silhouette make it suitable for both work and festive occasions.",
    "category": "Kurta",
    "sizes": ["M", "L", "XL", "XXL"],
    "rating": 4.7,
    "reviews": 190
  },
  {
    "id": 10,
    "name": "Hand-Embroidered Dupatta",
    "price": 1500,
    "originalPrice": 2200,
    "imageUrl": img10,
    "productUrl": "https://www.jaypore.com/hand-embroidered-chanderi-dupatta-p495763",
    "description": "Elevate any outfit with this exquisite hand-embroidered dupatta. The intricate floral motifs and delicate tassels make it a true work of art.",
    "category": "Dupatta",
    "sizes": ["One Size"],
    "rating": 4.9,
    "reviews": 280
  },
  // {
  //   "id": 11,
  //   "name": "Men's Onyx Black Kurta",
  //   "price": 3500,
  //   "originalPrice": 5000,
  //   "imageUrl": img11,
  //   "productUrl": "https://www.manyavar.com/en-in/kurta-pajama/men-s-onyx-black-kurta-pajama/UC10123.html",
  //   "description": "This onyx black kurta for men is a perfect blend of modern and traditional design. The minimalist embroidery and classic silhouette make it a versatile choice for any occasion.",
  //   "category": "Men's Kurta",
  //   "sizes": ["S", "M", "L", "XL", "XXL"],
  //   "rating": 4.8,
  //   "reviews": 150
  // },
  // {
  //   "id": 12,
  //   "name": "Lilac Day Dress",
  //   "price": 2950,
  //   "originalPrice": 4000,
  //   "imageUrl": img12,
  //   "productUrl": "https://www.theloom.in/products/lilac-chanderi-embroidered-dress",
  //   "description": "A beautiful lilac day dress with delicate chikankari embroidery. The soft color and lightweight fabric make it perfect for a summer day out.",
  //   "category": "Dress",
  //   "sizes": ["XS", "S", "M", "L"],
  //   "rating": 4.7,
  //   "reviews": 90
  // },
  // {
  //   "id": 13,
  //   "name": "Regal Velvet Potli Bag",
  //   "price": 1200,
  //   "originalPrice": 1800,
  //   "imageUrl": "https://i.etsystatic.com/20124962/r/il/a8e03a/3421297595/il_794xN.3421297595_b3j8.jpg",
  //   "productUrl": "https://www.etsy.com/in-en/listing/123456789/regal-velvet-potli-bag-with-pearl",
  //   "description": "Complete your traditional look with this regal velvet potli bag. The rich velvet fabric and intricate pearl work make it a luxurious accessory.",
  //   "category": "Accessory",
  //   "sizes": ["One Size"],
  //   "rating": 4.9,
  //   "reviews": 320
  // },
  // {
  //   "id": 14,
  //   "name": "Peach A-Line Kurti",
  //   "price": 2600,
  //   "originalPrice": 3500,
  //   "imageUrl": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13768836/2021/4/15/3c8b4b7c-4e89-4b6e-8b3d-1c3f2b4e8e8e1618497891823-Anouk-Women-Kurtis-3931618497891253-1.jpg",
  //   "productUrl": "https://www.myntra.com/kurtis/anouk/anouk-women-peach-coloured-a-line-kurti/1234567/buy",
  //   "description": "A lovely peach A-line kurti with delicate chikankari embroidery. The flattering silhouette and soft color make it a must-have for your wardrobe.",
  //   "category": "Kurti",
  //   "sizes": ["S", "M", "L", "XL"],
  //   "rating": 4.6,
  //   "reviews": 180
  // },
  // {
  //   "id": 15,
  //   "name": "Classic White on White Kurta",
  //   "price": 3800,
  //   "originalPrice": 5500,
  //   "imageUrl": "https://www.fabindia.com/ccstore/v1/images/?source=/file/v4747761048632617637/products/10689938_01.jpg&height=475&width=475",
  //   "productUrl": "https://www.fabindia.com/classic-white-on-white-chikankari-kurta-10689938",
  //   "description": "A timeless classic, this white-on-white kurta features intricate chikankari embroidery. Made from pure cotton, it offers both comfort and elegance.",
  //   "category": "Kurta",
  //   "sizes": ["M", "L", "XL"],
  //   "rating": 4.8,
  //   "reviews": 250
  // },
  // {
  //   "id": 16,
  //   "name": "Sage Green Nehru Jacket",
  //   "price": 2999,
  //   "originalPrice": 4000,
  //   "imageUrl": "https://www.manyavar.com/images/thumbs/0025983_sage-green-art-silk-nehru-jacket_505.jpeg",
  //   "productUrl": "https://www.manyavar.com/en-in/nehru-jacket/sage-green-nehru-jacket/MJ10012.html",
  //   "description": "Add a touch of sophistication to your ethnic look with this sage green Nehru jacket. The classic design and subtle texture make it a versatile piece for any occasion.",
  //   "category": "Men's Jacket",
  //   "sizes": ["S", "M", "L", "XL"],
  //   "rating": 4.7,
  //   "reviews": 120
  // },
  // {
  //   "id": 17,
  //   "name": "Gota Patti Work Saree",
  //   "price": 8200,
  //   "originalPrice": 11000,
  //   "imageUrl": "https://www.kalkifashion.com/images/Product/hot-pink-bandhani-saree-in-georgette-with-gota-patti-work-sl111005-B_8_1200x1800.jpg",
  //   "productUrl": "https://www.kalkifashion.com/hot-pink-bandhani-saree-in-georgette-with-gota-patti-work.html",
  //   "description": "A stunning saree featuring intricate gota patti work on a vibrant base. This saree is perfect for weddings and festive celebrations.",
  //   "category": "Saree",
  //   "sizes": ["One Size"],
  //   "rating": 4.9,
  //   "reviews": 450
  // },
  // {
  //   "id": 18,
  //   "name": "Crimson Red Anarkali Set",
  //   "price": 5600,
  //   "originalPrice": 7200,
  //   "imageUrl": "https://www.biba.in/dw/image/v2/BKBC_PRD/on/demandware.static/-/Sites-master-catalog-biba/default/dw0607c3e5/images/SS23/SKDSET/RUHANI-VOL-2-SKD/RUHANI-VOL-2-SKD_Red_1.jpg",
  //   "productUrl": "https://www.biba.in/crimson-red-anarkali-set",
  //   "description": "A beautiful crimson red anarkali set with a matching churidar and dupatta. The rich color and flared silhouette make it a perfect choice for festive occasions.",
  //   "category": "Anarkali",
  //   "sizes": ["S", "M", "L", "XL"],
  //   "rating": 4.8,
  //   "reviews": 190
  // },
  // {
  //   "id": 19,
  //   "name": "Royal Blue Short Kurti",
  //   "price": 1899,
  //   "originalPrice": 2500,
  //   "imageUrl": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11056554/2019/12/26/1c8f8d6c-2f3b-4b1a-8c8a-7d4e3f3d9b4c1577353139369-Sangria-Women-Kurtis-5501577353137955-1.jpg",
  //   "productUrl": "https://www.myntra.com/kurtis/sangria/sangria-women-royal-blue-short-kurti/1234568/buy",
  //   "description": "A chic royal blue short kurti with delicate embroidery. This kurti can be paired with jeans or palazzos for a stylish and comfortable look.",
  //   "category": "Kurti",
  //   "sizes": ["S", "M", "L"],
  //   "rating": 4.5,
  //   "reviews": 130
  // },
  // {
  //   "id": 20,
  //   "name": "Men's Cream Silk Dhoti Kurta",
  //   "price": 4200,
  //   "originalPrice": 5800,
  //   "imageUrl": "https://www.manyavar.com/images/thumbs/0029529_charming-cream-kurta-set_505.jpeg",
  //   "productUrl": "https://www.manyavar.com/en-in/kurta-pajama/men-s-cream-silk-dhoti-kurta/UC10124.html",
  //   "description": "A traditional men's cream silk dhoti kurta set. The classic design and luxurious fabric make it a perfect choice for weddings and other formal occasions.",
  //   "category": "Men's Kurta",
  //   "sizes": ["M", "L", "XL"],
  //   "rating": 4.9,
  //   "reviews": 210
  // }
]


function ShopCard() {
  return (
    <main className="min-h-screen font-sans bg-stone-50">

      {/* --- PAGE HEADER --- */}
      <div className="py-16 text-center">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-stone-800 sm:text-5xl">
          ChikanDhaaga Couture
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-stone-600">
          Timeless Elegance, Woven by Hand. Explore our new collection.
        </p>
      </div>

      {/* --- RESPONSIVE PRODUCT GRID --- */}
      <div className="container p-4 mx-auto lg:p-8">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-stone-800">Our Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-x-6 md:gap-y-10">

          {/* Loop over the product data array */}
          {productData.map((product) => (
            // --- UPDATED CARD DESIGN STARTS HERE ---
            <div
              key={product.id}
              className="relative bg-white border border-stone-200 rounded-xl shadow-sm group overflow-hidden
                         transition-all duration-300 ease-in-out hover:shadow-xl"
            >
              {/* --- Image Section --- */}
              <a href="#" className="block overflow-hidden">
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

              {/* --- Info & Actions Container --- */}
              <div className="relative p-4">

                {/* 1. DEFAULT INFO (Visible by default, slides up and out on hover) */}
                <div className="transition-all duration-300 ease-in-out
                                transform-gpu
                                group-hover:opacity-0 group-hover:-translate-y-4"
                >
                  <h3 className="text-base font-medium text-stone-800">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-lg font-semibold text-stone-900">₹{product.price.toLocaleString('en-IN')}</p>
                    <p className="text-sm text-stone-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</p>
                  </div>
                </div>

                {/* 2. HOVER ACTIONS (Hidden by default, slides up and in on hover) */}
                <div className="absolute inset-x-0 bottom-0 p-4
                                transition-all duration-300 ease-in-out
                                transform-gpu opacity-0 translate-y-4
                                group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <div className="flex items-center justify-between">
                    {/* Add to Cart Button */}
                    <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-stone-800 rounded-md hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-800">
                      Add to Cart
                    </button>
                    {/* Wishlist Icon Button */}
                    <button
                      aria-label="Add to Wishlist"
                      className="flex items-center justify-center w-8 h-8 transition-all duration-300 bg-stone-100 rounded-full hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-800"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            // --- UPDATED CARD DESIGN ENDS HERE ---
          ))}
        </div>
      </div>
    </main>
  );
}

export default ShopCard;
