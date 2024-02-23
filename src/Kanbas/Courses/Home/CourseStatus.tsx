import {FaCalendar, FaBan, FaCircleCheck, FaCalendarDays} from "react-icons/fa6";
function CourseStatus() {
    return(
        <div>
            <h3>Course Status</h3>
                <div className="wd-publish-buttons">
                    <button type="button"><FaBan />  Unpublish</button>
                    <button className="wd-button-green" type="button"><FaCircleCheck /> Published</button>
                </div>
                
                <div className="wd-status-buttons">
                    <button>Import Existing Content</button>
                    <button>Import From Commons</button>
                    <button>Choose Home Page</button>
                    <button>View Course Stream</button>
                    <button>New Announcement</button>
                    <button>New Analytics</button>
                    <button>View Course Notifications</button>
                </div>                        

                <div className="wd-comming-up">
                    <h3>Comming Up</h3>
                    <div>
                        <FaCalendarDays/>
                        <a href="">View Calendar</a>
                    </div>
                </div>
                <hr/>
                <ul className="wd-comming-up-links">
                    <li><a href=""><FaCalendar/> Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>
                    <li><a href=""><FaCalendar/>  Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>
                    <li><a href=""><FaCalendar/>  CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
                </ul>
        </div>
    );
}
export default CourseStatus;