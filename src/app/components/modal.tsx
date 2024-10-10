import { IoClose } from 'react-icons/io5';
import React from 'react';
import Image from 'next/image';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-blue-700 bg-opacity-20 backdrop-blur-[2px] flex justify-center items-center">
            <div className="bg-black rounded-lg p-8 relative w-full max-w-full h-full max-h-full md:max-w-lg lg:max-h-lg md:h-5/6">

                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 text-white hover:text-gray-400"
                >
                    <IoClose size={24} />
                </button>

                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-0">
                    <Image
                        src="/x-white.png"
                        alt="X logo"
                        width={25}
                        height={25}
                        priority
                    />
                </div>

                <div>
                    {children}
                </div>
            </div>
        </div>
    );

};

export default Modal;
