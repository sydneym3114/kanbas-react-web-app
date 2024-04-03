import React, { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`
  const [module, setModule] = useState({
    id: 1, name: "NodeJS Module", description: "creating a module", course: "Web Development",
  });
  const MODULE_URL = `${API_BASE}/a5/module`
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button className="btn btn-primary" onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button className="btn btn-primary" onClick={fetchAssignment} >
        Fetch Assignment
      </button>
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary" href={`${API_BASE}/a5/assignment`}>
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary" href={`${API_BASE}/a5/assignment/title`}>
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <h4>Edit Assignment</h4>

      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Completion
      </a>
      <label  className="form-control">
        <input type="checkbox" checked={assignment.completed}
               onChange={() => setAssignment({ ...assignment,
                completed: !assignment.completed })} />
        Update Completion
      </label>

      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <input className="form-control" type="number" value={assignment.score} 
        onChange={(e) => setAssignment({ ...assignment, 
          score: parseInt(e.target.value)})}/>


      <h4>Module Info</h4>
      <a className="btn btn-primary" href={`${API_BASE}/a5/module`}>
        Get Module
      </a> 
      <a className="btn btn-primary" href={`${API_BASE}/a5/module/name`}>
        Get Module Name
      </a>
      <a className="btn btn-primary" href={`${API_BASE}/a5/module/description`}>
        Get Module Description
      </a> <br/><br/>
      <a className="btn btn-primary" href={`${MODULE_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/><br/><br/>
      <a className="btn btn-primary" href={`${MODULE_URL}/description/${module.description}`}>
        Update Module Description
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            description: e.target.value })}
        value={module.description}/>
    </div>
  );
}
export default WorkingWithObjects;