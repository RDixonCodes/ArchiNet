import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper } from '@material-ui/core';
import { navigate } from '@reach/router';
import  Button  from 'react-bootstrap/Button';
import DeleteButton from '../Components/DeleteButton';
import Heart from "react-heart";

const Details = (props) => {
    const { _id, id } = props; 
    const [project, setProject] = useState({});
    const [active, setActive] = useState(false);




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
            width: "50rem", 
            padding: "1rem",
            height:"21rem",
            marginLeft:320,
            marginTop:10
        },
        button: { 
            marginLeft:690, 
            marginBottom:5
        },
        h2: {
            display:"inline-block",
            marginRight:50,
            marginBottom:-20,
            marginTop:10
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
            <h1 style={{marginTop:20}}>Archi<span style={{color:"red", fontStyle:"italic"}}>fy</span>.</h1>
            <Paper elevation={3} style={{width:"50rem", marginLeft:320, background:"black", paddingTop:10
                , paddingBottom:5}}>
            <Button href="/projects" variant="outline-light"
            style={styles.button}>&#x21e0; Home</Button>
            </Paper>
            <Paper elevation={3} style={styles.paper}>
            <div className="pic" style={styles.pic}>
            <img  style={{width:320,height:300, objectFit:"cover",
                marginRight:90, marginLeft:7}} src={project.imageUrl} alt=""/>
            </div>
            <div className="about" styles={styles.about}>
            <h2 style={styles.h2}>About:</h2>
            <hr style={{width:"40%"}}/>
            <p style={{marginRight:20}}>Project Name: <strong>"{project.name}"</strong></p>
            <p style={{marginRight:50}}>Location: <strong>{project.location}</strong></p>
            <p style={{marginRight:50}}>Architect/Artist: <strong>{project.architect}</strong></p>
            <p style={{marginRight:50, marginBottom:-1}}>Year Built: <strong>{project.built}</strong></p><br/>
            </div>
            <div style={{marginTop:-10}}>
            <DeleteButton projectId={project._id} successCallback= {() => navigate("/projects")}></DeleteButton>
            <Button href={"/projects/" + project._id + "/edit"} variant="outline-secondary"
            style={{marginLeft:10, marginRight:50}}>&#8226; Edit</Button>
            </div>
            <p style={{marginTop:5}}>Like: 
            <Heart isActive={active} onClick={() => setActive(!active)} style={{width:18, marginRight:40, marginLeft:5}}/></p>
            </Paper><br/>
        </div>
    )
}

export default Details;