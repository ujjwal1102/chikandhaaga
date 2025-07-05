import React, { useState, useEffect } from 'react';

function ProductForm({ item, onSave, onClose }) {
    const defaultState = {
        name: '', price: '', originalPrice: '', imageUrl: '', description: '', 
        isBestseller: false, categoryId: 1, fabricId: 1
    };
    const [formData, setFormData] = useState(defaultState);

    useEffect(() => {
        setFormData(item || defaultState);
    }, [item]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-h-[80vh] overflow-y-auto p-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{item ? 'Edit Product' : 'Add New Product'}</h2>
            
            <label className="block"><span className="text-gray-700">Name</span>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full p-2 border rounded-md" required />
            </label>
            <div className="grid grid-cols-2 gap-4">
                <label className="block"><span className="text-gray-700">Price (₹)</span>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} className="mt-1 block w-full p-2 border rounded-md" required />
                </label>
                <label className="block"><span className="text-gray-700">Original Price (₹)</span>
                    <input type="number" name="originalPrice" value={formData.originalPrice} onChange={handleChange} className="mt-1 block w-full p-2 border rounded-md" />
                </label>
            </div>
            <label className="block"><span className="text-gray-700">Image URL</span>
                <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="mt-1 block w-full p-2 border rounded-md" required />
            </label>
            <label className="block"><span className="text-gray-700">Description</span>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="3" className="mt-1 block w-full p-2 border rounded-md"></textarea>
            </label>
            <div className="flex items-center">
                <input type="checkbox" id="isBestseller" name="isBestseller" checked={formData.isBestseller} onChange={handleChange} className="h-4 w-4 rounded" />
                <label htmlFor="isBestseller" className="ml-2 text-gray-700">This is a Bestseller</label>
            </div>
            
            <div className="flex justify-end space-x-4 pt-4">
                <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Product</button>
            </div>
        </form>
    );
}

export default ProductForm;