import { FaEllipsisV} from "react-icons/fa";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function ModuleButtons() {
    return(
        <div className="wd-mod-buttons">
            <button type="button">Collapse All</button>
            <button type="button">View Progress</button>
            <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Publish All
                </button>
                <ul className="dropdown-menu">
                    <li><a href="#" className="dropdown-item">Publish All</a></li>
                    <li><a href="#" className="dropdown-item">Publish All Modules and Items</a></li>
                    <li><a href="#" className="dropdown-item">Publish Modules Only</a></li>
                    <li><a href="#" className="dropdown-item">Unpublish All</a></li>
                </ul>
            </div>
            
            <button className="wd-button-red" type="button">+ Module</button>
            <button type="button"><FaEllipsisV className="ms-2" /></button>
        </div>
    );
}

export default ModuleButtons;