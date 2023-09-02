import React from "react";
import '../App.css';
import logo from './UnderCon.png'


function Header(){
    return <img src={logo} alt ="Logo" />;
}
export default function Portfolio(){
    return <h1 className="Portfolio">Portfolio</h1>;
}