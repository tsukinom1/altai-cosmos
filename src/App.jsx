import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import FullCard from "./components/FullCard.jsx"
import tours from "./utils/tours.js";
import Tours from "./pages/Tours.jsx";
import PlaceCard from "./components/PlaceCard.jsx";

function App() {

  return (
    <BrowserRouter basename="/altai-cosmos/">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tour/id/:id" element={<FullCard tours={tours} />} />
            <Route path="/tour/name/:urlName" element={<PlaceCard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
