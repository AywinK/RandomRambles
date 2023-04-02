import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CreatePost from "./components/pages/CreatePost";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header
          title="Travel Blogs"
          pages={[{ name: "Home", route: "/" }, { name: "Create Post", route: "/createpost" }]}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
