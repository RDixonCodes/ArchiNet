import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import Button from 'react-bootstrap/Button';
import { Paper, 
    FormControl, 
    OutlinedInput, 
    FormHelperText} from '@material-ui/core';

const UpdateProject = (props) => {
    const { id } = props;
    const [name, setName] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [architect, setArchitect] = useState();
    const [location, setLocation] = useState();
    const [built, setBuilt] = useState(0);
    const [project, setProject] = useState({})
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/projects/' + id)
            .then(res => {
                setName(res.data.name);
                setImageUrl(res.data.imageUrl);
                setArchitect(res.data.architect);
                setLocation(res.data.location);
                setBuilt(res.data.built);
            })
    }, [])

    const updateProject = (e, data) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/projects/' + id + '/edit', {
            name, 
            imageUrl,
            architect,
            location,
            built
        },{ withCredentials: true })
        .then(() => navigate("/projects"))
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
            width: "40rem", padding: "1rem",
            marginLeft:400,
            marginTop: -15
        },
        input: {
            marginBottom: "1rem",
            width:"20rem"
        },
        button: {
            marginLeft:535,
            marginBottom:5,
        },
        h1: {
            display: "inline-block",
            marginTop:20,
            marginBottom:10
        },
        p: {
            display:"inline-block",
            marginRight:-220,
            marginLeft:115
        }

    }
    return (
        <>
        <h1 style={styles.h1}>Archi<span style={{color:"red",fontStyle:"italic"}}>fy</span>.</h1>
        <Paper elevation={3} style={{width:"40rem",marginLeft:400, background:"black",
            paddingTop:10, paddingBottom:5}}>
        <Button style={styles.button} href="/projects" variant="outline-light">&#x21e0; Home</Button>
        </Paper><br/>
        <Paper elevation={6} style={styles.paper}>
            <h1>Edit Project</h1>
            <form onSubmit = {updateProject}>
            {errors.map((err,i) =>{return (<p style={{color:"red"}} key={i}>{err}</p>)
            })}
                <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                    <FormHelperText style={{marginBottom:5, marginLeft:1}}>Name</FormHelperText>
                    <OutlinedInput type="text" name="name"
                    value={name} onChange={(e)=>setName(e.target.value)} color="secondary"/>
                    </FormControl><br/>

                    <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                    <FormHelperText style={{marginBottom:5, marginLeft:1}}>ImageUrl</FormHelperText>
                    <OutlinedInput type="text" name="imageUrl"
                    value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} color="secondary"/>
                    </FormControl><br/>

                    <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                    <FormHelperText style={{marginBottom:5, marginLeft:1}}>Architect</FormHelperText>
                    <OutlinedInput type="text" name="architect"
                    value={architect} onChange={(e)=>setArchitect(e.target.value)} color="secondary"/>
                    </FormControl><br/>
                    
                    <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                    <FormHelperText style={{marginBottom:5, marginLeft:1}}>Built</FormHelperText>
                    <OutlinedInput type="number" name="built"
                    value={built} onChange={(e)=>setBuilt(e.target.value)} color="secondary"/>
                    </FormControl><br/>

                <Button type="submit" variant="outline-dark">
                Update Project
                </Button>
            </form>
        </Paper>
    </>
    )
}
export default UpdateProject;