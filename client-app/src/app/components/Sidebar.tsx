"use client"
import React, {createContext} from 'react';
import {useSidebarContext} from "@/app/providers/SidebarProvider";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {companyData, phoneNumbers} from "@/app/data";
import {beautyNumber, hrefPhoneFormat} from "@/app/lib/phoneFormater";

const SidebarContext = createContext(false);

const Sidebar = () => {
    const {isOpen, toggleSidebar} = useSidebarContext();
    const pathname = usePathname();
    const isActive = (href: string): boolean => pathname === href;

    return (
        <div
            className={`sidebar mobile flex justify-between pt-3 pb-5 flex-col h-dvh w-full ${isOpen ? 'show-sidebar' : ''} text-orange`}>
            <div className='flex flex-row justify-between'>
                <div className='my-auto pl-2'>
                    <Image
                        src='/logo.svg'
                        alt='logo'
                        width='70'
                        height='70'
                    />

                </div>
                <Image
                    src='/icons/close.svg'
                    alt='logo'
                    width='70'
                    height='70'
                    onClick={toggleSidebar}
                />
            </div>
            <ul className='text font-bold text-2xl text-center'>
                <li className='pt-5' onClick={toggleSidebar}>
                    <Link href='/'
                          className={isActive('/') ? 'link-sidebar' : 'active-link-sidebar'}>Početna</Link>
                </li>
                <li className='pt-5'>
                    <Link href='#'
                          className={isActive('/o-nama') ? 'link-sidebar' : 'active-link-sidebar'}
                          onClick={toggleSidebar}>Usluge</Link>
                </li>
                <li className='pt-5'>
                    <Link href='#'
                          className={isActive('/projekti') ? 'link-sidebar' : 'active-link-sidebar'}
                          onClick={toggleSidebar}>Galerija</Link>
                </li>
                <li className='pt-5'>
                    <Link href='#'
                          className={isActive('/usluge') ? 'link-sidebar' : 'active-link-sidebar'}
                          onClick={toggleSidebar}>Cenovnik</Link>
                </li>
            </ul>
            <div className='text-center text-2xl mt-10'>
                <p className='font-bold underline'>{companyData.openHours}</p>
                {
                    phoneNumbers.map((number) => number.isHighlighted && (
                        <a key={number.phone} href={hrefPhoneFormat(number.phone)}>
                            <p>{beautyNumber(number.phone)}</p>
                        </a>
                    ))
                }
            </div>
            {/*<div className='flex justify-center gap-10 mt-10'>*/}
            {/*    <Image*/}
            {/*        src='/icons/lang/en.svg'*/}
            {/*        alt='logo'*/}
            {/*        width='50'*/}
            {/*        height='50'*/}
            {/*    />*/}

            {/*    <Image*/}
            {/*        src='/icons/lang/srb.svg'*/}
            {/*        alt='logo'*/}
            {/*        width='50'*/}
            {/*        height='50'*/}
            {/*    />*/}
            {/*</div>*/}
            <div className='flex flex-row justify-center w-full mt-10 gap-5'>
                {
                    companyData.social.map((soc) => soc.isShowing && (
                        <Link key={soc.link} href={soc.link}>
                            <Image
                                src={soc.imagePath}
                                alt='logo'
                                width='70'
                                height='70'
                            />
                        </Link>
                    ))
                }
                {/*<Image*/}
                {/*    src='/icons/social/ig.svg'*/}
                {/*    alt='logo'*/}
                {/*    width='30'*/}
                {/*    height='30'*/}
                {/*/>*/}
                {/*<Image*/}
                {/*    src='/icons/social/tiktok.svg'*/}
                {/*    alt='logo'*/}
                {/*    width='30'*/}
                {/*    height='30'*/}
                {/*/>*/}
            </div>
        </div>

    );
};

export default Sidebar;
