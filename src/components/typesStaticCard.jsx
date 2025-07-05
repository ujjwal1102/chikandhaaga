import React from 'react';

// --- REACT COMPONENT: The main App that renders the page ---
function CardEcommerce() {

  // --- UPDATED DATA: Now includes image URLs for a visual-first design ---
  const chikanCategories = [
    {
      id: 1,
      name: "Murri",
      description: "A fine, satin stitch that creates a tiny knot-like effect.",
      imageUrl: "https://picsum.photos/seed/stitch_murri/800/1200",
    },
    {
      id: 2,
      name: "Phanda",
      description: "A smaller, millet-shaped stitch, often used for petals.",
      imageUrl: "https://picsum.photos/seed/stitch_phanda/800/1200",
    },
    {
      id: 3,
      name: "Bakhiya",
      description: "A 'shadow work' stitch, done on the reverse side of the fabric.",
      imageUrl: "https://picsum.photos/seed/stitch_bakhiya/800/1200",
    },
    {
      id: 4,
      name: "Hool",
      description: "A detached eyelet stitch used to create a delicate hole in the fabric.",
      imageUrl: "https://picsum.photos/seed/stitch_hool/800/1200",
    },
    {
      id: 5,
      name: "Jaali",
      description: "Intricate net-like patterns created by pulling threads apart.",
      imageUrl: "https://picsum.photos/seed/stitch_jaali/800/1200",
    },
    {
      id: 6,
      name: "Tepchi",
      description: "A simple, running stitch used for outlines and filling.",
      imageUrl: "https://picsum.photos/seed/stitch_tepchi/800/1200",
    },
    {
      id: 7,
      name: "Ghaspatti",
      description: "Stitches that form grass and leaf-like motifs.",
      imageUrl: "https://picsum.photos/seed/stitch_ghaspatti/800/1200",
    },
    {
      id: 8,
      name: "Daraz",
      description: "A seam-joining stitch used to create beautiful patterns on seams.",
      imageUrl: "https://picsum.photos/seed/stitch_daraz/800/1200",
    },
  ];

  return (
    <main className="min-h-screen font-sans bg-stone-50">

      {/* --- PAGE HEADER --- */}
      <div className="py-12 text-center">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-stone-800 sm:text-5xl">
          Discover Chikankari
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-stone-600">
          Explore the rich heritage and intricate stitches of Lucknow's
          traditional embroidery.
        </p>
      </div>

      {/* --- RESPONSIVE GRID SECTION --- */}
      <div className="container p-4 mx-auto sm:p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Loop over the data array to create a card for each item */}
          {chikanCategories.map((category) => (
            // --- UPDATED CARD DESIGN STARTS HERE ---
            <a 
              key={category.id} 
              href="#" // This would be a link in a real app
              className="relative block h-80 overflow-hidden rounded-xl group shadow-lg 
                         transition-all duration-300 ease-in-out hover:shadow-2xl"
            >
              {/* Background Image with Zoom Effect */}
              <img 
                src={category.imageUrl} 
                alt={category.name}
                className="absolute inset-0 object-cover w-full h-full 
                           transition-transform duration-500 ease-in-out 
                           group-hover:scale-110"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Text Content with Animation */}
              <div className="relative flex items-end h-full p-6">
                <div className="transition-transform duration-300 ease-in-out transform group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-white">
                      {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">
                      {category.description}
                  </p>
                </div>
              </div>
            </a>
            // --- UPDATED CARD DESIGN ENDS HERE ---
          ))}
        </div>
      </div>
    </main>
  );
}

export default CardEcommerce;