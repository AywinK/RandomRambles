import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CreatePost from "./components/pages/CreatePost";
import Home from "./components/pages/Home";
import { useEffect, useState } from "react";
import { collectionRef } from "./components/helperFuncs/firebaseConfig";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import BlogPage from "./components/BlogPage";

function App() {

  const [blogsArr, setBlogsArr] = useState([]);

  useEffect(() => {
    const queryBlogs = query(collectionRef, orderBy("createdAt", "desc"));
    const unsubscribeSnap = onSnapshot(queryBlogs, (snap) => {
        const blogs = [];
        snap.forEach((doc) => {
            blogs.push({ ...doc.data(), id: doc.id });
        });
        setBlogsArr(blogs);
        console.table(blogsArr);
    });
    return () => unsubscribeSnap();
}, []);

console.log(blogsArr);

  return (
    <>
      <BrowserRouter>
        <Header
          title="RandomRambles"
          pages={[{ name: "Home", route: "/" }, { name: "Create Post", route: "/createpost" }]}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
          {blogsArr.map(blog => {
            const {title, id, textContentArr, imageURL} = blog;
            return (
              <Route key={id} path={`/${title}`} element={<BlogPage title={title} imageURL={imageURL} textContentArr={textContentArr} id={id} />}></Route>
            )
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
