import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {
  Paper,
  OutlinedInput,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { navigate } from "@reach/router";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  const [username, setUsername] = useState();
  const [user] = useState();

  const login = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/user/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/projects");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.msg);
      }, []);
  };

  const styles = {
    paper: {
      width: "30rem",
      padding: "1rem",
      marginLeft: 500,
    },
    registration: {
      display: "inline-block",
    },
    input: {
      marginBottom: "1rem",
      width: "25rem",
    },
    button: {
      width: "100%",
      marginLeft: -400,
    },
    Link: {
      marginRight: 10,
      marginTop: 30,
    },
    h1: {
      display: "inline-Block",
      marginTop: 20,
    },
    p: {
      display: "inline-block",
      marginLeft: 225,
    },
  };

  return (
    <>
      <Paper elevation={6} style={styles.paper}>
        <h1>Login</h1>
        <form onSubmit={login}>
          {/* {errors.map((err,i) =>{return (<p key={i}>{err}</p>)
                        })} */}
          <p className="error-text" style={{ color: "red" }}>
            {errorMessage ? errorMessage : ""}
          </p>
          <FormControl variant="outlined" size="small" style={styles.input}>
            <InputLabel>User Email: </InputLabel>
            <OutlinedInput
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color="secondary"
            />
          </FormControl>
          <br />

          <FormControl
            variant="outlined"
            size="small"
            style={styles.input}
            errors="true"
          >
            <InputLabel>Password: </InputLabel>
            <OutlinedInput
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color="secondary"
            />
          </FormControl>
          <br />

          <Button type="submit" variant="outline-dark">
            Login
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Login;
