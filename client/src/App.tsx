import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import UserInformation from "./pages/UserInformation";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Favorite from "./pages/Favorite";
import AllRecipes from "./pages/AllRecipes";

import DetailedFood from "./pages/DetailedFood";
import FoodMng from "./pages/FoodMng";
import UserMng from "./pages/UserMng";
import CommentMng from './pages/CommentMng';

export const url = "http://localhost:8000";
function App() {
  return (
    <Box className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserInformation />} />
        <Route path="/all-recipes" element={<AllRecipes />} />
        <Route path="/food/:id" element={<DetailedFood />} />
        <Route path="/food-mng" element={<FoodMng />} />
        <Route path="/cmt-mng" element={<CommentMng />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/user-mng" element={<UserMng />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
