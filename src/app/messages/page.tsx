"use client";
import Sidebar from "@/app/components/home/Sidebar";
import Trends from "@/app/components/home/Trends";
import Tweets from "@/app/components/home/Tweets";
import { useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import Navbar from "../components/home/Navbar";
import { LuMailPlus } from "react-icons/lu";
import Link from "next/link";
import Button from "../components/Buttons";
import RightColumn from "../components/RightColumn";
import CenterColumn from "../components/CenterColumn";

export default function MessagesPage() {

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
            <CenterColumn
                customClass="w-full md:w-3/4 lg:w-1/2 border border-gray-800"
            >
                <Navbar>
                    <div className="my-2 px-2">
                        <div className="flex items-center justify-between my-2">
                            <h2 className="text-xl font-bold text-white p-4">Messages</h2>
                            <div className="flex">
                                <Link href="#" className="text-white font-bold rounded-full hover:bg-gray-900 p-2">
                                    <CiSettings className="text-2xl" />
                                </Link>
                                <Link href="#" className="text-white font-bold rounded-full hover:bg-gray-900 p-2">
                                    <LuMailPlus className="text-2xl" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Navbar>
                <div className="w-full">
                    <div className="p-12 rounded-lg">
                        <h2 className="text-4xl font-bold">Welcome to your Inbox!</h2>
                        <p className="text-sm text-gray-500">Drop a line, share posts and more with private conversations between you and others on X.</p>
                        <Button
                            bgColor="bg-customColor"
                            textColor="text-white"
                            hoverColor="hover:bg-blue-500"
                            customClass="w-1/2 mt-4 p-4"
                        >
                            Write a message
                        </Button>
                    </div>
                </div>
            </CenterColumn>

            {/* Right column */}
            <RightColumn
                customClass="w-8/12 p-4 border-r border-gray-800"
            >
                <div className="w-full">
                    <div className="p-12 rounded-lg">
                        <h2 className="text-4xl font-bold">Select message</h2>
                        <p className="text-sm text-gray-500">Choose from your existing conversations, start a new one, or just keep swimming.</p>
                        <Button
                            bgColor="bg-customColor"
                            textColor="text-white"
                            hoverColor="hover:bg-blue-500"
                            customClass="w-1/2 mt-4 p-4"
                        >
                            New message
                        </Button>
                    </div>
                </div>
            </RightColumn>
        </main >

    )
}
