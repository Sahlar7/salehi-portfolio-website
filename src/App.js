import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./Main";
import HoosAvailablePage from "./HoosAvailablePage";
import CourseReviewsPage from "./CourseReviewsPage";
import ResearchPage from "./ResearchPage";
import ORCLPage from "./ORCLPage";

function App() {
    return(
    <Router>
        <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route path="/HoosAvailablePage" element={<HoosAvailablePage/>}/>
            <Route path="/CourseReviewsPage" element={<CourseReviewsPage/>}/>
            <Route path="/ResearchPage" element={<ResearchPage/>}/>
            <Route path="/ORCLPage" element={<ORCLPage/>}/>
            <Route path="/Main" element={<Main/>}/>
        </Routes>
    </Router>
  );
}

export default App;
