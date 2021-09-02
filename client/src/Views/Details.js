import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper } from '@material-ui/core';
import { navigate } from '@reach/router';
import  Button  from 'react-bootstrap/Button';
import DeleteButton from '../Components/DeleteButton';

const Details = (props) => {
    const { _id, id } = props; 
    const [project, setProject] = useState({});




    useEffect(() => {
        axios.get("http://localhost:8000/api/projects/" + props.id,
        )
        .then(res => setProject({
            ...res.data,
        }))
        .catch(err => {console.log(err)});
    }, [])



    const styles = {
        paper: {
            width: "50rem", padding: "1rem",
            marginLeft:320,
            marginTop:0
        },

        h2: {
            display:"inline-block",
            marginRight:430
        },

        Link: {
            marginLeft:-10
        },

        pic:{
            display:"inline-block",
            float:"left"
        },

        about:{
            display:"inline-block",
            width:200,
        }
    }
    return (
        <div>
            <h1 style={{marginTop:20, marginBottom:-30}}>Archi<span style={{color:"red", fontStyle:"italic"}}>fy</span>.</h1>
            <Paper elevation={3} style={{width:"50rem", marginLeft:320, background:"black"}}>
            <h2 style={{marginTop:50, color:"white", fontSize:37}}>{project.name}</h2>
            </Paper>
            <Paper elevation={3} style={styles.paper}>
            <div className="pic" style={styles.pic}>
            <img  style={{width:300,height:250, objectFit:"cover",marginBottom:10,
                marginRight:100}} src={project.imageUrl} alt=""/>
            </div>
            <div className="about" styles={styles.about}>
            <h2 style={{display:"inline-block",marginRight:50}}>About:</h2>
            <hr style={{width:"40%"}}/>
            <p style={{marginRight:50}}>Location: <strong>{project.location}</strong></p>
            <p style={{marginRight:50}}>Architect: <strong>{project.architect}</strong></p>
            <p style={{marginRight:50}}>Year Built: <strong>{project.built}</strong></p><br/>
            </div>
            <DeleteButton projectId={project._id} successCallback= {() => navigate("/projects")}></DeleteButton>
            <Button href="/projects" variant="outline-dark"
            style={{marginLeft:10, marginRight:50}}>Home</Button>
            </Paper><br/>
        </div>
    )
}

export default Details;