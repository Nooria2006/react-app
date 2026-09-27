import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="app-content">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;