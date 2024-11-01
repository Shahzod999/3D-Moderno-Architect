"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Typography, Box, Paper, Tabs, Tab } from "@mui/material";
import { login } from "../../../lib/actions/authAction";
import { registerUser } from "@/lib/actions/registerAction";
import { useAppDispatch } from "@/lib/hooks";
import { userLogIn } from "@/lib/features/userInfoSlice";
import { useRouter } from "next/navigation";

interface FormInput {
  username?: string;
  email: string;
  password: string;
}

const AuthPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number>(0);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      const response = value === 0 ? await login(data) : await registerUser(data);

      console.log(response);

      if (response?.errors) {
        return setAuthError(response?.errors);
      } else if (response?.success) {
        console.log("User logged in successfully");
        dispatch(userLogIn());
        router.push("/");
      }
    } catch (error) {
      console.error("Ошибка в onSubmit:", error);
      setAuthError("Произошла ошибка при отправке формы.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setAuthError(null);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "url(/1/Reception2.jpg) no-repeat center center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          marginTop: "20px",
          background: "rgb(255,255,255, 0.7)",
          backdropFilter: "blur(5px)",
          maxWidth: "sm",
        }}>
        <Typography variant="h4" component="h1" align="center">
          MODERNO
        </Typography>
        <Tabs value={value} onChange={handleTabChange} centered>
          <Tab label="Вход" />
          <Tab label="Регистрация" />
        </Tabs>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {value === 0 ? (
            <>
              <TextField
                label="Электронная почта"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("email", {
                  required: "Это поле обязательно",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]+$/,
                    message: "Введите корректный адрес электронной почты",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
              <TextField
                label="Пароль"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Пароль должен быть не менее 8 символов",
                  },
                  required: "Это поле обязательно",
                })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            </>
          ) : (
            <>
              <TextField label="Имя" variant="outlined" fullWidth margin="normal" {...register("username", { required: "Это поле обязательно" })} error={!!errors.username} helperText={errors.username ? errors.username.message : ""} />
              <TextField
                label="Электронная почта"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("email", {
                  required: "Это поле обязательно",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]+$/,
                    message: "Введите корректный адрес электронной почты",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
              <TextField
                label="Пароль"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                {...register("password", {
                  required: "Это поле обязательно",
                  minLength: {
                    value: 8,
                    message: "Пароль должен быть не менее 8 символов",
                  },
                })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            </>
          )}
          {authError && (
            <Typography color="error" align="center" sx={{ mt: 2 }}>
              {authError}
            </Typography>
          )}
          <Box textAlign="center">
            <Button variant="contained" sx={{ backgroundColor: "rgba(30,26,22)" }} type="submit">
              {isLoading ? "Загрузка..." : value === 0 ? "Войти" : "Зарегистрироваться"}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default AuthPage;
