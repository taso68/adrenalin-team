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
    title: "Matić Kop",
    description: "Nudimo usluge iskopa za niskogradnju i vodovodne instalacije. Specijalizirani smo za iskope temelja, kanalizacije, drenažnih sistema, kao i za položaj vodovodnih cijevi. Sa stručnim timom i modernom opremom, pružamo kvalitetne i pouzdane usluge u građevinskoj industriji. Kontaktirajte nas za vaše projekte i potrebe.",
    keywords: 'vodoinstalater, Beograd, hitno, vodovod, kanalizacija, popravak, montaža, profesionalno, pouzdano, poplava, zagušenja, adaptacije, kupatilo, voda, Iskopi niskogradnje, vodovodni radovi, temelji građevinskih objekata, kanalizacijski sistemi, drenažni sistemi i položaj vodovodnih cijevi.'
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
