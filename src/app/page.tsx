import Image from "next/image";
import { AppleButton, CreateAccountButton, GoogleButton, SignInButton } from "@/app/components/buttons";

export default function Home() {
  return (
    <>
      <main className="w-full px-12 py-12 md:px-24 lg:flex lg:justify-between">
        {/* Kolom Kiri */}
        <div className="flex items-center justify-start lg:justify-center lg:w-1/2">
          <Image
            src="/x-white.png"
            alt="X logo"
            width={250}
            height={42}
            className="w-[30px] lg:w-[250px]"
            priority
          />
        </div>

        {/* Kolom Kanan */}
        <div className="flex flex-col w-full lg:w-1/2">
          <p className="text-5xl font-bold mb-8 my-12 md:text-7xl">Happening now</p>
          <div className="w-full sm:w-9/12 md:w-9/12 lg:w-9/12">

            <div className="w-9/12">
              <div className="flex flex-col justify-center gap-2.5">
                <p className="text-2xl font-bold mb-4">Join today.</p>
                <GoogleButton />
                <AppleButton />
              </div>

              <div className="flex items-center my-2">
                <div className="flex-grow h-0.5 bg-gray-500" />
                <span className="mx-4 text-white">or</span>
                <div className="flex-grow h-0.5 bg-gray-500" />
              </div>

              <CreateAccountButton />
              <p className="text-gray-500 text-xs mt-2">
                By signing up, you agree to the{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Privacy Policy
                </a>
                , including{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Cookie Use
                </a>
                .
              </p>

              <div className="mt-5">
                <p className="text-white text-md font-bold my-3">Already have an account?</p>
                <SignInButton />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
