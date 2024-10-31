"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";

interface FormInput {
  name?: string;
  email: string;
  password: string;
}

const AuthPage = () => {
  const [value, setValue] = useState<number>(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
            maxWidth: "sm"
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
                    required: "Это поле обязательно",
                  })}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                />
              </>
            ) : (
              <>
                <TextField
                  label="Имя"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...register("name", { required: "Это поле обязательно" })}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                />
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
                  })}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                />
              </>
            )}
            <Box textAlign="center">
              <Button
                variant="contained"
                sx={{ backgroundColor: "rgba(30,26,22)" }}
                type="submit">
                {value === 0 ? "Войти" : "Зарегистрироваться"}
              </Button>
            </Box>
          </Box>
        </Paper>
    </Box>
  );
};

export default AuthPage;
