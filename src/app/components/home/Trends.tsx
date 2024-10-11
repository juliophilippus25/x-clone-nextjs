import Link from "next/link";
import WhoToFollow from "@/app/components/home/WhoToFollow";
import Search from "../Search";

export default function Trends() {
    return (
        <div className="hidden lg:block w-2/5 p-4 ml-4">
            <Search />
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

                <Link href="#" className="text-customColor">
                    Show more
                </Link>
            </div>
            <WhoToFollow />
        </div>
    );
}
