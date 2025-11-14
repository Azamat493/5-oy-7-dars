import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Protected from "./components/Protected";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/home"
        element={
          <Protected>
            <Home />
          </Protected>
        }
      />

      <Route
        path="/youtube"
        element={
          <Protected>
            <Home defaultFilter="youtube" />
          </Protected>
        }
      />

      <Route
        path="/platform/:id"
        element={
          <Protected>
            <Platform />
          </Protected>
        }
      />

      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
