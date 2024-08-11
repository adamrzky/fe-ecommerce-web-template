export default function CategoryCard({ category }) {
    return (
        <>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            <div className="overflow-hidden bg-white rounded-lg shadow-2xl">
                <img
                    className="object-cover object-center w-full h-48"
                     src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
                    alt={category.name}
                />
                <div className="p-6">
                    <h4 className="mt-2 text-lg font-semibold leading-tight truncate">{category.name}</h4>
                    <div className="flex items-center justify-between mt-2">
                        <a 
                            href={`/categories/${category.id}`} 
                            className="text-[#EB6D20] font-semibold hover:underline"
                        >
                            View Products
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
