import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import ModuleButtons from "./ModuleButtons";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);


  return (
    <div>
      <ModuleButtons/>
      <input value={module._id}
          onChange={(e) => dispatch(setModule({ ...module, _id: e.target.value }))}
        />
        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        /><br/>
        <textarea cols={49} value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        /><br/>
        <button className="btn wd-button-green" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
          </button>
        <button className="btn btn-primary" onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
        
      
      <ul className="list-group wd-modules">
      

        {moduleList
            .filter((module) => module.course === courseId)
            .map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
              <button className="btn wd-button-red wd-eddel-button"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
              <button className="btn btn-primary wd-eddel-button"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

              

                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: any, index: number) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;