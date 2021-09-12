import React, { useState } from 'react';
import axios from 'axios';
import  Button  from 'react-bootstrap/Button';
import{Paper,
        FormControl,
        InputLabel,
        OutlinedInput
    } from '@material-ui/core';

const Register = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState([]);

    const registerUser = e => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        };
        axios.post("http://localhost:8000/api/user/register", newUser, 
        {
            withCredentials: true
        })
        .then(res => {
            console.log(res.data);
            // when we successfully create the account, reset state for registration form.
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setErrors([]);
            setConfirmReg("Thank you for Registering, you can now log in!");
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);

        },[])
    }
    
    const styles = {

        paper: {
                width: "30rem", padding: "1rem"
        },
        registration:{
                marginLeft: 500
        },
        span: {
            color:"red",
            fontStyle:"italic"
        },
        input: {
                marginBottom: "1rem",
                width:"25rem"
        },
        button: {
                width: "100%",
                marginLeft:-400,
        },
        
        h1: {
                marginTop:20
        }
    }

    return (
        
        <div className="registration" style={styles.registration}>
                <h1 style={{marginRight:455, marginTop:20}}>Welcome to Archi<span style={styles.span}>fy</span>.</h1>
                <Paper elevation={6} style={styles.paper}>
                        <h1>Register</h1>
                        {
                            confirmReg ?
                            <h4 style={{color:"green"}}>{confirmReg}</h4>
                            : null
                        }
                        <form onSubmit = {registerUser}>
                        {errors.map((err,i) =>{return (<p style={{color:"red"}} key={i}>{err}</p>)
                        })}
                        <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                        <InputLabel>First Name: </InputLabel>
                        <OutlinedInput type="text" name="name" 
                        value={firstName} onChange={(e)=>setFirstName(e.target.value)} color="secondary"/>
                            </FormControl><br/>
        
                            <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                            <InputLabel>Last Name: </InputLabel>
                            <OutlinedInput type="text" name="imageUrl"
                            value={lastName} onChange={(e)=> setLastName(e.target.value)} color="secondary"/>
                            </FormControl><br/>

                            <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                            <InputLabel>Email: </InputLabel>
                            <OutlinedInput type="text" name="email"
                            value={email} onChange={(e)=> setEmail(e.target.value)} color="secondary"/>
                            </FormControl><br/>
        
                            <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                            <InputLabel>Password: </InputLabel>
                            <OutlinedInput type="text" name="password"
                            value={password} onChange={(e)=>setPassword(e.target.value)} color="secondary"/>
                            </FormControl><br/>
        
                            <FormControl variant="outlined" size="small" style={styles.input}>
                            <InputLabel htmlFor={errors}>Confirm Password: </InputLabel>
                            <OutlinedInput type="text" name="confirmPassword"
                            value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} color="secondary"/>
                            </FormControl><br/>
        
                        <Button type="submit" variant="outline-dark">
                            Register
                        </Button>
                    </form>
                </Paper>
            </div>
    )
};
export default Register;