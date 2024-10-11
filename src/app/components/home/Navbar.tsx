"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`sticky border-b border-gray-800 h-auto top-0 w-full transition-all duration-300 ${isScrolled ? "bg-transparent backdrop-filter backdrop-blur-[2px]" : "bg-black"}`}>
            <h2 className="text-xl font-bold text-white p-4 md:hidden">Home</h2>
            <nav className="flex items-center justify-between">
                <Link href="#" className="text-white font-bold block w-full text-center hover:bg-gray-900 py-2">For you</Link>
                <Link href="#" className="text-white font-bold block w-full text-center hover:bg-gray-900 py-2">Following</Link>
            </nav>
        </div>
    );
}
