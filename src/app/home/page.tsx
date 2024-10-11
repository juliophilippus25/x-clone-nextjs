"use client"
import Sidebar from "@/app/components/home/Sidebar";
import Trends from "@/app/components/home/Trends";
import Tweets from "@/app/components/home/Tweets";
import { useEffect } from "react";
import Button from "../components/Buttons";
import Navbar from "../components/home/Navbar";
import Image from "next/image";

export default function HomePage() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            var footer = document.getElementById('footer');
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
                <Navbar />
                <div className="p-4 rounded shadow mb-4 flex justify-center">
                    <div className="flex-shrink-0">
                        <Image src="/avatar.jpg" alt="Avatar" width={50} height={50} className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="flex-grow ml-2">
                        <textarea
                            className="w-fullborder-none focus:outline-none rounded p-2 w-full"
                            rows={4}
                            placeholder="What is happening?!"
                            style={{ backgroundColor: '#0a0a0a' }}
                        ></textarea>
                        <div className="border border-gray-800"></div>
                        <div className="flex justify-end mt-2">
                            <Button
                                textColor="text-white"
                                bgColor="bg-customColor"
                                hoverColor="hover:bg-blue-500"
                                customClass="p=2 py-2 w-1/6 lg:w-[80px] mt-2 text-xs lg:text-sm"
                            >
                                Post
                            </Button>
                        </div>
                    </div>
                </div>

                <Tweets /><Tweets /><Tweets /><Tweets /><Tweets /><Tweets /><Tweets /><Tweets /><Tweets />
            </div>

            {/* Right column */}
            <Trends />
        </main>

    )
}
