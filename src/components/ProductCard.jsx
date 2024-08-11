"use client"

import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
    const router = useRouter();

    const HandleOnClickLink = (slug) => {
        router.push(`/products/${slug}`)
    }

    const imageUrl = product.image_url && product.image_url.trim() !== ""
        ? product.image_url
        : 'https://placehold.co/600x400/png';

    return (
        <>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <img
                    className="h-48 w-full object-cover object-end" src={imageUrl} alt={product.name}
                />
                <div className="p-6">
                    <div className="flex items-baseline">
                        <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                            {product.category.name}
                        </span>
                        {/* <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                            3 beds &bull; 2 baths
                        </div> */}
                    </div>
                    <button>
                        <h4 onClick={() => HandleOnClickLink(product.slug)} className="mt-2 font-semibold text-lg leading-tight truncate hover:underline">{product.name}</h4>
                    </button>
                    <div className="mt-1">
                        <span>Rp. {product.price}k</span>
                    </div>
                    <div className="mt-2 flex items-center">
                        <span className="text-[#EB6D20] font-semibold">
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </span>
                        </span>
                        <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
                    </div>
                </div>
            </div>
        </>
    );
}
