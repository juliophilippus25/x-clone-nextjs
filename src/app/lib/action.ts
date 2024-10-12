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

  // encrypt password
  const hashedPassword = await hashSync(password, 10);
  user.password = hashedPassword;

  // get users from localStorage
  const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

  // add new user to array
  existingUsers.push(user);

  // store users in localStorage
  localStorage.setItem("users", JSON.stringify(existingUsers));
};

// Login user
export const loginUser = async (
  email: string,
  password: string
): Promise<boolean> => {
  // get users from localStorage
  const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

  // find user with email
  const user = existingUsers.find(
    (user: { email: string }) => user.email === email
  );

  if (user) {
    // compare password with hashed password
    const isMatch = await compare(password, user.password);
    if (isMatch) {
      localStorage.setItem(
        "session",
        JSON.stringify({ isLoggedIn: true, email })
      );
      return true; // successful login
    }
  }

  return false; // failed login
};
