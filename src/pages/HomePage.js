import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import JobList from "../components/JobList";
import Navbar from "../components/Navbar";
import jobs from "../data.json";

// import apiService from "../app/apiService";

function HomePage() {
  //   const [jobs, setJobs] = useState();

  //   useEffect(() => {
  //     const getJobs = async () => {
  //       try {
  //         const res = await apiService.get("/jobs");
  //         setJobs(res.data);
  //         console.log(res);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getJobs();
  //   }, []);

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 3 }}>
        <JobList jobs={jobs} />
      </Container>
    </>
  );
}

export default HomePage;
