import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Image
                src="/x-white.png"
                alt="X logo"
                width={150}
                height={42}
                priority
            />
        </div>
    );
}
