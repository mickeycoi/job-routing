import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function JobCard({ job }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          maxWidth: 345,
          height: 300,
          bgcolor: "primary",
          color: "primary",
          position: "relative",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {job.title}
          </Typography>
          <Divider />
          {job.skills.slice(0, 4).map((skill) => (
            <Chip
              label={skill}
              sx={{ mt: 1, mr: 1, backgroundColor: "#ed4a4f", color: "white" }}
            />
          ))}

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {job.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="small"
            variant="outlined"
            sx={{
              position: "absolute",
              bottom: 5,
              backgroundColor: "#ff9800",
              color: "black",
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
