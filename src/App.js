import "./App.css";

// Components
import PostPage from "./components/PostPage";
import Missing from "./components/Missing";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";

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
          <Route path="post/">
            <Route path=":id" element={<PostPage />} />
          </Route>
          //* About Route
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
