import React, { Component } from 'react';
import ContentsSession from './innerComponents/ContentsSession';
import petDudePic from '../img/Dog.png'

class CenterSession extends Component {
    render() { 
    return ( 
        <div style={center}>
            <div style={contentsSession}>
                <ContentsSession 
                key={this.props.getBrandList} 
                {...this.props}
                />
            </div>
            <div style={picture}>
                <img style={petDudeBack} src={petDudePic}></img>
            </div>
            <div styel={social}>
                <ul>
                    <li>{<i className="fab fa-facebook-square"></i>}</li>
                    <li>{<i className="fab fa-instagram"></i>}</li>
                    <li>{<i className="fab fa-twitter-square"></i>}</li>
                    <li>{<i className="fab fa-youtube-square"></i>}</li>
                </ul>
            </div>
        </div>
    );
}}
 
const center = {
    height: "80vh",
    width: "100%",
    display: "grid",
    gridColumn: "repeat(3, 1fr)",
    gridTemplateAreas:
    "'contentsSession picture social'"
  };
  
const contentsSession = {
    width: "70vw",
    gridArea: "contentsSession",
  };
  
const picture = {
    gridArea: "picture",
    position: "relative",
  };

const petDudeBack = {
    position: "absolute",
    height: "90vh",
    left: "-20vw",
    zIndex: "3",
  };
  
const social = {
    gridArea: "social",
    width: "20px"
  };

export default CenterSession;


 