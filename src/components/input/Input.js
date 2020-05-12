import React from 'react';
import './input.scss'



export default ({height, placeholder, label, type="text", value, handleInput, name, validate, msg, className = ''}) => (
    <div className={`input ${className}`}>
        <p className="primary-light">
            {label}
        </p>
        <input className={`z-input font ${height}`} name={name} placeholder={placeholder} type={type} value={value} onChange={e =>{handleInput(e)}}/>
        {validate ? <span>{msg}</span> :"" }
    </div>
)