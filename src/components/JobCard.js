import React from "react";
import { Chip, Grid, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";

function JobCard({ job }) {
  const location = useLocation();
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
              key={skill.id}
              label={skill}
              sx={{ mt: 1, mr: 1, backgroundColor: "#ed4a4f", color: "white" }}
            />
          ))}
          <Typography variant="body2" color="text.secondary">
            {job.description.length > 70
              ? `${job.description.slice(0, 50)}...`
              : job.description}
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
            <Link
              to={`/jobs/${job.id}`}
              state={{ backgroundLocation: location }}
            >
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default JobCard;
