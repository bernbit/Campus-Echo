import "./App.css";

// Components
import PostPage from "./pages/PostPage";
import Missing from "./components/Missing";

//Pages
import Home from "./pages/Home";

//React Router Layout
import Layout from "./components/Layout/Layout";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex grow flex-col">
      <Routes>
        //* Parent Route
        <Route path="/" element={<Layout />}>
          //* Home Route
          <Route index element={<Home />}></Route>
          //* Post Route
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
