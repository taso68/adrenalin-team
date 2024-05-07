import Link from "next/link";

export default function Page() {

    return (
        <div>
            <section>
                <h1 className='text-5xl font-bold pb-3 text-orange'>Usluge</h1>
                <h2 className='text-3xl mb-2'>Naša stranica je vaša prva stanica za sve <span
                    className='underline-orange'>vodoinstalaterske</span> usluge.</h2>
                <p className='text-lg'> Naš tim sa dugogodišnjim iskustvom je ovde da vam pruži brza, efikasna i
                    pouzdana rešenja za sve
                    izazove sa vodom koje možete imati.</p>
            </section>
            {/*ODGUSENJA START */}
            <section>
                <h1 className='text-5xl font-bold pb-3 text-orange'>Odgusenja</h1>
                <p className='mb-3'>Rešavamo vaše probleme sa <span
                    className='font-bold'>začepljenom kanalizacijom</span> brzo i
                    efikasno! Naš tim vodoinstalatera pruža
                    <span className='font-bold'> mašinsko</span> i ručno odgušenje kanalizacije svih vrsta.</p>
                <p className='font-bold text-lg mt-2'>Zašto izabrati nas:</p>
                <ul className='mb-5'>
                    <li><span className='font-bold'>Brza i Efikasna Reakcija:</span> Naš tim je spreman da reši vaš
                        problem u najkraćem mogućem roku
                    </li>
                    <li><span className='font-bold'>Iskustvo i Stručnost:</span> Sa godinama iskustva, pouzdani smo u
                        svakom zadatku koji nam se postavi
                    </li>
                    <li><span className='font-bold'>Kvalitetna Usluga:</span> Kvalitet je naš prioritet. Svaki posao
                        obavljamo pažljivo i temeljno
                    </li>
                </ul>
                <Link className='btn-border' href='#'> Više </Link>
            </section>
            {/*ODGUSENJA END */}
            {/*Adaptacije START */}
            <section>
                <h1 className='text-5xl font-bold pb-3 text-orange'>Adaptacije</h1>
                <p className='mb-3'>Želite da osvežite izgled svog doma ili poboljšate funkcionalnost prostora? Naš tim
                    vodoinstalatera
                    je tu da vam pomogne! Nudimo širok spektar usluga adaptacija koje obuhvataju renovaciju kupatila,
                    kuhinja, podrumskih instalacija, zamenu vertikala u zgradama i još mnogo toga.</p>
                <p className='font-bold'>Šta nudimo: </p>
                <ul className='mb-5'>
                    <li><span className='font-bold'>Kompletna Usluga: </span>Sve što vam je potrebno, od planiranja do
                        izvođenja, jednostavno kod nas.
                    </li>
                    <li><span className='font-bold'>Kvalitetan Rad: </span>Visoki standardi kvaliteta garantovani u
                        svakom projektu.

                    </li>
                    <li><span className='font-bold'>Posvećenost Klijentu: </span>Vaše zadovoljstvo je naš prioritet.
                        Radimo sa vama tokom celog procesa.
                    </li>
                </ul>
                <Link className='btn-border' href='#'> Više </Link>
            </section>
            {/*Adaptacije END */}
            {/*Intervencije START */}
            <section>
                <h1 className='text-5xl font-bold pb-3 text-orange'>Intervencije</h1>
                <p className='mb-3'>Rešavamo hitne situacije <span className='font-bold'> brzo i efikasno</span>, bilo
                    da su u pitanju poplave, izlivanje
                    kanalizacije ili
                    slični problemi.</p>
                <ul className='mb-5'>
                    <li><span className='font-bold'>Brza Reakcija: </span>Naš tim je dostupan 24/7 i reaguje u najkraćem
                        mogućem roku na vaše pozive za pomoć.
                    </li>
                    <li><span className='font-bold'>Stručnost i Sigurnost: </span>Sa dugogodišnjim iskustvom,
                        osiguravamo sigurno i efikasno rešenje svakog problema sa vodoinstalacijama.
                    </li>
                    <li><span className='font-bold'>Bezbednost i Pouzdanost: </span>Vaše bezbednost je naš prioritet.
                        Radimo pažljivo i odgovorno kako bismo minimizirali štetu i rešili problem bez komplikacija.
                    </li>
                </ul>
                <Link className='btn-border' href='#'> Više </Link>
            </section>
            {/*Intervencije END */}
            {/*Iskopi START */}
            <section>
                <h1 className='text-5xl font-bold pb-3 text-orange'>Iskopi</h1>
                <p className='mb-3'>Obavljamo <span className='font-bold'>iskope bagerom</span>, kopanje rovova za cevi
                    i rušenje objekata sa našim
                    bagerom</p>
                <ul className='mb-5'>
                    <li><span className='font-bold'>Efikasni Iskopi: </span>Naša oprema omogućava brze i precizne
                        iskope, bez obzira na veličinu projekta.
                    </li>
                    <li><span className='font-bold'>Kopanje Rova za Cevi: </span>Precizno kopamo rovove za postavljanje
                        cevi, osiguravajući optimalnu dubinu i položaj.
                    </li>
                    <li><span className='font-bold'>Rušenje: </span>Bezbedno i pažljivo rušimo objekte koristeći naš
                        bager od 3 tone, osiguravajući minimalnu štetu i bezbednost na gradilištu.
                    </li>
                </ul>
                <Link className='btn-border' href='#'> Više </Link>
            </section>
            {/*Iskopi END */}
            {/*Crpljenja START */}
            <section>
                <h1 className='text-5xl font-bold pb-3 text-orange'>Crpljenja</h1>
                <p className='mb-3'>Efikasno rešavamo probleme sa vodom korišćenjem potapajuće pumpe za <span
                    className='font-bold'>crpljenje vode iz podruma ili bilo kog drugog prostora.</span></p>
                <ul className='mb-5'>
                    <li><span className='font-bold'>Brzo Rešavanje Problema: </span>Naša potapajuća pumpa omogućava brzo
                        uklanjanje vode iz podruma ili drugih poplavljenih prostora.
                    </li>
                </ul>
                <Link className='btn-border' href='#'> Više </Link>
            </section>
            {/*Crpljenja END */}
        </div>
    )
}
