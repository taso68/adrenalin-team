import './css/pages/home.css'
import SectionOne from "@/app/components/home/SectionOne";

export default function Home() {

    return (
        <>
            <main id='home-s-1' className="flex flex-col items-center justify-between py-10 text-orange max-sm:py-0 ">
                <SectionOne/>
            </main>
            {/*<SectionThree/>*/}
        </>
    );
}
