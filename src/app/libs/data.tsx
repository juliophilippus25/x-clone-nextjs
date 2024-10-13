// lib/data.tsx

// Tipe untuk data pengguna
export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
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

export const getProfile = (username: any): User | undefined => {
    const users = getUsersFromLocalStorage();
    return users.find(user => user.username === username);
};