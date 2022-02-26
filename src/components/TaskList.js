import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { URL } from "../KEYS";
import { useNavigate } from "react-router-dom";

export default function TaskList() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const lisTasks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setTasks(data);
  };

  const deleteTask = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    setTasks(tasks.filter(task => task.id !== id));
  };

  useEffect(() => {
    lisTasks();
  }, []);

  return (
    <>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#323245",
          }}
          key={task.id}
        >
          <CardContent
            style={{
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography color="white">{task.title}</Typography>
              <Typography color="white">{task.description}</Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <EditTwoToneIcon
                className="editIcon"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/tasks/${task.id}/edit`)}
              />
              <DeleteTwoToneIcon
                className="deleteIcon"
                style={{ marginLeft: "1rem", cursor: "pointer" }}
                onClick={()=> deleteTask(task.id)}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
