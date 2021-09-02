import React from 'react';
import { Link } from '@reach/router';
import Carousel from 'react-bootstrap/Carousel';

const Title = () => {

    const styles = {
        h1:{
            color:"white"
        },
        p: {
            color:"white",

        },
        span: {
            color:"red",
            fontStyle:"italic"
        },
        Link: {
            color:"red",
            TextDecoration: "none"
        }

    }

    return(
            <div style={{width:"100%", backgroundColor:"black", height:1000, paddingTop:200}}>
                <h1 style={styles.h1}>Archi<span style={styles.span}>fy</span>.</h1>
            <div style={{width:650, marginLeft: 400, wordWrap:"word-break"}}>
                <p style={styles.p}>Welcome to <strong>Archi<span style={styles.span}>fy</span>!</strong> A place to enjoy the world of architecture.
                Here you will find a collection of projects that not only span a wide range of styles and time periods
                , but also the globe. Add your favorite project and browse those entered by others. To get started enter <span><Link to="/reglogin" style={styles.Link}>here</Link>.</span></p>
            </div>
        </div>
    )
}
export default Title;