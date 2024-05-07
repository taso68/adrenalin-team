import React from 'react';
import Link from "next/link";
import Image from "next/image";

export interface cardPropsInterface {
    title: string;
    imageHref: string;
    text: string;
    pageUrl: string;
}

function Card(props: cardPropsInterface) {
    return (
        <div
            className='w-1/4 min-w-72 brown-l-bg rounded-2xl orange-box-shadow-hover text-center p-5 flex flex-col justify-between'>
            <div className='flex flex-col justify-between items-center'>
                <h3 className='text-orange text-3xl'>{props.title}</h3>
                <Image src={props.imageHref} alt='img' width='100' height='100'/>
                <p className='text-dirty-white'>{props.text}</p>
            </div>
            <Link
                className='btn-border text-orange mx-5 my-5'
                href={props.pageUrl}
            >VIŠE</Link>
        </div>
    );
}

export default Card;