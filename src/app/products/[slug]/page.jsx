"use client"
import MainLayout from "@/components/MainLayout";
import baseUrl from "@/utils/constains";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const productDetailPage = () => {
    const { slug } = useParams();
    const [imageUrl, setImageUrl] = useState(false);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await axios.get(`${baseUrl}/product/slug/${slug}`);
                console.log(slug)
                const data = response.data.data;
                setResults(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [slug]);

    const changeImage = (e) => {
        setImageUrl(e.target.src);
    }

    if (loading)
        return (
            <MainLayout>
                <section className="mx-auto max-w-[1320px] my-8 px-10 xl:px-0">
                    <p>Loading...</p>
                </section>
            </MainLayout>
        );

    if (error)
        return (
            <MainLayout>
                <section className="mx-auto max-w-[1320px] my-8 px-10 xl:px-0">
                    <p>Error: {error}</p>
                </section>
            </MainLayout>
        );

    return (
        <MainLayout>
            <section id="productDetail" className="mx-auto max-w-[1320px] overflow-hidden my-8 px-10 xl:px-0">
                <section className="grid xl:grid-cols-10 grid-cols-5 gap-4">
                    <section className="xl:col-span-7 col-span-10">
                        <div className="xl:h-96 lg:h-96 bg-slate-200 relative">
                            <img className="w-full h-full object-contain" src={imageUrl || "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e593fb060cf8738ec75ea77_escape-1%402x.jpg"} alt="" />
                            <button className="absolute left-0 top-[50%]  bg-[#EB8426] hover:bg-[#EB6D20] px-3 py-1 text-white text-lg font-bold">&lt;</button>
                            <button className="absolute right-0 top-[50%]  bg-[#EB8426] hover:bg-[#EB6D20] px-3 py-1 text-white text-lg font-bold">&gt;</button>
                        </div>

                        <div className="h-20 bg-slate-200 mt-4 flex flex-row gap-3 p-1 overflow-x-auto border-4">
                            <img onClick={(e) => changeImage(e)} src="https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e5dde3f3f2bf99cb1d21f4d_58531d7356ce728d0ed6031d_escape-2%25402x-p-1080.jpeg" alt="" className="flex-none bg-black h-full w-14 object-cover duration-100 hover:opacity-50" />
                            <img onClick={(e) => changeImage(e)} src="https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e5dde3f3f2bf9608bd21f4c_58531d7356ce728d0ed60505_escape-p-1080.jpeg" alt="" className="flex-none bg-slate-600 h-full w-14 object-cover duration-100 hover:opacity-50" />
                            <img onClick={(e) => changeImage(e)} src="https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e5dde3f3f2bf93605d21f4a_58531d7356ce728d0ed60390_escape-4%25402x-p-1080.jpeg" alt="" className="flex-none bg-slate-600 h-full w-14 object-cover duration-100 hover:opacity-50" />
                            <img onClick={(e) => changeImage(e)} src="https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e5dde3f3f2bf97919d21f4b_58531d7356ce728d0ed602e9_escape-5%25402x-p-1080.jpeg" alt="" className="flex-none bg-slate-600 h-full w-14 object-cover duration-100 hover:opacity-50" />
                        </div>
                    </section>

                    <section className="xl:col-span-3 col-span-10 shadow-lg p-3 flex flex-col h-full">
                        <div>
                            <h1 className="text-xl font-semibold text-slate-700">{results.name}</h1>
                            <p className="text-slate-600 text-sm mt-1 mb-3">By <span className="text-[#EB6D20]">Rikkriuk</span></p>
                            <div className="flex flex-wrap gap-3">
                                <p className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">{results.category.name}</p>
                            </div>
                            <p className="py-5 text-sm">{results.description}</p>
                        </div>

                        {/* This should be fixed at the bottom of the div */}
                        <div className="flex flex-row items-center justify-between mt-auto gap-3">
                            {/* <p className="line-through text-slate-600 text-sm font-normal">Rp 350.000</p> */}
                            <p className="text-lg font-semibold">Rp. {results.price}</p>
                            <button className="py-3 px-7 bg-[#EB8426] hover:bg-[#EB6D20] text-white rounded-full">Buy</button>
                        </div>
                    </section>

                </section>

                <section className="w-full">
                    <h1 className="text-xl my-16 font-semibold text-slate-700 text-center">Review Product</h1>
                    <section className="relative flex flex-wrap justify-center lg:justify-start gap-3 w-full">
                        <div className="w-[305px] shadow-lg p-5">
                            <div>
                                <div className="flex items-center gap-3">
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='#3E3E3E'
                                        className='size-4'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                                        />
                                    </svg>
                                    <h2>Alexsa</h2>
                                </div>
                                <p className="text-slate-500 text-sm mt-1">12-04-2024</p>
                            </div>
                            <div className="mt-5">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt odio ipsum velit eaque aliquam expedita magnam placeat, vitae beatae similique id nostrum repellendus ab. Nisi tenetur illo, voluptatum dicta deleniti fugiat alias magnam tempore molestias porro natus, quis quia ex.</p>
                            </div>
                        </div>

                        <div className="w-80 shadow-lg p-5">
                            <div>
                                <div className="flex items-center gap-3">
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='#3E3E3E'
                                        className='size-4'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                                        />
                                    </svg>
                                    <h2>Alexsa</h2>
                                </div>
                                <p className="text-slate-500 text-sm mt-1">12-04-2024</p>
                            </div>
                            <div className="mt-5">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt odio ipsum velit eaque aliquam expedita magnam placeat, vitae beatae similique id nostrum repellendus ab. Nisi tenetur illo, voluptatum dicta deleniti fugiat alias magnam tempore molestias porro natus, quis quia ex.</p>
                            </div>
                        </div>

                        <div className="w-80 shadow-lg p-5">
                            <div>
                                <div className="flex items-center gap-3">
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='#3E3E3E'
                                        className='size-4'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                                        />
                                    </svg>
                                    <h2>Alexsa</h2>
                                </div>
                                <p className="text-slate-500 text-sm mt-1">12-04-2024</p>
                            </div>
                            <div className="mt-5">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt odio ipsum velit eaque aliquam expedita magnam placeat, vitae beatae similique id nostrum repellendus ab. Nisi tenetur illo, voluptatum dicta deleniti fugiat alias magnam tempore molestias porro natus, quis quia ex.</p>
                            </div>
                        </div>

                        <div className="w-80 shadow-lg p-5">
                            <div>
                                <div className="flex items-center gap-3">
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='#3E3E3E'
                                        className='size-4'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                                        />
                                    </svg>
                                    <h2>Alexsa</h2>
                                </div>
                                <p className="text-slate-500 text-sm mt-1">12-04-2024</p>
                            </div>
                            <div className="mt-5">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt odio ipsum velit eaque aliquam expedita magnam placeat, vitae beatae similique id nostrum repellendus ab. Nisi tenetur illo, voluptatum dicta deleniti fugiat alias magnam tempore molestias porro natus, quis quia ex.</p>
                            </div>
                        </div>
                    </section>

                    <div className="w-full text-center">
                        <button className="my-10 bg-[#EB8426] hover:bg-[#EB6D20] px-7 py-3 text-white text-sm font-medium rounded-full">View More</button>
                    </div>
                </section>

                <section className="w-full">
                    <h1 className="text-xl my-16 font-semibold text-slate-700 text-center">Other Template</h1>
                    <section className="relative flex flex-wrap justify-center lg:justify-start gap-3 w-full">
                        <div className="w-80 h-80 bg-slate-200"></div>
                        <div className="w-80 h-80 bg-slate-200"></div>
                        <div className="w-80 h-80 bg-slate-200"></div>
                        <div className="w-80 h-80 bg-slate-200"></div>
                    </section>

                    <div className="w-full text-center">
                        <button className="my-10 bg-[#EB8426] hover:bg-[#EB6D20] px-7 py-3 text-white text-sm font-medium rounded-full">View More</button>
                    </div>
                </section>
            </section>
        </MainLayout>
    )
}

export default productDetailPage;