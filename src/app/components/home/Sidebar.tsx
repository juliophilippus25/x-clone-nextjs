import Logo from "@/app/components/Logo";
import Link from "next/link";
import { IoIosHome, IoIosSearch, IoIosNotifications, IoIosMail, IoIosBook, IoIosPeople, IoIosStar, IoIosCheckmarkCircle, IoIosMore, IoIosPerson, IoIosAdd } from "react-icons/io";
import Button from "@/app/components/Buttons";
import Image from "next/image";

const navItems = [
    { label: "", href: "/home", icon: <Logo width={26} height={26} className="p-1" /> },
    { label: "Home", href: "/home", icon: <IoIosHome size={26} /> },
    { label: "Explore", href: "/explore", icon: <IoIosSearch size={26} /> },
    { label: "Notifications", href: "/notifications", icon: <IoIosNotifications size={26} /> },
    { label: "Messages", href: "/messages", icon: <IoIosMail size={26} /> },
    { label: "Grok", href: "/grok", icon: <IoIosBook size={26} /> },
    { label: "Communities", href: "/communities", icon: <IoIosPeople size={26} /> },
    { label: "Premium", href: "/premium", icon: <IoIosStar size={26} /> },
    { label: "Verified Orgs", href: "/verified-orgs", icon: <IoIosCheckmarkCircle size={26} /> },
    { label: "Profile", href: "/profile", icon: <IoIosPerson size={26} /> },
    { label: "More", href: "/more", icon: <IoIosMore size={26} /> },
];


export default function Sidebar() {
    return (
        <div className="w-2/8 sticky top-0 h-screen lg:w-4/12 p-2">
            <ul className="h-full flex flex-col justify-between items-center lg:items-start">
                {navItems.map((item) => (
                    <li key={item.label} className="flex hover:bg-gray-900 hover:rounded-full p-2 transition-all">
                        <Link href={item.href} className="flex">
                            <div className="flex-shrink-0">{item.icon}</div>
                            <span className="ml-2 hidden lg:block">{item.label}</span>
                        </Link>
                    </li>
                ))}
                <Button
                    textColor="text-white"
                    bgColor="bg-customColor"
                    hoverColor="hover:bg-blue-500"
                    customClass="p-3 mt-2 w-[40px] lg:w-full text-xs lg:text-sm"
                >
                    <span className="hidden md:inline">Post</span>
                    <span className="inline md:hidden">
                        <IoIosAdd size={26} />
                    </span>
                </Button>

                <div className="flex items-center justify-between mt-8 p-2 rounded-full w-full cursor-pointer hover:bg-gray-900 transition-all">
                    <div className="flex items-center">
                        <Image src="/avatar.jpg" alt="Avatar" width={10} height={10} className="rounded-full w-10 h-10" />
                        <div className="ml-2 flex flex-col justify-center">
                            <p className="text-white hidden lg:block">Julio Philippus</p>
                            <p className="text-gray-600 hidden lg:block">@julzybaee</p>
                        </div>
                    </div>
                </div>

            </ul>
        </div>

    );
}
