import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Dashboard from "./pages/client/dashboard/ClientDashboard";
import ClientProfile from "./pages/client/profile/ClientProfile";
import LandingPage from "./pages/client/landing/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ClientProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
