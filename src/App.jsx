import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Pages/index";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";
import Features from "./Pages/features";


function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/features" element={<Features />} />


    </Routes>
  </Router>;
}

export default App;
