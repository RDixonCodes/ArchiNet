import React from 'react';
import { navigate, Link } from '@reach/router';
import Login from '../Components/Login';
import Register from '../Components/Register';
import {Button} from '@material-ui/core';


const RegLogin = () => {

    return (
    
    <div>
        <Register/>
            <hr style={{width:"32%", marginLeft:510}}/>
            <Login/>
        <div>
            <Button onClick={ ()=> navigate("/projects") }></Button>
        </div>
    </div>
    )
}
export default RegLogin;