'use client'
import React from 'react';
import CustomGallery from "@/app/components/CustomGallery";


const SectionTwo = () => {
    const images = [
        {
            original: "/gallery/gallery1.jpg",
            thumbnail: "/gallery/gallery1.jpg",
            originalClass: 'min-w-full'
        },
        {
            original: "/gallery/gallery2.jpg",
            thumbnail: "/gallery/gallery2.jpg",
            originalClass: 'min-w-full'
        },
        {
            original: "/gallery/gallery3.webp",
            thumbnail: "/gallery/gallery3.webp",
            originalClass: 'min-w-full'
        },
        {
            original: "/gallery/gallery4.jpg",
            thumbnail: "/gallery/gallery4.jpg",
            originalClass: 'min-w-full'
        },
        {
            original: "/gallery/gallery5.jpg",
            thumbnail: "/gallery/gallery5.jpg",
            originalClass: 'min-w-full'
        },
        {
            original: "/gallery/gallery6.jpg",
            thumbnail: "/gallery/gallery6.jpg",
            originalClass: 'min-w-full'
        },
    ];
    return (
        <section id='home-s-2' className='flex flex-row justify-center items-center flex-wrap'>
            <CustomGallery items={images}/>
        </section>
    );
};

export default SectionTwo;
