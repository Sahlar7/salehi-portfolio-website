import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./Main";
import HoosAvailablePage from "./pages/HoosAvailablePage";
import CourseReviewsPage from "./pages/CourseReviewsPage";
import ResearchPage from "./pages/ResearchPage";
import ORCLPage from "./pages/ORCLPage";
import RoulettePage from "./pages/RoulettePage";
import KOPage from "./pages/KOPage";
function App() {
    return(
    <Router>
        <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route path="/HoosAvailablePage" element={<HoosAvailablePage/>}/>
            <Route path="/CourseReviewsPage" element={<CourseReviewsPage/>}/>
            <Route path="/ResearchPage" element={<ResearchPage/>}/>
            <Route path="/ORCLPage" element={<ORCLPage/>}/>
            <Route path ="/RoulettePage" element={<RoulettePage/>}/>
            <Route path="/KOPage" element={<KOPage/>}/>
            <Route path="/Main" element={<Main/>}/>
        </Routes>
    </Router>
  );
}

export default App;
