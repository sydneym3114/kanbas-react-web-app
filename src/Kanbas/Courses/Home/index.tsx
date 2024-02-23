import ModuleList from "../Modules/List";
import CourseStatus from "./CourseStatus";
import "./index.css";
function Home() {
  return (
    <div className="d-flex">
        <div className="flex-fill">
            <ModuleList/>
            <div className="d-lg-none">
                <CourseStatus/>
            </div>
        </div>
        <div className="flex-grow-0 me-2 d-none d-lg-block" style={{"width": "300px"}}>
            <CourseStatus/>
        </div>
      
      
      
    </div>
  );
}
export default Home;