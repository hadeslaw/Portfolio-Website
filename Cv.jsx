import React from "react";
import '../App.css';
import logo from './CV.png'


function Header(){
    return <img src={logo} alt ="Logo" />;
}

export default function Cv(){
    return Header();
}