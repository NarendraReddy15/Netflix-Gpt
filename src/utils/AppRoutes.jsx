import { Routes, Route } from "react-router-dom";

import Login from "../Components/Login";
import BrowsePage from "../Components/BrowsePage";
import MoviePlayer from "../Components/MoviePlayer";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Browse" element={<BrowsePage/>}/>
      <Route path="/movie/:id" element={<MoviePlayer/>} />
    </Routes>
  );
}