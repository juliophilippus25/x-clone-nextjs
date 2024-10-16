import { useEffect, useState } from "react";
import Link from "next/link";
import Avatar from "../Avatar";
import { getUsersFromLocalStorage } from '@/app/libs/data';
import { User } from '@/app/libs/data'; // Adjust the import based on where your User type is defined

export default function WhoToFollow() {
    const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]); // Specify User[] type

    useEffect(() => {
        // Get session from cookie
        const session = document.cookie.split('; ').find(row => row.startsWith('session='));
        if (session) {
            const sessionData = JSON.parse(session.split('=')[1]);
            setLoggedInUserId(sessionData.userId); // Set the logged-in user's ID
        }

        // Retrieve users from local storage
        const users = getUsersFromLocalStorage();

        // Filter out the logged-in user from the list of users to display
        const usersToFollow = users.filter(user => user.id !== loggedInUserId);
        setFilteredUsers(usersToFollow);
    }, [loggedInUserId]);

    return (
        <div className="border border-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-bold">Who to follow</h2>
            {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                    <Avatar key={user.username} username={user.username} name={user.name} />
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
