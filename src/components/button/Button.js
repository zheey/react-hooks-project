import React from 'react';
import './button.scss'
import {Icon} from "antd";


export default ({style, label, func, loading, children, disabled}) => (
    <div className="input">
        <button className={`button ${style}`} onClick={e => {func()}} disabled={disabled}>
            {loading? <Icon type="loading"/> : label}
            { children }
        </button>
    </div>
)