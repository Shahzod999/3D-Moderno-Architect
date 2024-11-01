import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";

const designers = [
  {
    name: "3D Designer A",
    description: "Specializes in modern home designs with innovative layouts.",
    imageUrl: "/1/Reception2.jpg",
  },
  {
    name: "3D Designer B",
    description: "Expert in minimalist interior styles and decor.",
    imageUrl: "/1/Reception3.jpg",
  },
  {
    name: "3D Designer B",
    description: "Expert in minimalist interior styles and decor.",
    imageUrl: "/1/Reception4.jpg",
  },
  {
    name: "3D Designer B",
    description: "Expert in minimalist interior styles and decor.",
    imageUrl: "/1/Reception4.jpg",
  },
  {
    name: "3D Designer B",
    description: "Expert in minimalist interior styles and decor.",
    imageUrl: "/2/1.jpeg",
  },
  {
    name: "3D Designer B",
    description: "Expert in minimalist interior styles and decor.",
    imageUrl: "/2/2.jpeg",
  },
  {
    name: "3D Designer B",
    description: "Expert in minimalist interior styles and decor.",
    imageUrl: "/2/3.jpeg",
  },
  {
    name: "3D Designer B",
    description: "Expert in minimalist interior styles and decor.",
    imageUrl: "/2/4.jpeg",
  },
  {
    name: "3D Designer B",
    description: "Expert in minimalist interior styles and decor.",
    imageUrl: "/2/5.jpeg",
  },
  {
    name: "3D Designer B",
    description: "Expert in minimalist interior styles and decor.",
    imageUrl: "/2/6.jpeg",
  },
];

const Portfolio = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(30,26,22, 0.9)",
        color: "#FFF",
        minHeight: "100vh",
        padding: "2rem",
        mt: "50px",
      }}>
      <Grid container spacing={4} justifyContent="center">
        {designers.map((designer, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: "#3b3b3b",
                color: "#FFF",
                borderRadius: "8px",
              }}>
              <CardMedia component="img" height="400" image={designer.imageUrl} alt={designer.name} />
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  {designer.name}
                </Typography>
                <Typography variant="body2" align="center">
                  {designer.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
