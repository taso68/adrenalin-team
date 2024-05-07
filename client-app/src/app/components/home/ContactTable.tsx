import React from 'react';
import {phoneNumbers} from "@/app/data";
import {beautyNumber, hrefPhoneFormat, hrefViberFormat, hrefWhatsUpFormat} from "@/app/lib/phoneFormater";
import Image from "next/image";

const ContactTable = () => {
    return (
        <table>
            <tbody>
            <tr>
                <th className='text-left w-3/6 font-bold text-2xl'>Broj</th>
                <th className='text-center w-1/6'>Poziv</th>
                <th className='text-center w-1/6'>WhatsApp</th>
                <th className='text-center w-1/6'>Viber</th>
            </tr>
            {phoneNumbers.map((phoneNumber) => (
                <tr key={phoneNumber.phone}>
                    <td className='text-lg font-bold w-2/5 py-2'>{beautyNumber(phoneNumber.phone)}</td>
                    <td className='w-1/6'>
                        <a href={hrefPhoneFormat(phoneNumber.phone)}>
                            <Image src="/icons/phone.svg" alt='phone' width={40} height={40}
                                   style={{width: 30, margin: 'auto'}}/>
                        </a>
                    </td>
                    <td className='w-1/6'>
                        <a href={hrefWhatsUpFormat(phoneNumber.phone)}>
                            <Image src="/icons/social/wa.svg" alt='phone' width={40} height={40}
                                   style={{width: 30, margin: 'auto'}}/>
                        </a>
                    </td>
                    <td className='w-1/6'>
                        <a href={hrefViberFormat(phoneNumber.phone)}>
                            <Image src="/icons/social/viber.svg" alt='phone' width={40} height={40}
                                   style={{width: 30, margin: 'auto'}}/>
                        </a>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ContactTable;
