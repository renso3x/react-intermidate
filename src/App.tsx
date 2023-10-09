import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management//HomePage";
import { TaskProvider } from "./state-management/tasks/taskContext";
import { AuthProvider } from "./state-management/auth/authContext";

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <NavBar />
          <HomePage />
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
