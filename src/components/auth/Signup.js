import React, {useReducer, useEffect, useState} from 'react';
import Navbar from "../landingPage/navBar/Navbar";
import Input from "../input/Input";
import Button from "../button/Button";
import ImageHolder from "../landingPage/image/ImageHolder";
import rightImage from "../../assets/images/Mask Group 4.svg";
import bgImage from "../../assets/images/Mask Group 3@2x.png";
import leftImage from "../../assets/images/Mask Group 2.svg";
import Footer from "../landingPage/footer/Footer";
import {login} from "../landingPage/homePage/Homepage";
import {inputReducer} from "../../reduxController/reducers/inputReducer";
import {userAuth} from "../../APIHandler/APIController";
import {handleFields, RegisterUser} from "../globalServices/globalFunction";
import {message} from "antd";
import {setCurrentUser} from "../../reduxController/actions/userActions";
import {useDispatch} from "react-redux";

export default () => {

    const [formInput, setInput] = useReducer(inputReducer, {
        full_name: '',
        phone_number: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const [errArr, setError] = useState([]);
    const dispatch = useDispatch();

    //handles input change
    const handleChange = (e) => {
        handleFields(setError, setInput, e)
    };

    //callback for user registration
    const onRegister = (status, data) => {
        if(status){
            message.success("User registration successful", 3);
            if(data.user !== null){
                dispatch(setCurrentUser({...data.user}));
            }
            window.location.href = "/student"
        }else{
            message.error("Unable to create account. Please, make sure the phone number doesn't exist", 5)
            setLoading(false)
        }
    }

const signup = () => {
    RegisterUser(setLoading, setError, formInput, userAuth, onRegister, "register")
}
    return (
        <div>
            <div className="wrapper">
                <Navbar/>
                <div className="row-wrapper login">
                    <div className="col-wrapper z-landing-form">
                        <div className="form-wrapper">
                            <h1>
                                <span>Welcome, </span> Sign up <br/>
                                <span>and start applying</span>
                            </h1>
                            <div>
                                <Input height="z-h-54" placeholder="Jonas Blue" label={"Full Name"} name={"full_name"} value={formInput.full_name}
                                       handleInput={handleChange} validate={errArr.includes("full_name")} msg={"Please enter your full name"}/>
                                <Input height="z-h-54" placeholder="" label={"Phone"} type={"number"} name={"phone_number"} value={formInput.phone_number}
                                       handleInput={handleChange} validate={errArr.includes("phone_number")} msg={"Field cannot be empty"}/>
                                <Input height="z-h-54" placeholder="" label={"Password"} type={"password"} name={"password"}  value={formInput.password}
                                       handleInput={handleChange} validate={errArr.includes("password")} msg={"Field cannot be empty"}/>
                            </div>
                            <div className="button-wrapper z-mt-50">
                                <Button label="Sign up" style="z-action-btn" func={signup} loading={loading}/>
                                <span className="primary-light">or</span>
                                <p className="primary pointer" onClick={e => {
                                    login()
                                }}>Log in</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-wrapper">
                        <ImageHolder image={rightImage} name="bg-image z-right-img"/>
                        <ImageHolder image={bgImage} name="landing-image"/>
                        <ImageHolder image={leftImage} name="bg-image z-left-img"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}