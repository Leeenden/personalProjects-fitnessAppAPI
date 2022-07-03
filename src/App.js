import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import { Navbar, Footer } from "./components";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

function App() {
  return (
    <Box width="400px">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes >
    </Box>
  );
}

export default App;
