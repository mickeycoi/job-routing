import { Box, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";
import JobCard from "./JobCard";
import { useSearchParams } from "react-router-dom";

const limit = 5;

function JobList({ jobs }) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const pageCount = Math.ceil(jobs.length / limit);

  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Grid container spacing={2}>
        {jobs &&
          jobs
            .filter((job) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = job.title.toLowerCase();
              return name.includes(filter.toLowerCase());
            })
            .slice((page - 1) * limit, page * limit)
            .map((job) => <JobCard key={job.id} job={job} />)}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          sx={{ mt: 3, mb: 3 }}
        />
      </Box>
    </>
  );
}

export default JobList;
// page = 1 0 - 5
// page = 2 5 - 10
// page = 3 10 - 15
