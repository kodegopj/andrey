import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MoreSamples from "./pages/MoreSamples/Samples";
import ContactSample from "./pages/MoreSamples/ContactSample";
import Showreels from "./pages/MoreSamples/showreels";
import Podcast from "./pages/Podcast/Podcast";
import Promotional from "./pages/Promotional/Promotional";
import Educational from "./pages/Educational/Educational";
import SMContent from "./pages/SMContent/SMContent";
import Realstate from "./pages/Realstate/Realstate";
import Projectone from "./pages/Projectone/Projectone";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/moresamples" exact element={<MoreSamples />} />
        <Route path="/podcast" exact element={<Podcast />} />
        <Route path="/promotional" exact element={<Promotional />} />
        <Route path="/educational" exact element={<Educational />} />
        <Route path="/smcontent" exact element={<SMContent />} />
        <Route path="/realstate" exact element={<Realstate />} />
        <Route path="/contact" exact element={<ContactSample />} />
        <Route path="/showreels" exact element={<Showreels />} />
        <Route path="/projectone" exact element={<Projectone />} />
        
      </Routes>
    </>
  );
}

export default App;
