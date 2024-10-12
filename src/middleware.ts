import { NextResponse } from "next/server";

export function middleware(req: any) {
  const session = req.cookies.get("session"); // atau menggunakan localStorage di klien

  // Periksa apakah session ada
  if (!session) {
    // Jika tidak ada session, redirect ke halaman login
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Jika session ada, lanjutkan ke halaman yang diminta
  return NextResponse.next();
}

// Tentukan halaman yang ingin dilindungi
export const config = {
  matcher: ["/home"], // Atur agar middleware ini hanya berlaku di '/home'
};
