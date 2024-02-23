import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="p-4">
        <h3 className="wd-course-header"><HiMiniBars3 /> {course?.number} {course?.semester} <span className="wd-course-header-end"> &gt;  </span></h3>
       
        
        <hr/>
        <CourseNavigation/>
        <div>
            <div className="overflow-y-scroll position-fixed bottom-0 end-0" style={{ left: "275px", top: "100px" }} >
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules/>} />
                <Route path="Piazza" element={<h1>Piazza</h1>} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                <Route path="Grades" element={<h1>Grades</h1>} />
                <Route path="People" element={<h1>People</h1>} />
                <Route path="Discussions" element={<h1>Discussions</h1>} />
                <Route path="Announcements" element={<h1>Announcements</h1>} />
                <Route path="Pages" element={<h1>Pages</h1>} />
                <Route path="Settings" element={<h1>Settings</h1>} />
            </Routes>
            </div>
        </div>

    </div>
  );
}
export default Courses;