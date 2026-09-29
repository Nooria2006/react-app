import { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="app-content">
        <Dashboard toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}

export default App;