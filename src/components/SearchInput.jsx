"use client"

import { useSearchStore } from "@/store/searchStore";
import { useRouter } from "next/navigation";

const SearchInput = () => {
    const { searchQuery, setSearchQuery } = useSearchStore();
    const router = useRouter();

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) {
          router.push(`/search?q=${searchQuery}`);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSearchSubmit}
                className='items-center flex-1 hidden py-4 ml-24 mr-8 bg-white rounded-full md:flex px-7'
            >
                <input
                    id='search'
                    name='search'
                    type='text'
                    className='w-full text-sm outline-none text-slate-600'
                    placeholder='Search anything . . .'
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button type="submit">
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <circle
                            cx='11'
                            cy='11'
                            r='6'
                            fill='#FFF9F3'
                            stroke='#3E3E3E'
                            strokeWidth='2'
                        />
                        <path
                            d='M20 20L17 17'
                            stroke='#3E3E3E'
                            strokeWidth='2'
                            strokeLinecap='round'
                        />
                    </svg>

                </button>
            </form>
        </>
    );
};

export default SearchInput;
