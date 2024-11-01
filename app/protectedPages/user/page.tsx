"use client";
import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  title: string;
  description: string;
  image: File | null;
}

const AdminAddPhoto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    if (data.image) formData.append("image", data.image);

    try {
      console.log("Sending form data...", data);
      setSuccessMessage("Фотография успешно добавлена!");
      reset();
    } catch (error) {
      console.error("Error uploading photo:", error);
      setErrorMessage("Ошибка при добавлении фотографии.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "url(/1/Background.jpg) no-repeat center center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}>
      <Paper
        elevation={4}
        sx={{
          padding: "30px",
          maxWidth: 480,
          width: "100%",
          backgroundColor: "rgba(30,26,22, 0.9)",
          borderRadius: "12px",
          backdropFilter: "blur(15px)",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
        }}>
        <Typography
          variant="h5"
          component="h1"
          align="center"
          sx={{
            mb: 4,
            color: "#fff",
            fontWeight: 500,
          }}>
          Добавить новую фотографию
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Заголовок"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("title", { required: "Это поле обязательно" })}
            error={!!errors.title}
            helperText={errors.title ? errors.title.message : ""}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#777" },
                "&:hover fieldset": { borderColor: "#fff" },
              },
              "& .MuiInputLabel-root": { color: "#bbb" },
              "& .MuiInputBase-root": { color: "#fff" },
            }}
          />

          <TextField
            label="Описание"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            {...register("description", { required: "Это поле обязательно" })}
            error={!!errors.description}
            helperText={errors.description ? errors.description.message : ""}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#777" },
                "&:hover fieldset": { borderColor: "#fff" },
              },
              "& .MuiInputLabel-root": { color: "#bbb" },
              "& .MuiInputBase-root": { color: "#fff" },
            }}
          />

          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{
              mt: 2,
              mb: 1,
              backgroundColor: "rgba(30,26,22,0.8)",
              color: "#fff",
              "&:hover": {
                backgroundColor: "rgba(30,26,22, 1)",
              },
            }}>
            Загрузить фото
            <input type="file" hidden accept="image/*" {...register("image", { required: "Загрузите изображение" })} />
          </Button>
          {errors.image && (
            <Typography color="error" align="center" sx={{ mt: 1 }}>
              {errors.image.message}
            </Typography>
          )}

          {errorMessage && (
            <Typography color="error" align="center" sx={{ mt: 2 }}>
              {errorMessage}
            </Typography>
          )}
          {successMessage && <Typography sx={{ color: "#4caf50", align: "center", mt: 2 }}>{successMessage}</Typography>}

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: "rgba(30,26,22, 1)",
              color: "#fff",
              "&:hover": {
                backgroundColor: "rgba(45,40,35, 1)",
              },
            }}
            type="submit"
            disabled={isLoading}>
            {isLoading ? "Загрузка..." : "Добавить фотографию"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminAddPhoto;
