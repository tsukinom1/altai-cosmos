import './App.css'
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home.jsx";
import FullCard from "./components/FullCard.jsx"
import tours from "./utils/tours.js";
import Tours from "./pages/Tours.jsx";
import PlaceCard from "./components/PlaceCard.jsx";
import Gallery from "./pages/Gallery.jsx";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop.js";

function App() {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <BrowserRouter basename="/altai-cosmos/" scrollRestoration="manual">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/tours" element={<Tours/>}/>
                <Route path="/tour/id/:id" element={<FullCard tours={tours}/>}/>
                <Route path="/tour/name/:urlName" element={<PlaceCard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
