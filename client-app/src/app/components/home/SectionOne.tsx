import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {hrefPhoneFormat} from "@/app/lib/phoneFormater";
import {phoneNumbers} from "@/app/data";

const SectionOne = () => {
    return (
        <section className='relative'>
            <h1 className='text-7xl my-5 font-bold max-sm:text-3xl max-sm"my-5'>Matić <span
                className='underline-orange'>Kop</span>
            </h1>
            <div className='flex justify-start mb-20 max-sm:flex-col-reverse  max-sm:mb-10'>
                <div className='text-3xl max-sm:text-2xl'>
                    <h3 className='mt-10 font-bold max-sm:mt-5'>Niskogradnja</h3>
                    <h3 className='mt-2 font-bold'>Sve vrste iskopa</h3>
                    <h3 className='mt-2 font-bold'>Vodovodne mreže</h3>
                    <h3 className='mt-2 font-bold'>Kanalizacione mreže</h3>
                </div>
                <div className='flex flex-col justify-center ml-32 max-sm:ml-0'>
                    <a className='btn-border mb-2 text-xl whitespace-nowrap'
                       href={hrefPhoneFormat(phoneNumbers[0].phone)}>
                        Kontakt
                        <Image src="/icons/phone.svg" alt='phone' width={40} height={40}
                               style={{width: 30, margin: 'auto'}}/>
                    </a>
                    <Link href='./usluge' className='btn-filled bg-orange text-xl'>Naše usluge</Link>
                </div>

                <Image id='faucet' src='/home/excavator.png' alt='test' width={400} height={400}/>
            </div>
        </section>
    );
};

export default SectionOne;
