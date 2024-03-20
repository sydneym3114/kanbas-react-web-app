import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaNetworkWired, FaQuestionCircle } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
function KanbasNavigation() {
    const links = [
        { label: "Account",   icon: <FaRegUserCircle className="fs-4 wd-white-icon" />  },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-4" />  },
        { label: "Courses",   icon: <FaBook className="fs-4" />           },
        { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-4" /> },
        { label: "Inbox",  icon: <FaInbox className="fs-4" /> },
        { label: "History",  icon: <FaClock className="fs-4" /> },
        { label: "Studio",  icon: <FaNetworkWired className="fs-4" /> },
        { label: "Commons",  icon: <FaRightFromBracket className="fs-4" /> },
        { label: "Help",  icon: <FaQuestionCircle className="fs-4" /> },
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            <li><a href="http://northeastern.edu"><img src="/images/northeastern-banner-N.png" alt="N"/></a></li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon} <br/> {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;