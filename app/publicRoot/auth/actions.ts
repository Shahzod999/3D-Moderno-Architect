"use server";

import { createSession, deleteSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

type FormInput = {
  email: string;
  password: string;
};

const testUser = {
  id: "1",
  email: "admin@admin.com",
  password: "12345678",
};

export async function login(data: FormInput) {
  const { email, password } = data;

  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Неверный логин или пароль. Попробуйте снова."],
      },
    };
  }

  await createSession(testUser.id);

  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/");
}
