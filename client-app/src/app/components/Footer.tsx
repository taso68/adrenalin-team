import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {companyData, phoneNumbers} from "@/app/data";
import {beautyNumber, hrefPhoneFormat} from "@/app/lib/phoneFormater";

const Footer = () => {
    return (
        <footer className='bg-brown-main'>
            <div
                className='text-white font-bold py-10 flex flex-row justify-between content mx-auto max-sm:flex-col px-2 max-sm:py-2'>
                <div className='flex flex-row justify-center my-auto'>
                    <div className='border-r-2 pr-2 min-w-16 pl-2 flex items-center max-h-24'>
                        <Image
                            src='/logo.svg'
                            alt='logo'
                            width='100'
                            height='100'
                        />
                    </div>
                    <div className='flex flex-col justify-center text-left pl-1'>
                        <span className='whitespace-nowrap'>
                            {companyData.name}
                        </span>
                        <span className='whitespace-nowrap'>
                            {companyData.slogan}
                        </span>
                    </div>
                </div>
                <div className='flex flex-col justify-start '>
                    <h4 className='underline-orange text-xl mb-2 max-sm:text-3xl'>Usluge</h4>
                    <p className='font-bold'>Niskogradnja</p>
                    <p className='font-bold'>Sve vrste iskopa</p>
                    <p className='font-bold'>Vodovodne mreže</p>
                    <p className='font-bold'>Kanalizacione mreže</p>
                </div>
                <div className='max-sm:my-2'>
                    <h4 className='underline-orange text-xl max-sm:text-3xl'>Kontakt</h4>
                    <span>
                        Telefoni:
                    </span>
                    <ul>
                        {
                            phoneNumbers.map((phone) => phone.isHighlighted && (
                                <li key={phone.phone}>
                                    <Link href={hrefPhoneFormat(phone.phone)}>{beautyNumber(phone.phone)}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <span>
                        e-mail:
                    </span>
                    <ul>
                        <li>{companyData.email}</li>
                    </ul>
                </div>
            </div>
            <div className='h-10 bg-brown-light text-white font-bold flex items-center'>
                <span className='content mx-auto max-sm:ml-2 max-sm:mx-auto'>
                ©Matić Kop. Sva prava zadrzana
                </span>
            </div>
        </footer>
    );
};

export default Footer;
