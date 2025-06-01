import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./Main";
import HoosAvailablePage from "./pages/HoosAvailablePage";
import CourseReviewsPage from "./pages/CourseReviewsPage";
import ResearchPage from "./pages/ResearchPage";
import ORCLPage from "./pages/ORCLPage";
import RoulettePage from "./pages/RoulettePage";
import KOPage from "./pages/KOPage";
import ML4VAPage from './pages/ML4VAPage';
import DocagentPage from './pages/DocagentPage';
import MediGuardPage from './pages/MediGuardPage';
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
            <Route path="/ML4VAPage" element={<ML4VAPage/>}/>
            <Route path="/DocagentPage" element={<DocagentPage/>}/>
            <Route path="/MediGuardPage" element={<MediGuardPage/>}/>
            <Route path="/Main" element={<Main/>}/>
        </Routes>
    </Router>
  );
}

export default App;
