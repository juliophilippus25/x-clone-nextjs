import Logo from "@/app/components/logo";

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black z-50">
            <Logo width={150} height={42} />
        </div>
    );
}
