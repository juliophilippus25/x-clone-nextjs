import { hashSync } from "bcrypt-ts";
import { compare } from "bcrypt-ts";

// Register user
export const registerUser = async (
  name: string,
  username: string,
  email: string,
  password: string
) => {
  const user = { name, username, email, password };

  // Mengenkripsi password
  const hashedPassword = await hashSync(password, 10);
  user.password = hashedPassword;

  // Ambil data pengguna yang sudah ada dari localStorage
  const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

  // Tambahkan user baru ke array
  existingUsers.push(user);

  // Simpan kembali array pengguna ke localStorage
  localStorage.setItem("users", JSON.stringify(existingUsers));
};

// Login user
export const loginUser = async (
  email: string,
  password: string
): Promise<boolean> => {
  // Ambil semua pengguna dari localStorage
  const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

  // Temukan pengguna berdasarkan email
  const user = existingUsers.find(
    (user: { email: string }) => user.email === email
  );

  if (user) {
    // Bandingkan password yang dimasukkan dengan yang terenkripsi
    const isMatch = await compare(password, user.password);
    if (isMatch) {
      localStorage.setItem(
        "session",
        JSON.stringify({ isLoggedIn: true, email })
      );
      return true; // Login sukses
    }
  }

  return false; // Login gagal
};
