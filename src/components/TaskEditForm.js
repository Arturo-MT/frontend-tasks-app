import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../KEYS";

export default function TaskForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const id = params.id;
    const res = await fetch(URL + id, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    console.log(data);

    setLoading(false);

    navigate("/");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 4 }}
          style={{
            backgroundColor: "#323245",
            padding: "1rem",
          }}
        >
          <Typography variant="5" textAlign="center" color="white">
            Edit task
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Title"
                variant="filled"
                name="title"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                label="Description"
                variant="filled"
                multiline
                maxRows={4}
                sx={{ display: "block", margin: ".5rem 0" }}
                name="description"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!task.title || !task.description}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                    "Save"
                  )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
