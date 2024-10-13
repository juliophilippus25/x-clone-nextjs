"use client";
import Sidebar from "@/app/components/home/Sidebar";
import Trends from "@/app/components/home/Trends";
import Tweets from "@/app/components/home/Tweets";
import { useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import Navbar from "../components/home/Navbar";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Search from "../components/Search";

export default function ProfilePage() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const footer = document.getElementById('footer');
            if (footer) {
                footer.style.display = 'none';
            }
        }
    })

    return (
        <main className="flex md:px-24 lg:px-32">
            {/* Left column */}
            <Sidebar />

            {/* Center column */}
            <div className="w-full md:w-3/4 lg:w-8/12 border border-gray-800">
                <Navbar>
                    <div className="my-2 px-4">
                        <div className="flex items-center justify-between my-2">
                            <Search customClass="w-10/12" />
                            <Link href="/home" className="text-white font-bold rounded-full hover:bg-gray-900 p-2">
                                <CiSettings className="text-2xl" />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full">
                        <nav className="flex items-center justify-between">
                            <Link href="#" className="text-white font-bold block w-full text-center hover:bg-gray-900 py-2">For you</Link>
                            <Link href="#" className="text-gray-500 font-bold block w-full text-center hover:bg-gray-900 py-2">Trending</Link>
                            <Link href="#" className="text-gray-500 font-bold block w-full text-center hover:bg-gray-900 py-2">News</Link>
                            <Link href="#" className="text-gray-500 font-bold block w-full text-center hover:bg-gray-900 py-2">Sports</Link>
                            <Link href="#" className="text-gray-500 font-bold block w-full text-center hover:bg-gray-900 py-2">Entertaiment</Link>
                        </nav>
                    </div>
                </Navbar>
                <div className="w-full">
                    <div className="border border-gray-800 p-4 rounded-lg">
                        <h2 className="text-lg font-bold">Trends for you</h2>
                        <div className="py-2">
                            <p className="text-xs text-gray-500">Trending</p>
                            <h3 className="text-white font-semibold">#AFCWC24</h3>
                            <p className="text-xs text-gray-500">36.8K posts</p>
                        </div>
                        <div className="py-2">
                            <p className="text-xs text-gray-500">Trending in Indonesia</p>
                            <h3 className="text-white font-semibold">Wasit</h3>
                            <p className="text-xs text-gray-500">36.8K posts</p>
                        </div>
                        <div className="py-2">
                            <p className="text-xs text-gray-500">Sports - Trending</p>
                            <h3 className="text-white font-semibold">Indonesia vs Bahrain</h3>
                            <p className="text-xs text-gray-500">36.8K posts</p>
                        </div>

                        <div className="py-2">
                            <p className="text-xs text-gray-500">Trending in Indonesia</p>
                            <h3 className="text-white font-semibold">#Fyp</h3>
                            <p className="text-xs text-gray-500">36.8K posts</p>
                        </div>

                        <div className="py-2">
                            <p className="text-xs text-gray-500">Trending</p>
                            <h3 className="text-white font-semibold">Rexus</h3>
                            <p className="text-xs text-gray-500">36.8K posts</p>
                        </div>

                        <div className="py-2">
                            <p className="text-xs text-gray-500">Trending</p>
                            <h3 className="text-white font-semibold">Next js</h3>
                            <p className="text-xs text-gray-500">36.8K posts</p>
                        </div>
                    </div>
                </div>
                <Tweets />
            </div>

            {/* Right column */}
            <Trends />
        </main >

    )
}
