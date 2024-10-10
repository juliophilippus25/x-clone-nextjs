// components/YourButtonComponent.tsx
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

interface ButtonProps {
    onClick?: () => void;
}

export const GoogleButton: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full text-black bg-white hover:bg-gray-200 font-semibold rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center"
        >
            <FcGoogle size={18} className="mr-1" />
            Sign up with Google
        </button>
    );
};

export const AppleButton: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full text-black bg-white hover:bg-gray-200 font-semibold rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center"
        >
            <FaApple size={18} className="mr-1" />
            Sign up with Apple
        </button>
    );
};

export const CreateAccountButton: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full text-white bg-customColor hover:bg-blue-500 font-semibold rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center"
        >
            Create account
        </button>
    );
};

export const SignInButton: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full text-customColor border border-gray-600 bg-black hover:bg-slate-900 font-semibold rounded-full text-md px-5 py-2.5 text-center flex items-center justify-center"
        >
            Sign In
        </button>
    );
};

export const NextButton: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full text-black bg-white hover:bg-gray-200 font-semibold rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center"
        >
            Next
        </button>
    );
};

export const CreateAccountButtonV2: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full text-black bg-white hover:bg-gray-200 font-semibold rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center"
        >
            Create account
        </button>
    );
};

export const ForgotPassword: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full text-white bg-black border border-slate-500 hover:bg-gray-900 font-semibold rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center"
        >
            Forgot Password?
        </button>
    );
};

export const SignUpButton: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full text-black bg-white hover:bg-gray-200 font-semibold rounded-full text-sm px-5 py-4 text-center flex items-center justify-center"
        >
            Sign Up
        </button>
    );
};
