import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }} variant="h6">
              <NavLink to="/" style={{ textDecoration: "none", color: "#eee" }}>
                TASKS APP
              </NavLink>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/tasks/new")}
            >
              Add Task
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
