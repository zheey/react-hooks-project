import React, {useEffect, useReducer, useState} from 'react';
import './homepage.scss';
import ImageHolder from "../image/ImageHolder";
import bgImage from '../../../assets/images/Mask Group 3@2x.png';
import leftImage from '../../../assets/images/Mask Group 2.svg';
import rightImage from '../../../assets/images/Mask Group 4.svg';
import Navbar from "../navBar/Navbar";
import Input from "../../input/Input";
import Button from "../../button/Button";
import Services from "../../services/Services";
import AboutUs from "../section/AboutUs";
import StudentSection from "../section/StudentSection";
import Footer from "../footer/Footer";
import {inputReducer} from "../../../reduxController/reducers/inputReducer";
import {handleFields, RegisterUser} from "../../globalServices/globalFunction";
import {message} from "antd";
import {userAuth} from "../../../APIHandler/APIController";
import {setCurrentUser} from "../../../reduxController/actions/userActions";
import {useDispatch} from "react-redux";

// redirect to login page
export const login =() => {
    window.location.href = `/login`;
}

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
    };

    return(
    <div>
        <div className="wrapper">
            <Navbar/>
            <div className="row-wrapper">
                <div className="col-wrapper z-landing-form">
                    <div className="form-wrapper">
                        <h1>
                            Receive Funding & Sponsorship for any Examination
                        </h1>
                        <h4>
                            Start applying for sponsorships
                        </h4>
                        <div>
                            <Input height="z-h-54" placeholder="Jonas Blue" label={"Full Name"} name={"full_name"} value={formInput.full_name}
                                   handleInput={handleChange} validate={errArr.includes("full_name")} msg={"Please enter your full name"}/>
                            <Input height="z-h-54" placeholder="08022322228" label={"Phone"} type={"number"} name={"phone_number"} value={formInput.phone_number}
                                   handleInput={handleChange} validate={errArr.includes("phone_number")} msg={"Field cannot be empty"}/>
                            <Input height="z-h-54" placeholder="Jonas Blue" label={"Password"} type={"password"} name={"password"}  value={formInput.password}
                                   handleInput={handleChange} validate={errArr.includes("password")} msg={"Field cannot be empty"}/>
                        </div>
                        <div className="button-wrapper z-mt-50">
                            <Button label="Sign Up" style="z-action-btn"  func={signup} loading={loading}/>
                            <span className="primary-light">or</span>
                            <p className="primary pointer" onClick={e => {login()}}>Log In</p>
                        </div>
                    </div>
                </div>
                <div className="col-wrapper">
                    <ImageHolder image={rightImage} name="bg-image z-right-img"/>
                    <ImageHolder image={bgImage} name="landing-image"/>
                    <ImageHolder image={leftImage} name="bg-image z-left-img"/>
                </div>
            </div>
            <div className="z-service-wrapper">
                <Services label="1000+ Sponsors"/>
                <Services label="10000+ Students"/>
                <Services label="1000+ Sponsorships granted"/>
            </div>
        </div>
        <AboutUs/>
        <StudentSection/>
        <Footer/>
    </div>
    )
}