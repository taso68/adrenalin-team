'use client'
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSidebarContext} from "@/app/providers/SidebarProvider";
import {companyData, phoneNumbers} from "@/app/data";
import {beautyNumber, hrefPhoneFormat} from "@/app/lib/phoneFormater";


const Header = () => {
    const pathname = usePathname();
    const isActive = (href: string): boolean => pathname === href;

    const {toggleSidebar} = useSidebarContext();


    return (
        <header className='min-w-full flex flex-row h-24'>
            <div className='side-header desktop'></div>
            <div className='w-full flex flex-row justify-between header-center'>
                <Link href='/' className='flex flex-row justify-center'>
                    <div className='flex flex-row justify-center'>
                        <div className='my-auto	border-r-2 pr-2 min-w-16 pl-2'>
                            <Image
                                src='/logo.svg'
                                alt='logo'
                                width='50'
                                height='50'
                            />
                        </div>
                        <div className='flex flex-col justify-center text-left pl-1'>
                        <span className='all-words-new-line font-bold'>
                            {companyData.name}
                        </span>
                            <span className='whitespace-nowrap'>
                            {companyData.slogan}
                        </span>
                        </div>
                    </div>
                </Link>
                <div className='nav-wrap flex flex-row items-center'>
                    <nav className='desktop flex flex-row items-center justify-between text-xl'>
                        <Link href='/' className={isActive('/') ? 'active-header-link' : 'header-link'}>
                            Home
                        </Link>
                        <Link href='./contact' className={isActive('/contact') ? 'active-header-link' : 'header-link'}>
                            Contact
                        </Link>
                    </nav>
                    <div className='h-full left flex flex-col text-xm trapezoid pl-6 text-bolder desktop'>
                        <span className='mt-5 font-bold'>{companyData.openHours}</span>
                        {phoneNumbers.map((number) => number.isHighlighted && (
                            <Link key={number.phone} href={hrefPhoneFormat(number.phone)}
                                  className='whitespace-nowrap font-bold'>{beautyNumber(number.phone)}</Link>
                        ))}
                    </div>
                    <div className='mobile' onClick={toggleSidebar}>
                        <Image
                            src='/icons/burger.svg'
                            alt='burger'
                            width='70'
                            height='70'
                        />
                    </div>
                </div>
            </div>
            <div className='side-header bg-orange desktop'></div>
        </header>
    );
};

export default Header;
