import type {Metadata} from "next";
import {Raleway} from "next/font/google";
import "./main.css";
import React from "react";
import {Providers} from "@/app/providers/Providers";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";
import {Analytics} from '@vercel/analytics/react';
import Head from "next/head";

const font = Raleway({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Adrenalin team",
    description: "At Adrenalin Team, we are passionate about crafting exceptional mobile experiences. With a team of skilled developers, designers, and strategists, we specialize in creating innovative iOS and Android applications tailored to meet the unique needs of our clients. Our commitment to excellence drives us to stay at the forefront of technology, ensuring that every app we build is not only user-friendly but also robust and scalable. Whether you're a startup looking to disrupt the market or a seasoned enterprise seeking digital transformation, we're here to turn your vision into reality.\n",
    keywords: 'At Adrenalin Team, we are passionate about crafting exceptional mobile experiences. With a team of skilled developers, designers, and strategists, we specialize in creating innovative iOS and Android applications tailored to meet the unique needs of our clients. Our commitment to excellence drives us to stay at the forefront of technology, ensuring that every app we build is not only user-friendly but also robust and scalable. Whether you\'re a startup looking to disrupt the market or a seasoned enterprise seeking digital transformation, we\'re here to turn your vision into reality.\n'
};

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
    return (
        <html lang="en">
        <Head>
            <link rel="icon" href="./favicon.png>" type="image/png" sizes="32x32"/>
        </Head>
        <body className={font.className}>
        <Providers>
            <Header/>
            {children}
            <Footer/>
            <Sidebar/>
            <Analytics/>
        </Providers>
        </body>
        </html>
    );
};

export default RootLayout;
