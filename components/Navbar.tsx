"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur flex items-center justify-between px-10 py-6 text-white bg-[#0d0c2d]">
            <div className="font-bold tracking-widest">KIET</div>

            <ul className="hidden md:flex gap-8 text-sm tracking-wide">
                <li 
                    onClick={() => router.push("/")}
                    className="cursor-pointer">Home</li>

                <li
                    onClick={() => router.push("/Committee")}
                    className="cursor-pointer"
                >
                    Committees
                </li>

                <li 
                    onClick={() => router.push("/prize")}
                    className="cursor-pointer">Prizes</li>
                <li 
                    onClick={() => router.push("/gallery")}
                    className="cursor-pointer">Gallery</li>
                <li    
                    onClick={() => router.push("/faqs")}
                    className="cursor-pointer">FAQs</li>
            </ul>

            <button onClick={()=>{router.push("/register")}} className="rounded-md bg-white px-5 py-2 text-sm font-semibold text-[#0d0c2d]">
                Register
            </button>
        </nav>
    );
}
