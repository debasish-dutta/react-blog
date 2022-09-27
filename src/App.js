import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Podcast from "./pages/Podcast";
import Blog from "./pages/Blog";
import Write from "./pages/Write";
import Admin from "./pages/Admin";
import Single from "./components/SinglePost";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useContext } from "react";

function App() {
  return (
  //   <Router>
  //   <Navbar />
  //   <Routes>
  //     <Route exact path="/">
  //       <Home />
  //     </Route>
  //     <Route path="/about"> <About /> </Route>
  //     <Route path="/admin"><Admin /> </Route>
  //     <Route path="/write"> <Write /> </Route>
  //     <Route path="/podcast"><Podcast /> </Route>
  //     <Route path="/blog"> <Blog /></Route>
  //     <Route path="/contact"> <Contact /></Route>
  //     <Route path="/post/:postId">
  //       <Single />
  //     </Route>
  //     <Footer />
  //   </Routes>
  // </Router>
    <Navbar />
  );
}

export default App;
