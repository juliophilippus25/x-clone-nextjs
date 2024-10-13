import Link from "next/link";
import Avatar from "../Avatar";
import { getUsersFromLocalStorage } from '@/app/libs/data';

export default function WhoToFollow() {
    // Retrieve users from local storage
    const users = getUsersFromLocalStorage();

    return (
        <div className="border border-gray-800 p-4 rounded-lg mt-4">
            <h2 className="text-lg font-bold">Who to follow</h2>
            {users.length > 0 ? (
                users.map(user => (
                    <Avatar key={user.username} username={user.username}
                        name={user.name} />
                ))
            ) : (
                <p className="text-gray-500">No users to follow</p>
            )}

            <Link href="#" className="text-customColor">
                Show more
            </Link>
        </div>
    );
}
