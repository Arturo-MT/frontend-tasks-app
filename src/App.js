import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import NavBar from "./components/NavBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskEditForm from "./components/TaskEditForm"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Container>
        <Routes>
          <Route path ="/" element ={<TaskList/>}/>
          <Route path ="/tasks/new" element ={<TaskForm/>}/>
          <Route path="/tasks/:id/edit" element={<TaskEditForm/>} />
        </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
