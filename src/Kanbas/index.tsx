import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaChevronDown, FaCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import ResponsiveKanbasNav from "./Navigation/ResponsiveKanbasNav";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
function Kanbas() {
    const location = useLocation();
    const pathname = location.pathname;
    const pathArray = pathname.split('/');
    const lastWord = pathArray[pathArray.length - 1];
    const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", semester: "Semester",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

    return (
      <Provider store={store}>
        <div className="d-flex">
            <div className="d-none d-md-block">
                <KanbasNavigation/>
            </div>
            
            <div style={{ flexGrow: 1 }}>
            <h3 className={pathname.includes("Courses/") ? "d-none" : "d-md-none wd-top-black-bar"}>
                <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <HiMiniBars3 />
                </button>
                <span > {lastWord}</span> <span style={{"color":"black", "paddingRight": "22px"}}><FaChevronDown/></span>
            </h3>
            <div className="offcanvas offcanvas-start wd-off-nav" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                <h5 className="offcanvas-title wd-kanbas-logo" id="offcanvasExampleLabel">
                    <FaCircle/>
                    KANBAS
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                    {/* <FaXmark/> */}
                </button>
                </div>
                <div className="offcanvas-body">
                    <ResponsiveKanbasNav/>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
                <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            </Routes>

            </div>
        </div>
        </Provider>
    );
}
export default Kanbas;