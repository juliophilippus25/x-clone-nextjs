import { useState } from "react";
import Button from "./Buttons";
import { FaSearch } from "react-icons/fa";

export default function Search() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="sticky border-gray-800 h-auto top-0 w-full mb-4">
            <form className="flex items-center">
                <div className="flex items-center relative w-full">
                    <FaSearch
                        className={`absolute left-3 ${isFocused ? 'text-customColor' : 'text-gray-400'}`}
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 bg-zinc-900 rounded-full p-2 flex-grow outline-none focus:outline-customColor"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </div>
            </form>
        </div>
    );
}
