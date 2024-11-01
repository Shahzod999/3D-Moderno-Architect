import React from "react";
import { Box, Grid, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";

const HomePage = () => {
  const projects = [
    {
      image: "/5/1.jpg",
      title: "Photorealistic 3D Visualization of Waikiki Hotel Concept",
      location: "Hawaii",
      service: "3D Interior Visualizations",
    },
    {
      image: "/5/2.jpg",
      title: "Priceless Views: 3D Animation of Tropical Island",
      location: "Panama",
      service: "3D Animations",
    },
    {
      image: "/5/3.jpg",
      title: "Luxurious Modern Interior Design",
      location: "California",
      service: "3D Interior Design",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "rgba(30,26,22, 0.7)", padding: 4}} mt={10}>
      <Typography variant="h4" sx={{ color: "white", mb: 4, textAlign: "center" }}>
        3D House and Interior Designs
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, backgroundColor: "rgba(30,26,22, 0.8)", color: "white" }}>
              <CardMedia component="img" height="200" image={project.image} alt={project.title} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(170, 170, 170, 1)", mb: 0.5 }}>
                  Location: {project.location}
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(170, 170, 170, 1)", mb: 2 }}>
                  Service: {project.service}
                </Typography>
                <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>
                  View Similar Cases
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
