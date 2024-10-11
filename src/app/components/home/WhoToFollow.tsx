import Link from "next/link";
import Avatar from "../Avatar";

export default function WhoToFollow() {
    return (
        <>
            <div className="border border-gray-800 p-4 rounded-lg mt-4">
                <h2 className="text-lg font-bold">Who to follow</h2>
                <Avatar />
                <Avatar />
                <Avatar />

                <Link href="#" className="text-customColor">
                    Show more
                </Link>
            </div>
        </>
    );
}
