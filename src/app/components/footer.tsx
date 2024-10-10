import Link
    from "next/link";
export default function Footer() {
    return (
        <footer className="text-gray-500 text-sm mt-16">
            <div className="flex flex-wrap px-5 justify-center gap-3">
                <Link href="#" className="hover:underline">About</Link>
                <Link href="#" className="hover:underline">Download the X app</Link>
                <Link href="#" className="hover:underline">Help Center</Link>
                <Link href="#" className="hover:underline">Term of Service</Link>
                <Link href="#" className="hover:underline">Privacy Policy</Link>
                <Link href="#" className="hover:underline">Cookie Policy</Link>
                <Link href="#" className="hover:underline">Accessibillity</Link>
                <Link href="#" className="hover:underline">Ads info</Link>
                <Link href="#" className="hover:underline">Blog</Link>
                <Link href="#" className="hover:underline">Careers</Link>
                <Link href="#" className="hover:underline">Brand Resources</Link>
                <Link href="#" className="hover:underline">Advertising</Link>
                <Link href="#" className="hover:underline">Marketing</Link>
                <Link href="#" className="hover:underline">X for Business</Link>
                <Link href="#" className="hover:underline">Developers</Link>
                <Link href="#" className="hover:underline">Directory</Link>
                <Link href="#" className="hover:underline">Careers</Link>
                <Link href="#" className="hover:underline">&copy; {new Date().getFullYear()} X Corp.</Link>
            </div>
        </footer>
    );
}