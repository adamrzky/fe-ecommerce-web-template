export default function ProductCard({ product }) {
    return (
        <>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <img
                    className="h-48 w-full object-cover object-end"
                    src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
                    alt={product.name}
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
                    <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{product.name}</h4>
                    <div className="mt-1">
                        <span>${product.price}</span>
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
