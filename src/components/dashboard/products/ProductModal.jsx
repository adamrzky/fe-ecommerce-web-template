"use client"

import { useAuthStore } from "@/store/authStore";
import baseUrl from "@/utils/constains";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductModal({ isOpen, onClose, modalState }) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        imageURL: '',
    });

    const { user } = useAuthStore();
    const token = user?.token;

    useEffect(() => {
        if (isOpen) {
            const fetchCategories = async () => {
                try {
                    const response = await axios.get(`${baseUrl}/category`);
                    setCategories(response.data.data);
                } catch (error) {
                    console.error('Error fetching categories:', error);
                }
            };

            fetchCategories();

            if (modalState.mode === 'edit') {
                setFormData({
                    name: modalState.product.name,
                    price: modalState.product.price,
                    description: modalState.product.description,
                    imageURL: modalState.product.imageURL,
                });
                setSelectedCategory(modalState.product.category.id);
            } else {
                setFormData({
                    name: '',
                    price: '',
                    description: '',
                    imageURL: '',
                });
                setSelectedCategory('');
            }
        }
    }, [modalState, isOpen]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name: formData.name,
            price: parseInt(formData.price, 10),
            description: formData.description,
            imageURL: formData.imageURL,
            category_id: parseInt(selectedCategory, 10),
        };

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            if (modalState.mode === 'edit') {
                await axios.put(`${baseUrl}/product/${modalState.product.id}`, payload, config);
            } else {
                await axios.post(`${baseUrl}/product`, payload, config);
            }
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div id="crud-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Create New Product
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={onClose}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                    <input
                                        type="number"
                                        name="price" 
                                        id="price" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                        placeholder="$2999" 
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}/>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select
                                        id="category"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    >
                                        <option value="" disabled>Select category</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                    <textarea 
                                        id="description" 
                                        rows="4" 
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        placeholder="Write product description here"></textarea>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="imageURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                                    <input 
                                        type="text"
                                        name="imageURL"
                                        id="imageURL"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        value={formData.imageURL}
                                        placeholder="http://"
                                        onChange={(e) => setFormData({ ...formData, imageURL: e.target.value })}/>
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {modalState.mode === 'edit' ? 'Update' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
