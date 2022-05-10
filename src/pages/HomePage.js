import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import JobList from "../components/JobList";

import apiService from "../app/apiService";

function HomePage() {
  const [jobs, setJobs] = useState();

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
      <Container sx={{ mt: 3 }}>
        <JobList jobs={jobs} />
      </Container>
    </>
  );
}

export default HomePage;
