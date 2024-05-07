'use client'
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import ReactSwitch from "react-switch";


const ContactForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
    }

    const [isEmail, setIsEmail] = useState(false);


    return (
        <form className='flex flex-col py-6' onSubmit={handleSubmit(onSubmit)}>
            <label className='flex flex-row justify-between'>
                Vaše ime
                <span className='text-right h-2 text-red-600'>{errors.name && 'Polje je obavezno'}</span>
            </label>
            <input {...register('name', {required: true})} type='text'/>
            <div className='flex flex-row justify-between gap-5 max-lg:flex-col max-lg:justify-start'>
                <div className='flex flex-col w-3/4 max-lg:w-full'>
                    {
                        isEmail ?
                            (
                                <>
                                    <label className='flex flex-row justify-between'>
                                        E-mail
                                        <span
                                            className='text-right h-2 text-red-600'>{errors.email && 'Polje je obavezno'}</span>
                                    </label>
                                    <input {...register('email', {required: true, pattern: /\d+/})} type='email'/>
                                </>
                            ) : (
                                <>
                                    <label className='flex flex-row justify-between'>
                                        Telefon
                                        <span
                                            className='text-right h-2 text-red-600'>{errors.phone && 'Polje je obavezno'}</span>
                                    </label>
                                    <input {...register('phone', {required: true, pattern: /\d+/})} type='text'/>
                                </>)
                    }
                </div>
                <div className='flex flex-col max-lg:flex-row'>
                    <span className='font-bold'>Koristi email</span>
                    <ReactSwitch checked={isEmail} className='ml-auto' onChange={() => setIsEmail(!isEmail)}/>
                </div>
            </div>
            <label className='flex flex-row justify-between'>
                Vaše pitanje
                <span className='text-right h-2 text-red-600'>{errors.name && 'Polje je obavezno'}</span>
            </label>
            <textarea {...register('question', {required: true})}/>
            <label className='flex flex-row justify-between'>Slika, Video (do 10mb)</label>
            <input type='file' multiple/>
            {/*<input className='btn-filled bg-orange mt-5' type='submit' value='Pošalji'/>*/}
            <button className='py-3 rounded-xl bg-gray-500 mt-5 cursor-not-allowed' disabled={true}>Forma je u fazi
                izrade
            </button>
        </form>
    );
};

export default ContactForm;
