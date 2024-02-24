import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
import { FaHouse, FaCircleNodes, FaPlug, FaFileLines, FaRocket, FaFile, FaUserGroup, FaComments, FaBullhorn, FaGear } from "react-icons/fa6";
function CourseNavigation({ type }: { type: string }) {
  const links = ["Home", "Modules", "Piazza", "Assignments", "Quizzes", "Grades", "People", "Discussions", "Announcements", "Pages", "Settings"];
  const icons = [<FaHouse/>, <FaCircleNodes/>, <FaPlug/>, <FaFileLines/>, <FaRocket/>, <FaFile/>, <FaUserGroup/>, <FaComments/>, <FaBullhorn/>, <FaFile/>,<FaGear/>];
  const { pathname } = useLocation();
  return (
    <ul className= {type}>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link} data-toggle="collapse" data-target="collapseExample"> {type === "wd-nav-resp" ? icons[index] : ""} {link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;