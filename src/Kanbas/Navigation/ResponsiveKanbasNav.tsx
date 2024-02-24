import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaNetworkWired, FaQuestionCircle } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
function ResponsiveKanbasNav() {
    const links = [
        { label: "Account",   icon: <FaRegUserCircle className="fs-1 wd-lightgray-icon" />  },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-1" />  },
        { label: "Courses",   icon: <FaBook className="fs-1" />           },
        { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-1" /> },
        { label: "Inbox",  icon: <FaInbox className="fs-1" /> },
        { label: "History",  icon: <FaClock className="fs-1" /> },
        { label: "Studio",  icon: <FaNetworkWired className="fs-1" /> },
        { label: "Commons",  icon: <FaRightFromBracket className="fs-1" /> },
        { label: "Help",  icon: <FaQuestionCircle className="fs-1" /> },
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-course-nav-resp">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`} > {link.icon}  {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}
export default ResponsiveKanbasNav;