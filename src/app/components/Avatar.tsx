import Image from "next/image";
import Button from "./Buttons";
import { MdVerified } from "react-icons/md";

export default function Avatar() {
    return (
        <div className="flex items-center justify-between py-2 rounded-full w-full cursor-pointer">
            <div className="flex items-center">
                <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="rounded-full w-10 h-10" />
                <div className="ml-2 flex flex-col">
                    <p className="text-white hidden lg:flex items-center">
                        Julio Philippus <MdVerified className="ml-1 text-lg text-customColor" />
                    </p>
                    <p className="text-gray-600 hidden lg:block">@julzybaee</p>
                </div>
            </div>
            <div className="ml-auto">
                <Button
                    bgColor="bg-white"
                    textColor="text-black"
                    hoverColor="hover:bg-gray-200"
                    customClass="p-2"
                >
                    Follow
                </Button>
            </div>
        </div>
    );
}
