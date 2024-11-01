"use server";
import bcrypt from "bcryptjs";
import { createSession, deleteSession } from "../session";
import User from "../models/userModel";
import { redirect } from "next/navigation";
import connectToDatabase from "../config/database";



type FormInput = {
  username?: string;
  email: string;
  password: string;
};

const testUser = {
  id: "1",
  email: "admin@admin.com",
  password: "12345678",
};

export async function login(data: FormInput) {
  try {
    await connectToDatabase();

    const { email, password } = data;

    const user = await User.findOne({ email });
    if (!user) {
      return {
        errors: "Неверный логин или пароль. Попробуйте снова."
      };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return {
        errors: "Неверный логин или пароль. Попробуйте снова."
      };
    }

    await createSession(user._id);
    // return { success: true };
  } catch (error) {
    console.error("Ошибка при входе:", error);
    return {
      errors: "Произошла ошибка при входе. Пожалуйста, попробуйте позже."
    };
  }
  redirect("/");
}


export async function logout() {
  await deleteSession();
  redirect("/");
}


export async function register(data: FormInput) {
  try {
    await connectToDatabase();

    const { username, email, password } = data;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return {
        errors: "Пользователь с таким email уже существует."
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    await createSession(newUser._id);

    // return { success: true };

  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    return {
      errors: "Произошла ошибка при регистрации. Пожалуйста, попробуйте позже."
    };
  }
  redirect("/");
}



