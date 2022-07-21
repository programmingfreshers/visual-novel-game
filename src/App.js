import "./App.css";
import Navbar from "./components/Navbar";
import {
  useParams,
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Catalogue from "./components/Catalogue";
import StoryBoard from "./components/StoryBoard";
import CreatePage from "./components/CreatePage";
import Pricing from "./components/Pricing";
import StoryBoard2 from "./components/StoryBoard2";
const storyBook = [
  {
    storyName: "Forest",
    storyDescription:
      "in a forest of dangerous animals and poisonous plants , your decisions decide your fate , choose wisely !",
    storyID: "2163174681",
  },
  {
    storyName: "My waifu",
    storyDescription:
      "your waifu came to meet you what you shall say , your decisions decide your fate , choose wisely !",
    storyID: "2163100681",
  },
];
const story = {
  storyName: "Forest",
  storyDescription:
    "in a forest of dangerous animals and poisonous plants , your decisions decide your fate , choose wisely !",
  storyID: "2163174681",
};

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Catalogue storyBook={storyBook} />}></Route>
          <Route path="/story/:storyID" element={<StoryBoard />}></Route>
          <Route path="/storyboard2/:storyID" element={<StoryBoard2/>}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/pricing" element={<Pricing/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
