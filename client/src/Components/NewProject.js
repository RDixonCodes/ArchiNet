import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import Button from 'react-bootstrap/Button';
import { Paper, 
    FormControl, 
    InputLabel, 
    OutlinedInput,
    FormHelperText
    } from '@material-ui/core';

const ProjectForm = (props) => {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("")
    const [built, setBuilt] = useState(0);
    const [architect, setArchitect] = useState("")
    const [location, setLocation] = useState("");
    const [state, setState] = useState();
    const [errors, setErrors] = useState([]);



    
    
    
    const onSubmitHandler = (u, data) => {

        u.preventDefault();
        axios.post('http://localhost:8000/api/projects/new', {
            name, imageUrl, 
            architect, location,
            built
        })
            .then(() => navigate('/projects'))
            .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);

        })

    };
    
    


    const styles = {
        paper: {
            width: "40rem", padding: "1rem",
            marginLeft:380,
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
            marginRight:-220,
            marginBottom:10,
        },
        Link: {
            marginRight:10,
            marginTop: 30
        },
        h1: {
            display:"inline-Block",
            marginTop:20
        },
        p: {
            marginLeft:490
        }

    }
    return (
        <div>
            <h1 style={{marginTop:50}}>Archi<span style={styles.span}>fy</span>.</h1>
        <Paper elevation={3} style={{width:"40rem",marginLeft:380, marginBottom:5,marginTop:20, background:"black"}}>
        <h1 style={{display:"inline-block",marginRight:80}}>Add Pirate</h1>
        <Button style={styles.button} href="/projects" variant="outline-light">- Home</Button>
        </Paper>
        <Paper elevation={3} style={styles.paper}>
            <h1 style={{marginBottom:20}}>Project Form</h1>
            <form onSubmit = {onSubmitHandler}>
            {errors.map((err,i) =>{return (<p key={i}>{err}</p>)
            })}
                <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                    {/* <InputLabel >Name: </InputLabel> */}
                    <OutlinedInput type="text" name="name" 
                    value={name} onChange={(e)=>setName(e.target.value)} color="secondary"/>
                    <FormHelperText htmlFor={errors}>Name:</FormHelperText>
                    </FormControl><br/>

                    <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                    {/* <InputLabel>Image URL: </InputLabel> */}
                    <OutlinedInput type="text" name="imageUrl"
                    value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} color="secondary"/>
                    <FormHelperText htmlFor={errors}>Image URL:</FormHelperText>
                    </FormControl><br/>

                    <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                    {/* <InputLabel>Architect: </InputLabel> */}
                    <OutlinedInput type="Text" name="number"
                    value={architect} onChange={(e)=>setArchitect(e.target.value)} color="secondary"/>
                    <FormHelperText htmlFor={errors}>Architect:</FormHelperText>
                    </FormControl><br/>

                    <FormControl variant="outlined" size="small" style={styles.input}>
                    {/* <InputLabel htmlFor={errors}>Location: </InputLabel> */}
                    <OutlinedInput type="text" name="phrase"
                    value={location} onChange={(e)=>setLocation(e.target.value)} color="secondary"/>
                    <FormHelperText htmlFor={errors}>Location:</FormHelperText>
                    </FormControl><br/>

                    <FormControl variant="outlined" size="small" style={styles.input}>
                    {/* <InputLabel htmlFor={errors}>Year Built: </InputLabel> */}
                    <OutlinedInput type="number" name="built"
                    value={built} onChange={(e)=>setBuilt(e.target.value)} color="secondary"/>
                    <FormHelperText htmlFor={errors}>Year Built:</FormHelperText>
                    </FormControl><br/>

        
                <Button type="submit" variant="outline-danger" color="primary">
                Add Project
                </Button>
            </form>
        </Paper>
    </div>
    )
}
export default ProjectForm