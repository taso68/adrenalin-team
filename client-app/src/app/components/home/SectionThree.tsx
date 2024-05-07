import React from 'react';
import ContactTable from "@/app/components/home/ContactTable";
import ContactForm from "@/app/components/home/ContactForm";
import Marquee from "react-fast-marquee";
import {companyData} from "@/app/data";

const SectionThree = () => {
    return (
        <div id='contact-section' className='bg-brown-main pt-24'>
            <Marquee className='bg-orange absolute h-10 font-bold -top-12 z-0'>
                Možete nas kontaktirati bilo kada preko jednog od brojeva telefona ili preko kontakt forme
            </Marquee>
            <section className='text-orange py-2'>
                <h1 className='font-bold text-6xl text-center mb-8'>Kontakt</h1>
                <div
                    className='flex flex-row justify-between max-lg:flex-col max-lg:justify-center max-lg:items-center'>
                    <div id='phones' className='w-1/2 max-lg:w-full'>
                        <span
                            className='font-bold text-2xl underline-orange'>Pozovite nas ili nam posaljite poruku.</span>
                        <div className='h-full flex flex-col justify-evenly'>
                            <span className='underline font-bold text-2xl'>Brojevi telefona:</span>
                            <ContactTable/>
                            <span className='underline font-bold text-2xl'>Dostupni smo {companyData.openHours}</span>
                        </div>
                    </div>
                    <div className='w-1/2 max-lg:w-full max-lg:mt-10'>
                         <span
                             className='font-bold text-2xl underline-orange'>Postavite nam pitanje.</span>
                        <ContactForm/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SectionThree;
