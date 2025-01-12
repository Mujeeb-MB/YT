import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const pages = [
    { name: "HTML", path: "/html" },
    { name: "CSS", path: "/css" },
    { name: "AWS", path: "/aws" },
    { name: "DSA", path: "/dsa" },
    { name: "Git", path: "/git" },
    { name: "Interview", path: "/interview" },
    { name: "JavaScript", path: "/javascript" },
    { name: "React", path: "/react" },
  ];

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        mt: 10,
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "2rem" }}
      >
        My learning material
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {pages.map((page) => (
          <Grid key={page.name} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                backgroundColor: "#333333",
                color: "#ffffff",
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  cursor: "pointer",
                  boxShadow: "1px  4px 8px rgba(213, 182, 67, 1)",
                },
              }}
              onClick={() => navigate(page.path)}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5">{page.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
