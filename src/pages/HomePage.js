import { Container, Alert } from "@mui/material";
import React from "react";
import JobList from "../components/JobList";
import { useEffect, useState } from "react";
import apiService from "../app/apiService";

function HomePage() {
  const [jobs, setJobs] = useState("");

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await apiService.get("/jobs");

        setJobs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);

  return (
    <>
      <Container sx={{ mt: 5 }}>
        <JobList jobs={jobs} />
      </Container>
    </>
  );
}

export default HomePage;
