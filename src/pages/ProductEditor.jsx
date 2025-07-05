import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  
  const [product, setProduct] = useState({
    name: '',
    price: '',
    originalPrice: '',
    imageUrl: '',
    description: '',
    isBestseller: false,
    categoryId: 1,
    fabricId: 1
  });

  useEffect(() => {
    if (isEditing) {
      fetch(`http://localhost:3001/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isEditing ? `http://localhost:3001/products/${id}` : 'http://localhost:3001/products';
    const method = isEditing ? 'PUT' : 'POST';

    const productToSubmit = {
        ...product,
        // Ensure numbers are stored as numbers if desired, but string is safer for forms
        price: Number(product.price),
        originalPrice: Number(product.originalPrice),
        categoryId: Number(product.categoryId),
        fabricId: Number(product.fabricId)
    };

    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productToSubmit)
    }).then(() => {
      navigate('/admin');
    });
  };

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">{isEditing ? 'Edit Product' : 'Add New Product'}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required />
        </div>
        <div className="grid grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input type="number" name="price" value={product.price} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Original Price</label>
                <input type="number" name="originalPrice" value={product.originalPrice} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
            </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea name="description" value={product.description} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" rows="4"></textarea>
        </div>
        <div className="flex items-center">
            <input type="checkbox" name="isBestseller" checked={product.isBestseller} onChange={handleChange} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            <label className="ml-2 block text-sm text-gray-900">This is a Bestseller</label>
        </div>
        <div>
          <button type="submit" className="w-full px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-900">
            {isEditing ? 'Update Product' : 'Save Product'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductEditor;