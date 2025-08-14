import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Pages/index";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";
import Features from "./Pages/features";
import Links from "./Pages/links";
import Account from "./Pages/account";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/features" element={<Features />} />
        <Route path="/links" element={<Links />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
