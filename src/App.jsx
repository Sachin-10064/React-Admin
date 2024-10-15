import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

export default function App() {
  const token = sessionStorage.getItem('token');
  return (
    <div>
      <Routes >
       
        <Route path="/" element={token ? <Home />: <SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<SignUp />} />
      </Routes>
    </div>
  )
}