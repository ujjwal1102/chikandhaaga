import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductAdmin from '../components/admin/ProductAdmin';
import CategoryAdmin from '../components/admin/CategoryAdmin';
import FabricAdmin from '../components/admin/FabricAdmin';

function AdminDashboard({ db, handleSave }) {
  const [activeTab, setActiveTab] = useState("products");

  if (!db) {
      return <div className="p-8 text-center text-xl">Loading Admin Panel...</div>;
  }

  const tabs = {
    products: (
      <ProductAdmin
        data={db.products || []}
        onSave={(items) => handleSave({ ...db, products: items })}
      />
    ),
    categories: (
      <CategoryAdmin
        data={db.categories || []}
        onSave={(items) => handleSave({ ...db, categories: items })}
      />
    ),
    fabrics: (
      <FabricAdmin
        data={db.fabrics || []}
        onSave={(items) => handleSave({ ...db, fabrics: items })}
      />
    ),
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <aside className="w-64 bg-gray-800 text-white flex flex-col flex-shrink-0">
        <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-gray-700">
          ChikanDhaaga
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors text-lg ${
                activeTab === tab ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-700">
          <Link
            to="/"
            className="text-gray-400 hover:text-white flex items-center"
          >
            <span className="mr-2">←</span> Back to Site
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        {tabs[activeTab]}
      </main>
    </div>
  );
}

export default AdminDashboard;