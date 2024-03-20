import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaChevronDown, FaCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import ResponsiveKanbasNav from "../Navigation/ResponsiveKanbasNav";
function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  
  const location = useLocation();
  const pathname = location.pathname;
  const pathArray = pathname.split('/');
  const lastWord = pathArray[pathArray.length - 1];

  return (
    <div>
      <h3 className="d-md-none wd-top-black-bar">
      <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <HiMiniBars3 />
        </button>
        <span>{course?.number} {course?.semester}<br/> {lastWord}</span>
        <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          <FaChevronDown/>
        </button>
      </h3>

      <div className="offcanvas offcanvas-start wd-off-nav" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title wd-kanbas-logo" id="offcanvasExampleLabel">
            <FaCircle/>
            KANBAS
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
            <FaXmark/>
          </button>
        </div>
        <div className="offcanvas-body" data-bs-dismiss="offcanvas">
          <ResponsiveKanbasNav/>
        </div>
      </div>

      <div className="collapse wd-collapse d-md-none" id="collapseExample">
        <div className="card card-body wd-card">
          <CourseNavigation type='wd-nav-resp'/>
        </div>
      </div>
    
    <div className="p-4">
        <h3 className="d-none d-md-block wd-course-header"><HiMiniBars3 /> {course?.number} {course?.semester} <span className="wd-course-header-end"> &gt; {lastWord}</span></h3>
        <hr className="d-none d-md-block"/>
        <div className="d-none d-md-block">
          <CourseNavigation type="wd-navigation"/>
        </div>
        <div>
            <div className="d-none d-md-block overflow-y-scroll position-fixed bottom-0 end-0" style={{ left: "275px", top: "100px" }} >
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules/>}/>
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
            <div className="d-md-none flex-fill">
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules/>}/>
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
    </div>
  );
}
export default Courses;