import "./App.css";
// Components
import Missing from "./components/Missing";
//Pages
import Home from "./pages/Home";
import Posted from "./pages/Posted";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";

//Route
import PrivateRoute from "./routes/PrivateRoute";
//React Router Layout
import Layout from "./components/Layout/Layout";
import useGeneral from "./context/GeneralContext";
//Reac Router
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const { isAuthenticated } = useGeneral();

  return (
    <div className="flex grow flex-col">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />}></Route>
          <Route path="/posted" element={<Posted />}></Route>
          {/* <Route path=":id" element={<PostPage />} /> */}
        </Route>

        {/* Login Page */}
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
        ></Route>

        <Route
          path="/signup"
          element={!isAuthenticated ? <Signup /> : <Navigate to="/" />}
        ></Route>

        <Route
          path="/resetpassword"
          element={!isAuthenticated ? <ResetPassword /> : <Navigate to="/" />}
        ></Route>

        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
