import React, { useState, useEffect } from 'react';

function ItemForm({ item, onSave, onClose, fields, title }) {
    const initialState = fields.reduce((acc, field) => ({ ...acc, [field]: '' }), {});
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        setFormData(item || initialState);
    }, [item]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{item ? `Edit ${title}` : `Add New ${title}`}</h2>
            
            {fields.map(field => (
                 <label key={field} className="block">
                    <span className="text-gray-700">{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                    <input 
                        type={field.includes('Url') ? 'url' : 'text'}
                        name={field} 
                        value={formData[field] || ''} 
                        onChange={handleChange} 
                        className="mt-1 block w-full p-2 border rounded-md" 
                        required 
                    />
                </label>
            ))}
            
            <div className="flex justify-end space-x-4 pt-4">
                <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save {title}</button>
            </div>
        </form>
    );
}

export default ItemForm;