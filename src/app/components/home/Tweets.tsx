import Image from "next/image";
import Button from "../Buttons";
import { FaRegComment, FaRetweet, FaRegHeart, FaChartBar, FaShareAlt, FaBookmark } from 'react-icons/fa';

export default function Tweets() {
    return (
        <>
            <div className="p-4 border-t border-gray-800">
                <div className="h-auto">
                    <div className="flex justify-center">
                        <div className="flex-shrink-0">
                            <Image src="/avatar.jpg" alt="Avatar" width={50} height={50} className="w-10 h-10 rounded-full" />
                        </div>
                        <div className="flex-grow ml-2">
                            <p className="text-white">Name <span className="text-gray-500">@username</span></p>
                            <div className="flex justify-end mt-2">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nulla earum explicabo impedit quibusdam doloremque esse tenetur quam molestiae!</p>
                            </div>
                            <div className="flex items-center justify-start mt-4 gap-4 lg:gap-10 cursor-pointer text-sm lg:text-lg">
                                <span className="text-gray-500 flex items-center">
                                    <FaRegComment className="text-gray-500 hover:text-white" />
                                    <span className="ml-1">18.5K</span>
                                </span>
                                <span className="text-gray-500 flex items-center">
                                    <FaRetweet className="text-gray-500 hover:text-white" />
                                    <span className="ml-1">19.2K</span>
                                </span>
                                <span className="text-gray-500 flex items-center">
                                    <FaRegHeart className="text-gray-500 hover:text-white" />
                                    <span className="ml-1">12.3K</span>
                                </span>
                                <span className="text-gray-500 flex items-center">
                                    <FaChartBar className="text-gray-500 hover:text-white" />
                                    <span className="ml-1">12.3K</span>
                                </span>
                                <FaBookmark className="text-gray-500 hover:text-white" />
                                <FaShareAlt className="text-gray-500 hover:text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
