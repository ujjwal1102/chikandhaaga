import React from 'react';

// --- COMPONENT: Themed Footer for ChikanDhaaga ---
export default function ChikanDhaagaFooter() {
  return (
    <footer className="w-full text-stone-300 bg-stone-800">

      {/* --- Main Footer Section --- */}
      <div className="pt-16 pb-12 text-sm border-t border-stone-700">
        <div className="container px-6 mx-auto">
          {/* Brand Name and Tagline */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white font-serif">ChikanDhaaga</h2>
            <p className="max-w-md mx-auto mt-2 text-stone-400">Handcrafted Elegance, Woven with Tradition.</p>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-12">
            
            {/* Column 1: Shop */}
            <nav className="col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="mb-6 text-base font-semibold text-white">Shop</h3>
              <ul className="space-y-3">
                <li><a href="#" className="transition-colors duration-300 hover:text-white">New Arrivals</a></li>
                <li><a href="#" className="transition-colors duration-300 hover:text-white">Kurtas & Kurtis</a></li>
                <li><a href="#" className="transition-colors duration-300 hover:text-white">Sarees</a></li>
                <li><a href="#" className="transition-colors duration-300 hover:text-white">Men's Collection</a></li>
              </ul>
            </nav>

            {/* Column 2: Help & Support */}
            <nav className="col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="mb-6 text-base font-semibold text-white">Help & Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="transition-colors duration-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="transition-colors duration-300 hover:text-white">Track Your Order</a></li>
                <li><a href="#" className="transition-colors duration-300 hover:text-white">Shipping Policy</a></li>
                <li><a href="#" className="transition-colors duration-300 hover:text-white">Returns & Exchanges</a></li>
              </ul>
            </nav>

            {/* Column 3: About Chikandhaaga */}
            <nav className="col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="mb-6 text-base font-semibold text-white">About Chikandhaaga</h3>
              <ul className="space-y-3">
                <li><a href="#" className="transition-colors duration-300 hover:text-white">Our Story</a></li>
                <li><a href="#" className="transition-colors duration-300 hover:text-white">The Art of Chikankari</a></li>
                <li><a href="#" className="transition-colors duration-300 hover:text-white">Blog</a></li>
              </ul>
            </nav>
            
            {/* Column 4: Newsletter Signup */}
            <div className="col-span-2 md:col-span-2 lg:col-span-3">
                <h3 className="mb-6 text-base font-semibold text-white">Stay in the Loop</h3>
                <p className="mb-4">Get updates on new arrivals, special offers, and the stories behind our craft.</p>
                <form className="flex">
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        className="flex-grow w-full px-3 py-2 text-white bg-stone-700 border border-stone-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <button className="px-4 py-2 font-bold text-stone-800 bg-white rounded-r-md hover:bg-stone-200">
                        Sign Up
                    </button>
                </form>
            </div>

          </div>
        </div>
      </div>

      {/* --- Subfooter Section --- */}
      <div className="py-6 text-sm border-t border-stone-700 bg-stone-900">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">© 2024 ChikanDhaaga. All Rights Reserved.</div>
            
            {/* Social Media Links */}
            <ul className="flex items-center justify-center gap-6">
              <li>
                <a href="#" aria-label="Instagram" className="transition-colors duration-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069s-3.584-.011-4.85-.069c-3.252-.149-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-1.625C8.74 0.538 8.36.526 7.05.478 3.684.331.959 3.057.812 6.422.754 7.728.742 8.109.742 12s.012 4.272.07 5.578c.147 3.364 2.872 6.09 6.236 6.236 1.308.058 1.688.07 4.95.07s3.642-.012 4.95-.07c3.364-.146 6.089-2.872 6.236-6.236.058-1.306.07-1.686.07-4.95s-.012-3.644-.07-4.95c-.147-3.364-2.872-6.09-6.236-6.236C15.64 0.526 15.26 0.538 12 0.538z" /><path d="M12 6.865A5.135 5.135 0 1017.135 12 5.135 5.135 0 0012 6.865zm0 8.57A3.435 3.435 0 1115.435 12 3.435 3.435 0 0112 15.435z" /><path d="M16.965 6.405a1.25 1.25 0 101.25 1.25 1.25 1.25 0 00-1.25-1.25z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook" className="transition-colors duration-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter" className="transition-colors duration-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.584-.666 2.477 0 1.61.82 3.027 2.053 3.846-.764-.024-1.482-.232-2.11-.583v.062c0 2.256 1.605 4.14 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.307 3.2 4.34 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.096 7.14 2.096 8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602A9.46 9.46 0 0024 4.557z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}