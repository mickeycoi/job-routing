import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import apiService from "../app/apiService";
import GetJobId from "../components/GetJob";
import {
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
  Modal,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function JobModal() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate(from, { replace: true });
  };

  let params = useParams();
  let job = GetJobId(params.id);

  function onDismiss() {
    navigate(-1);
  }

  // const params = useParams();
  // const [job, setJob] = useState();

  // useEffect(() => {
  //   const getJob = async () => {
  //     try {
  //       const res = await apiService.get(`/jobs/${params.id}`);
  //       setJob(res.data);
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     getJob();
  //   };
  // }, [params]);

  return (
    <Modal
      open={true}
      onClose={() => onDismiss()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        variant="contained"
        sx={{
          margin: "auto",
          width: "700px",
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <CardContent>
          <Typography
            // sx={{ height: 45 }}
            color="text.secondary"
            display={"flex"}
            textAlign="center"
            alignItems={"center"}
            justifyContent="center"
            textOverflow={"ellipsis"}
            fontSize={25}
            gutterBottom
          >
            {job.title}
          </Typography>
          <Divider />
          <Typography
            // color="text.secondary"
            variant="body2"
            // height={90}
            style={{ display: "block" }}
            padding={1}
            fontSize={16}
          >
            {job.description}
          </Typography>
          <Typography
            // color="text.secondary"
            variant="body2"
            style={{ display: "block" }}
            padding={1}
            fontSize={16}
          >
            Skills:
          </Typography>
          <Stack
            display={"flex"}
            justifyContent="center"
            direction="row"
            spacing={0.5}
            sx={{ maxHeight: 30, width: "100%" }}
            overflow="hidden"
          >
            {job.skills.map((i) => (
              <Chip
                key={i}
                label={i}
                style={{ backgroundColor: "#d74742", fontSize: "0.7rem" }}
                size="small"
              />
            ))}
          </Stack>
          <Typography
            variant="body2"
            style={{ display: "block" }}
            paddingTop={2}
            fontSize={16}
          >
            City: {job.city}
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  );
}
