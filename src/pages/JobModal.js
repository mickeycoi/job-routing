import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import apiService from "../app/apiService";
import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import { Card, CardContent, Chip, Divider, Stack, Alert } from "@mui/material";

const modalStyle = {
  position: "absolute",
  backgroundColor: "#FFF",
  padding: "15px",
  zIndex: "1000",
  width: "100%",
  borderRadius: 4,
};
const overlayStyle = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "65%",
  backgroundColor: "#fff",
  zIndex: "1000",
  borderRadius: 4,
  overflowY: "auto",
};

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

  const [job, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const getJobs = async () => {
        setLoading(true);
        try {
          const res = await apiService.get(`/jobs/${params.id}`);
          setJobs(res.data);
          setError("");
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
        setLoading(false);
      };
      getJobs();
    }
  }, [params]);

  return (
    <Modal
      open={true}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <>
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
                  <Divider sx={{ mt: 3, mb: 3 }} />
                  <Typography>
                    {job.skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        sx={{
                          mr: 1,
                          mb: 1,
                          backgroundColor: "#F0534A",
                          color: "#fff",
                          fontSize: 12,
                          height: 28,
                        }}
                      />
                    ))}
                  </Typography>
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
            </>
          )}
        </>
      )}
    </Modal>
  );
}
