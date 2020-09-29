import React from 'react'
import PropTypes from "prop-types";
import style from "./style.css"

const Profile = props => {
    const handleClick = e => {
        e.preventDefault();
        
        alert(`Hello ${props.fullname}`)
    };
    const card = {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        maxWidth: "300px",
        margin: "auto",
        textAlign: "center"
        
      }
    const link = {textDecoration:"none"}
    return(
        <div style = {card}>
            <ul>
                <li>fullname : {props.fullname}</li>
                <li>age : {props.age}</li>
                <li>bio : {props.bio}</li>
                <li>profession : {props.profession}</li>
               
                
            </ul>
            {props.children}
            <button><a style = {link} href="/" onClick={handleClick}> Click me </a></button>
           
        </div>
    )
}

Profile.defaultProps = {
    age: 25
   };

   Profile.propTypes = {
    
    age: PropTypes.number,
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleClick : PropTypes.func
   };





export default Profile ;