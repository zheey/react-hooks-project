import {Icon} from "antd";
import React from "react";

export const CustomIcon = ({ className, type, theme="" }) =>
    <Icon type={type} theme={`${theme}`} className={`font-12 white pointer ${className}`}/>;

export const ArrowLeft = ({ className }) => (
    <CustomIcon type={"arrow-left"} className={className}/>
);

export const ArrowRight = ({ className }) => (
    <CustomIcon type={"arrow-right"} className={className}/>
);
export const CaretRight = ({ className }) => (
    <CustomIcon type={"caret-right"} className={className}/>
);
export const CaretDown = ({ className }) => (
    <CustomIcon type={"caret-down"} className={className}/>
);
export const Down = ({ className }) => (
    <CustomIcon type={"down"} className={className}/>
);
export const Bell = ({ className }) => (
    <CustomIcon type={"bell"} theme={"filled"} className={className}/>
);
export const Tag = ({ className }) => (
    <CustomIcon type={"tag"} theme={"filled"} className={className}/>
);
export const CheckCircle = ({ className }) => (
    <CustomIcon type={"check-circle"} theme={"filled"} className={className}/>
);