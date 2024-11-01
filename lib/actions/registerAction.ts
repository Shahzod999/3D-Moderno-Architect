import { register } from "./authAction";

interface RegisterInput {
  username?: string;
  email: string;
  password: string;
}


export async function registerUser(data: RegisterInput) {
  try {
    const response = await register(data);
    return response;
  } catch (error) {
    console.error("Ошибка в registerUser:", error);
    return {
      errors:
        "Произошла ошибка при создании пользователя."
    };
  }
}
