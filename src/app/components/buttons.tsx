import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export const GoogleButton = () => {
    return (
        <button
            type="submit"
            className="w-full text-black bg-white hover:bg-gray-200 font-semibold rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center"
        >
            <FcGoogle size={18} className="mr-1" />
            Sign up with Google
        </button>
    );
}

export const AppleButton = () => {
    return (
        <button
            type="submit"
            className="w-full text-black bg-white hover:bg-gray-200 font-semibold rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center"
        >
            <FaApple size={18} className="mr-1" />
            Sign up with Apple
        </button>
    );
}

export const CreateAccountButton = () => {
    return (
        <button
            type="submit"
            className="w-full text-white bg-customColor hover:bg-blue-500 font-semibold rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center"
        >
            Create account
        </button>
    );
}

export const SignInButton = () => {
    return (
        <button
            type="submit"
            className="w-full text-customColor border border-customColor bg-black hover:bg-slate-900 font-semibold rounded-full text-md px-5 py-2.5 text-center flex items-center justify-center"
        >
            Sign In
        </button>
    );
}
