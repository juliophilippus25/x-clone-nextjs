"use client";
import Sidebar from "@/app/components/home/Sidebar";
import Trends from "@/app/components/home/Trends";
import Tweets from "@/app/components/home/Tweets";
import { useEffect, useState } from "react";
import Button from "../components/Buttons";
import Navbar from "../components/home/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "next/navigation";
import { MdOutlineDateRange } from "react-icons/md";
import { getProfile } from "../lib/data";
import { MdVerified } from "react-icons/md";

export default function ProfilePage() {

    const params = useParams();
    const profile = getProfile(params.profile);

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
                        <div className="flex items-center justify-start my-2">
                            <Link href="/home" className="text-white font-bold rounded-full hover:bg-gray-900 p-2">
                                <FaArrowLeft />
                            </Link>
                            <div className="ml-8">
                                <h2 className="text-xl font-bold text-white">{profile?.username}</h2>
                                <p className="text-sm text-gray-500">31 posts</p>
                            </div>
                        </div>
                    </div>
                </Navbar>
                <div className="w-full">
                    <Image
                        src="/avatar.jpg"
                        alt="Avatar"
                        width={50}
                        height={50}
                        className="w-full h-[150px] lg:h-[180px] object-cover rounded-t-lg"
                    />
                    <div className="flex justify-between items-end h-16 relative">
                        <div className="relative -top-6 left-8 lg:top-0 lg:left-4 border-4 border-black rounded-full shadow-lg">
                            <Image
                                src="/avatar.jpg"
                                alt="Avatar"
                                width={50}
                                height={50}
                                className="w-24 h-24 rounded-full lg:w-36 lg:h-36"
                            />
                        </div>
                        <Button
                            borderColor="border border-gray-800"
                            hoverColor="hover:bg-gray-900"
                            customClass="w-1/3 text-sm p-2 mt-4 mr-4"
                        >
                            Edit Profile
                        </Button>
                    </div>
                </div>

                <div className="p-4 rounded mt-2 mb-4 flex justify-center">
                    <div className="flex-grow ml-2">
                        <div className="flex">
                            <h2 className="text-xl font-bold text-white">{profile?.name}</h2>
                            <Button
                                textColor="text-white"
                                borderColor="border border-gray-800"
                                hoverColor="hover:bg-gray-900"
                                customClass="ml-4 w-40 text-sm"
                            >
                                <MdVerified className="ml-1 text-lg text-customColor" />&nbsp;Get Verified
                            </Button>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-gray-500">@{profile?.username}</p>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, autem!
                            </p>
                            <div className="flex items-center text-gray-500 mt-2">
                                <MdOutlineDateRange className="mr-1" />
                                <p>Joined July 2022</p>
                            </div>
                            <div className="flex text-gray-500 mt-2">
                                <p className="mr-2">
                                    <span className="text-white">19.8K</span> Following
                                </p>
                                <p>
                                    <span className="text-white">194.8K</span> Followers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <nav className="flex items-center justify-between">
                        <Link href="#" className="text-white font-bold block w-full text-center hover:bg-gray-900 py-2">Posts</Link>
                        <Link href="#" className="text-gray-500 font-bold block w-full text-center hover:bg-gray-900 py-2">Replies</Link>
                        <Link href="#" className="text-gray-500 font-bold block w-full text-center hover:bg-gray-900 py-2">Highlights</Link>
                        <Link href="#" className="text-gray-500 font-bold block w-full text-center hover:bg-gray-900 py-2">Articles</Link>
                        <Link href="#" className="text-gray-500 font-bold block w-full text-center hover:bg-gray-900 py-2">Media</Link>
                    </nav>
                </div>

                <Tweets /><Tweets /><Tweets /><Tweets /><Tweets /><Tweets /><Tweets /><Tweets /><Tweets /><Tweets /><Tweets /><Tweets />
            </div>

            {/* Right column */}
            <Trends />
        </main >

    )
}
