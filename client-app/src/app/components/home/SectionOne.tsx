import React from 'react';

const SectionOne = () => {
    const data = "At Adrenalin Team, we are passionate about crafting\n" +
        "                        exceptional mobile experiences. With a team of skilled developers, designers, and strategists,\n" +
        "                        we specialize in creating innovative iOS and Android applications tailored to meet the unique\n" +
        "                        needs of our clients. Our commitment to excellence drives us to stay at the forefront of\n" +
        "                        technology, ensuring that every app we build is not only user-friendly but also robust and\n" +
        "                        scalable. Whether you're a startup looking to disrupt the market or a seasoned enterprise\n" +
        "                        seeking digital transformation, we're here to turn your vision into reality.";
    return (
        <section className='relative'>
            <h1 className='text-7xl my-5 font-bold max-sm:text-3xl max-sm"my-5'>Adrenalin <span
                className='underline-orange'>Team</span>
            </h1>
            <div className='flex justify-start mb-20 max-sm:flex-col-reverse  max-sm:mb-10'>
                <div className='text-3xl max-sm:text-2xl'>
                    <h3 className='mt-10 font-bold max-sm:mt-5'>{data}</h3>
                </div>

                {/*<Image id='faucet' src='/home/excavator.png' alt='test' width={400} height={400}/>*/}
            </div>
        </section>
    );
};

export default SectionOne;
