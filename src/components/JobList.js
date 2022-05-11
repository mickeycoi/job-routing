import { Box, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";
import JobCard from "./JobCard";
import { useSearchParams } from "react-router-dom";

function JobList({ jobs }) {
  const limit = 5;
  const [page, setPage] = useState(1);

  let [searchParams, setSearchParams] = useSearchParams();
  let filter = searchParams.get("filter");

  const handleChange = (event, value) => {
    setPage(value);
  };
  const pageCount = Math.ceil(jobs.length / limit);

  return (
    <>
      <Grid container spacing={2}>
        {filter
          ? jobs
              .filter((job) => {
                if (!filter) return true;
                let name = job.title.toLowerCase();
                return name.includes(filter.toLowerCase());
              })
              .map((job) => <JobCard key={job.id} job={job} />)
          : jobs
              .slice((page - 1) * limit, page * limit)
              .map((job) => <JobCard key={job.id} job={job} />)}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          sx={{ mb: 3, mt: 3 }}
        />
      </Box>
    </>
  );
}

export default JobList;
// page = 1 0 - 5
// page = 2 5 - 10
// page = 3 10 - 15
