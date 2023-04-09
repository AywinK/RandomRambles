import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DummyHeader from "./components/DummyHeader";
import CreatePost from "./components/pages/CreatePost";
import Home from "./components/pages/Home";
import { useEffect, useState } from "react";
import { collectionRef } from "./components/helperFuncs/firebaseConfig";
import { onSnapshot, query, orderBy } from "firebase/firestore";
// import BlogPage from "./components/BlogPage";
import { lazy, Suspense } from 'react';

const BlogPage = lazy(() => import("./components/BlogPage"));

function App() {

  const [blogsArr, setBlogsArr] = useState([]);

  const [recentlyViewedBlogPage, setRecentlyViewedBlogPage] = useState("test");

  console.log(recentlyViewedBlogPage + " line 20")

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
        <DummyHeader
          title="RandomRambles"
          pages={[{ name: "Home", route: "/" }, { name: "Create Post", route: "/createpost" }]}
        />

        <Suspense fallback={<h1>Loading... Please Wait</h1>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/createpost" element={<CreatePost />}></Route>
            {blogsArr.map(blog => {
              const { title, id, textContentArr, imageURL } = blog;
              return (
                <Route key={id} path={`/${title}`} element={<BlogPage setRecentlyViewedBlogPage={setRecentlyViewedBlogPage} title={title} imageURL={imageURL} textContentArr={textContentArr} id={id} />}></Route>
              )
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
