// import { FaEllipsisV} from "react-icons/fa";
// function ModuleButtons() {
//     return(
//         <div className="wd-mod-buttons">
//             <button type="button">Collapse All</button>
//             <button type="button">View Progress</button>
//             <div className="dropdown">
//                 <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Publish All
//                 </button>
//                 <ul className="dropdown-menu">
//                     <li><a className="dropdown-item" href="#">Publish All</a></li>
//                     <li><a className="dropdown-item" href="#">Publish All Modules and Items</a></li>
//                     <li><a className="dropdown-item" href="#">Publish Modules Only</a></li>
//                     <li><a className="dropdown-item" href="#">Unpublish All</a></li>
//                 </ul>
//             </div>
//             <button className="wd-button-red" type="button">+ Module</button>
//             <button type="button"><FaEllipsisV className="ms-2" /></button>
//         </div>
//     );
// }
// export default ModuleButtons;
import { FaEllipsisV } from "react-icons/fa";
 
function ModuleButtons() {
    return (
<div className="wd-mod-buttons">
<button type="button">Collapse All</button>
<button type="button">View Progress</button>
<div className="dropdown">
<button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Publish All
</button>
<ul className="dropdown-menu">                    <li><a href="#" className="dropdown-item">Publish All</a></li>                    <li><a href="#" className="dropdown-item">Publish All Modules and Items</a></li>                    <li><a href="#" className="dropdown-item">Publish Modules Only</a></li>                    <li><a href="#" className="dropdown-item">Unpublish All</a></li>                </ul>
</div>
<button className="wd-button-red" type="button">+ Module</button>
<button type="button" className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
<FaEllipsisV className="ms-2" />
</button>
<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
<li><a className="dropdown-item" href="#">Action</a></li>
<li><a className="dropdown-item" href="#">Another action</a></li>
<li><a className="dropdown-item" href="#">Something else here</a></li>
</ul>
</div>
    );
}
 
export default ModuleButtons;