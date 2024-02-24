import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaChevronDown, FaCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import ResponsiveKanbasNav from "./Navigation/ResponsiveKanbasNav";
function Kanbas() {
    const location = useLocation();
    const pathname = location.pathname;
    const pathArray = pathname.split('/');
    const lastWord = pathArray[pathArray.length - 1];
    return (
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
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/:courseId/*" element={<Courses/>} />
            </Routes>

            </div>
        </div>
    );
}
export default Kanbas;