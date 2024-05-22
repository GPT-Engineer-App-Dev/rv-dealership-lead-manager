import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import SalesmanDashboard from "./pages/SalesmanDashboard.jsx";
import SalesManagerDashboard from "./pages/SalesManagerDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Sidebar from "./components/Sidebar.jsx";

const App = () => {
  const sidebarItems = {
    salesman: [
      { label: "Dashboard", path: "/salesman" },
      { label: "Leads", path: "/leads" },
      { label: "Appointments", path: "/appointments" },
      { label: "Sales", path: "/sales" },
      { label: "Logout", path: "/logout" },
    ],
    salesManager: [
      { label: "Dashboard", path: "/salesmanager" },
      { label: "Leads", path: "/leads" },
      { label: "Appointments", path: "/appointments" },
      { label: "Team", path: "/team" },
      { label: "Sales", path: "/sales" },
      { label: "Logout", path: "/logout" },
    ],
    admin: [
      { label: "Dashboard", path: "/admin" },
      { label: "Users", path: "/users" },
      { label: "Settings", path: "/settings" },
      { label: "Reports", path: "/reports" },
      { label: "Logout", path: "/logout" },
    ],
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/salesman" element={<><Sidebar items={sidebarItems.salesman} /><SalesmanDashboard /></>} />
        <Route exact path="/salesmanager" element={<><Sidebar items={sidebarItems.salesManager} /><SalesManagerDashboard /></>} />
        <Route exact path="/admin" element={<><Sidebar items={sidebarItems.admin} /><AdminDashboard /></>} />
      </Routes>
    </Router>
  );
};

export default App;