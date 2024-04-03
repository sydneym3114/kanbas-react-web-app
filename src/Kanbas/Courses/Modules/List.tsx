import React, { useState, useEffect } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import ModuleButtons from "./ModuleButtons";
import { useSelector, useDispatch } from "react-redux";
import {
  
  deleteModule,
  addModule,
  updateModule,
  setModule,
  setModules
} from "./reducer";
import { KanbasState } from "../../store";
import * as client from "./client";
function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };




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
        <button className="btn wd-button-green" onClick={handleAddModule}>
          Add
          </button>
        <button className="btn btn-primary" onClick={handleUpdateModule}>
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
              onClick={() => handleDeleteModule(module._id)}>
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
            {selectedModule && selectedModule?._id === module._id && (
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