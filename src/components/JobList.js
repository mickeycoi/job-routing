import { Box, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";
import JobCard from "./JobCard";

function JobList({ jobs }) {
  const [page, setPage] = useState(1);
  const limit = 5;
  const pageCount = Math.ceil(jobs.length / limit);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Grid container spacing={2}>
        {jobs.slice((page - 1) * limit, page * limit).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3, pb: 3 }}>
        <Pagination count={pageCount} onChange={handleChange} color="primary" />
      </Box>
    </>
  );
}

export default JobList;
