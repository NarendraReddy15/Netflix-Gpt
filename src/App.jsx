import './App.css'
import AppRoutes from "./utils/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {

 return (
    <BrowserRouter>
              <Toaster />

      <AppRoutes />
    </BrowserRouter>
  );

}

export default App
