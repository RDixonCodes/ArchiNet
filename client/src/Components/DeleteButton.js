import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

const DeleteButton = (props) => {
  const { projectId, successCallback } = props;
  const [project, setProject] = useState({});
  const [errors, setErrors] = useState();

  const deleteProject = (e) => {

    axios.delete("http://localhost:8000/api/projects/" + projectId + "/delete", {
      
        withCredentials: true,
      })
      .then((res) => {
        alert("Say goodbye to this beauty.");
        successCallback();
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <Button onClick={deleteProject} variant="outline-danger">
      - Delete
    </Button>
  );
};
export default DeleteButton;
