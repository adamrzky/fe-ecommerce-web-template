"use client";
import React, { useEffect, useState } from 'react';

const Banner = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   const slides = [
      { src: 'https://www.internetcreation.net/wp-content/uploads/2015/04/banner-web-design.png' },
      { src: 'https://appsmaventech.com/assets/images/blog/the-future-of-web-development.png', alt: 'Slide 2' },
      { src: 'https://www.proglobalbusinesssolutions.com/wp-content/uploads/2019/03/Photography-Web-Banner.jpg', alt: 'Slide 3' },
      { src: 'https://cdn.vectorstock.com/i/500p/40/15/banner-software-development-programming-web-site-vector-38004015.jpg', alt: 'Slide 4' },
      { src: 'https://www.proglobalbusinesssolutions.com/wp-content/uploads/2019/03/Creative-Company-Banner.jpg', alt: 'Slide 5' },
   ];

   const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
   };
  
   const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
   };

   useEffect(() => {
      const slideInterval = setInterval(nextSlide, 4500);
  
      return () => clearInterval(slideInterval);
   }, []);
   
   return (
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#EB8426] hover:bg-[#EB6D20] text-white p-2 rounded-full"
        >
         <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
         </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#EB8426] hover:bg-[#EB6D20] text-white p-2 rounded-full"
        >
         <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
         </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-[#EB6D20]' : 'bg-gray-300'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
         </div>
      </div>
    );
}

export default Banner;
