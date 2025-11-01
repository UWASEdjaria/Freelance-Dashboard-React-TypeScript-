import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardStatus from "./components/DashboardStatus";
import ClientCard from "./components/ClientCard";
import ProjectList from "./components/ProjectList";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="p-6 bg-gray-100 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<DashboardStatus />} />
            <Route path="/clients" element={<ClientCard />} />
            <Route path="/projects" element={<ProjectList />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
