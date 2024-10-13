// lib/data.tsx

// user type
export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
}

// tweet type
export interface Tweet {
    id: string;
    userId: string;
    tweet: string;
    createdAt: string;
}

// get all user
export const getUsersFromLocalStorage = (): User[] => {
    const usersJson = localStorage.getItem("users");
    if (usersJson) {
        return JSON.parse(usersJson);
    }
    return [];
};

// get user by id
export const getUserById = (id: string): User | undefined => {
    const users = getUsersFromLocalStorage();
    return users.find(user => user.id === id);
};

// get user by username
export const getProfile = (username: any): User | undefined => {
    const users = getUsersFromLocalStorage();
    return users.find(user => user.username === username);
};

// get all tweets
export const getTweets = (): Tweet[] => {
    const tweetsJson = localStorage.getItem("tweets");
    if (tweetsJson) {
        return JSON.parse(tweetsJson);
    }
    return [];
};