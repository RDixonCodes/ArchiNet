import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Button from "react-bootstrap/Button";
import { Paper } from "@material-ui/core";

const ProjectList = (props) => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects")
      .then((res) => setProjects(res.data));
  }, []);

  const logout = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/user/logout", {})
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const styles = {
    paper: {
      width: "50rem",
      padding: "1rem",
      marginLeft: 320,
      marginTop: 10,
      height: "10rem",
    },
    Link: {
      display: "inline-block",
      marginLeft: 670,
      marginRight: 5,
      color: "black",
      textDecoration: "none",
    },
    h2: {
      display: "inline-block",
      color: "white",
      marginRight: 170,
    },

    button: {
      display: "inline-block",
      marginRight: 10,
      marginLeft: 225,
      marginBottom: 10,
    },

    image: {
      display: "inline-block",
      float: "left",
    },
    name: {
      display: "inline-block",
      marginRight: 10,
    },
  };

  return (
    <div>
      <h1 style={{ marginLeft:120 ,marginTop: 20 }}>
        Archi<span style={{ color: "red", fontStyle: "italic" }}>Net</span>
      </h1>
      <Paper
        elevation={3}
        style={{
          width: "50rem",
          marginLeft: 320,
          marginTop: 20,
          background: "black",
          paddingRight: 5,
          paddingTop: 5,
        }}
      >
        <h2 style={styles.h2}>Project List:</h2>
        <Button
          href="/projects/new"
          variant="outline-light"
          style={styles.button}
        >
          + Add Project
        </Button>
        <Button
          onClick={logout}
          variant="outline-light"
          style={{ marginBottom: 10 }}
        >
          - Logout
        </Button>
      </Paper>
      {projects
        .sort((project, i) =>
          project.name.toLowerCase() > i.name.toLowerCase() ? 1 : -1
        )
        .map((project, i) => {
          return (
            <Paper key={i} elevation={3} style={styles.paper}>
              <div className="image" style={styles.image}>
                <img
                  style={{
                    width: 230,
                    height: 130,
                    objectFit: "cover",
                    marginBottom: 10,
                  }}
                  src={project.imageUrl}
                  alt="image"
                ></img>
              </div>
              <div className="name" style={{ marginTop: 20 }}>
                <h2>"{project.name}"</h2>
                <Button
                  href={"/projects/" + project._id}
                  variant="outline-dark"
                  style={{ marginRight: 7, width: "7rem" }}
                >
                  View
                </Button>
              </div>
            </Paper>
          );
        })}
    </div>
  );
};
export default ProjectList;
