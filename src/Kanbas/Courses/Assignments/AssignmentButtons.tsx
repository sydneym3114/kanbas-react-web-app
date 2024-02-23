import { FaEllipsisV} from "react-icons/fa";
function AssignmentButtons() {
    return(
        <div className="wd-mod-buttons">
            <input placeholder="Search for Assignments"/>
            <button type="button">+ Group</button>
            <button className="wd-button-red" type="button">+ Assignment</button>
            <button type="button"><FaEllipsisV className="ms-2" /></button>
        </div>
    );
}
export default AssignmentButtons;