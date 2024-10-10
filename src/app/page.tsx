"use client"
import Image from "next/image";
import { useState } from "react";
import Modal from "@/app/components/modal"; // Pastikan path sesuai
import { AppleButton, CreateAccountButtonV2, CreateAccountButton, ForgotPassword, GoogleButton, NextButton, SignInButton, SignUpButton } from "@/app/components/buttons";
import Link from "next/link";
import Line from "./components/line";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'signIn' | 'signUp' | 'googleAccount' | 'appleAccount' | 'createAccount' | 'forgotPassword' | null>(null);

  const openModal = (type: 'signIn' | 'signUp' | 'googleAccount' | 'appleAccount' | 'createAccount' | 'forgotPassword') => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
  };


  return (
    <>
      <main className="w-full px-12 py-12 md:px-24 lg:flex lg:justify-between">
        {/* Left column */}
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

        {/* Right coloumn */}
        <div className="flex flex-col w-full lg:w-1/2">
          <p className="text-5xl font-bold mb-8 my-12 md:text-7xl">Happening now</p>

          <div className="w-full sm:w-9/12 md:w-9/12 lg:w-9/12">
            <div className="w-9/12">
              <div className="flex flex-col justify-center gap-2.5">
                <p className="text-3xl font-bold mb-4">Join today.</p>
                <GoogleButton onClick={() => openModal('googleAccount')} />
                <AppleButton onClick={() => openModal('appleAccount')} />
              </div>

              <Line />

              <CreateAccountButton onClick={() => openModal('createAccount')} />

              <p className="text-gray-500 text-xs mt-2">
                By signing up, you agree to the{" "}
                <Link href="#" className="text-customColor hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-customColor hover:underline">
                  Privacy Policy
                </Link>
                , including{" "}
                <Link href="#" className="text-customColor hover:underline">
                  Cookie Use
                </Link>
                .
              </p>

              <div className="mt-12">
                <p className="text-white text-md font-bold my-6">Already have an account?</p>
                <SignInButton onClick={() => openModal('signIn')} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>

        {/* Modal google account */}
        {modalType === 'googleAccount' && (
          <div className="w-full flex items-center justify-center">
            <h2 className="text-2xl font-bold mb-8 mt-12">Sign in with your Google account</h2>
          </div>
        )}

        {/* Modal apple account */}
        {modalType === 'appleAccount' && (
          <div className="w-full flex items-center justify-center">
            <h2 className="text-2xl font-bold mb-8 mt-12">Sign in with your Apple account</h2>
          </div>
        )}

        {/* Modal forgot password */}
        {modalType === 'forgotPassword' && (
          <div className="w-full flex items-center justify-center">
            <div className="w-full md:w-9/12">
              <h2 className="text-2xl font-bold mb-8 mt-12">Find your X account</h2>

              <div className="flex flex-col justify-center gap-6">
                <p className="text-gray-500">
                  Enter the email, phone number, or username associated with your account to change your password.
                </p>
                <input
                  type="text"
                  placeholder="Email, phone number, or username"
                  className="w-full p-4 border bg-black border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-customColor"
                />
              </div>
              <div className="mt-12">
                <NextButton />
              </div>
            </div>
          </div>
        )}


        {/* Modal sign up */}
        {modalType === 'signUp' && (
          <div className="w-full flex items-center justify-center">
            <div className="w-full md:w-9/12">
              <h2 className="text-2xl font-bold mb-8 mt-12">Join X today</h2>

              <div className="flex flex-col justify-center gap-6">
                <div className="flex flex-col justify-center gap-6">
                  <GoogleButton onClick={() => openModal('googleAccount')} />
                  <AppleButton onClick={() => openModal('appleAccount')} />
                </div>
              </div>

              <Line />

              <div className="flex flex-col justify-center gap-6">

                <CreateAccountButton onClick={() => openModal('createAccount')} />

                <p className="text-gray-500 text-xs">
                  By signing up, you agree to the{" "}
                  <Link href="#" className="text-customColor hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-customColor hover:underline">
                    Privacy Policy
                  </Link>
                  , including{" "}
                  <Link href="#" className="text-customColor hover:underline">
                    Cookie Use
                  </Link>
                  .
                </p>
              </div>

              <div className="my-12">
                <p className="text-gray-500">
                  Have an account already?{" "}
                  <button
                    onClick={() => openModal('signIn')}
                    className="text-customColor hover:underline">
                    Log in
                  </button>
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Modal create account */}
        {modalType === 'createAccount' && (
          <div className="w-full flex items-center justify-center">
            <div className="w-full md:w-9/12">
              <h2 className="text-2xl font-bold mb-8 mt-12">Create your account</h2>

              <div className="flex flex-col justify-center gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 border bg-black border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-customColor"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 border bg-black border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-customColor"
                />

                {/* <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-4 border bg-black border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-customColor"
                /> */}

                <div>
                  <p className="text-white text-md">Date of birth</p>
                  <p className="text-gray-500 text-sm my-2">
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                  </p>
                  <div className="flex flex-row space-x-4">
                    <input
                      type="text"
                      placeholder="Month"
                      className="w-1/3 p-4 border bg-black border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-customColor"
                    />
                    <input
                      type="text"
                      placeholder="Day"
                      className="w-1/3 p-4 border bg-black border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-customColor"
                    />
                    <input
                      type="text"
                      placeholder="Year"
                      className="w-1/3 p-4 border bg-black border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-customColor"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <NextButton />
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Modal sign in */}
        {modalType === 'signIn' && (
          <div className="w-full flex items-center justify-center">
            <div className="w-full md:w-9/12">
              <h2 className="text-2xl font-bold mb-8 mt-12">Sign in to X</h2>
              <div className="flex flex-col justify-center gap-6">
                <GoogleButton onClick={() => openModal('googleAccount')} />
                <AppleButton onClick={() => openModal('appleAccount')} />
              </div>

              <Line />

              <div className="flex flex-col justify-center gap-6">
                <input
                  type="text"
                  placeholder="Phone, email, or username"
                  className="w-full p-4 border bg-black border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-customColor"
                />
                <NextButton />
                <ForgotPassword onClick={() => openModal('forgotPassword')} />
              </div>

              <div className="my-12">
                <p className="text-gray-500">
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={() => openModal('signUp')}
                    className="text-customColor hover:underline">
                    Sign up
                  </button>
                </p>
              </div>

            </div>
          </div>
        )}

      </Modal>

    </>
  );
}
