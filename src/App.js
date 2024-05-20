import "./App.css";
import DashboardView from "./components/Dashboard";
import SidebarView from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__sidebar">
          {/* sidebar */}
          <SidebarView />
        </div>
        <div className="app_dashboard">
          {/* Dashboard */}
          <DashboardView />
        </div>
      </div>
    </div>
  );
}

export default App;
