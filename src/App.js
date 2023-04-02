import Header from "./components/Header";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
    <Header
    title = "Travel Blogs"
    pages = {[{name: "Home", route: ""}, {name: "Create Post", route: ""}]}
    />
    <Home />
    </>
  );
}

export default App;
