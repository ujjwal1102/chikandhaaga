import React from 'react';
import img1 from "../assets/images/young-woman-beautiful-yellow-dress.jpg"
import img2 from "../assets/images/young-indian-woman-wearing-sari (2).jpg"
import img3 from "../assets/images/flamenca-holding-manila-shawl-looking-down.jpg"
import img4 from "../assets/images/vasilis-caravitis-KhWNxsFWU84-unsplash.jpg"
import img5 from "../assets/images/young-woman-beautiful-yellow-dress (1).jpg"
import img6 from "../assets/images/simas-mo-IfCraqycH-4-unsplash.jpg"


// --- DATA for Category Cards ---
const categoryData = [
  { id: 1, name: "Kurtas & Kurtis", imageUrl: img1 },
  { id: 2, name: "Sarees", imageUrl: img2 },
  { id: 3, name: "Lehengas", imageUrl:img3 },
  { id: 4, name: "Men's Ethnic Wear", imageUrl: img4 },
];

// --- DATA for Product Cards ---
// const productData = [
//   { id: 1, name: "Lucknowi Pearl Anarkali", price: 4599, originalPrice: 6999, imageUrl: img5 },
//   { id: 2, name: "Ivory Shadow-Work Kurta", price: 2899, originalPrice: 4200, imageUrl: img6 },
//   // ... (the rest of your productData)
// ];

function Categories() {
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

      {/* --- UPDATED: TALLER CATEGORY CARDS SECTION --- */}
      <div className="container p-4 mx-auto lg:p-8">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-stone-800">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Loop over the category data to create a card for each */}
            {categoryData.map((category) => (
                <a
                    key={category.id}
                    href="#" // In a real app, this would be a link to the category page
                    className="relative block overflow-hidden rounded-2xl group
                               h-96 md:h-[28rem]  // <-- KEY CHANGE: Sets a taller, fixed height
                              "
                >
                    {/* Background Image with Zoom Effect */}
                    <img
                        src={category.imageUrl}
                        alt={category.name}
                        className="absolute inset-0 object-cover w-full h-full
                                   transition-transform duration-500 ease-in-out
                                   group-hover:scale-110 // <-- The zoom effect
                                  "
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Category Name with Subtle Hover Animation */}
                    <div className="relative flex items-end h-full p-6">
                        <h3 className="text-2xl font-bold text-white
                                     transition-transform duration-300 ease-in-out
                                     transform group-hover:-translate-y-2 // <-- Text slides up slightly on hover
                                    "
                        >
                            {category.name}
                        </h3>
                    </div>
                </a>
            ))}
        </div>
      </div>


    </main>
  );
}

export default Categories;
