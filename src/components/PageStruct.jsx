import { Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";

const PageStruct = ({ sources }) => {
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
        Learning Resources
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {sources.map((source, i) => (
          <Grid key={i} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                backgroundColor: "#333333",
                color: "#ffffff",
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(124, 215, 63, 0.86)",
                },
              }}
              onClick={() => window.open(source.url, "_blank")}
            >
              <CardContent sx={{ textAlign: "center", margin: "auto" }}>
                <Typography variant="h6">{source.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PageStruct;
