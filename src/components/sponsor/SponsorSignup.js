import React, {useReducer, useState} from "react";
import Navbar from "../landingPage/navBar/Navbar";
import Input from "../input/Input";
import Button from "../button/Button";
import ImageHolder from "../landingPage/image/ImageHolder";
import rightImage from "../../assets/images/Mask Group 4.svg";
import bgImage from "../../assets/images/Mask Group 22@2x.png";
import leftImage from "../../assets/images/Mask Group 2.svg";
import {inputReducer} from "../../reduxController/reducers/inputReducer";
import {useDispatch} from "react-redux";
import {handleFields, RegisterUser} from "../globalServices/globalFunction";
import {message} from "antd";
import {setCurrentUser} from "../../reduxController/actions/userActions";
import {userAuth} from "../../APIHandler/APIController";
import {login} from "../landingPage/homePage/Homepage";
import Footer from "../landingPage/footer/Footer";

const SponsorSignup = () =>{
    const [formInput, setInput] = useReducer(inputReducer, {
        full_name: '',
        email: '',
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
            message.success("Registration successful", 3);
            if(data.user !== null){
                dispatch(setCurrentUser({...data.user}));
            }
            window.location.href = "/sponsor"
        }else{
            message.error("Unable to create account. Please, make sure the phone number or email doesn't exist", 5)
            setLoading(false)
        }
    };

    const signup = () => {
        RegisterUser(setLoading, setError, formInput, userAuth, onRegister, "sponsor")
    };

    return(
        <div>
            <div className="wrapper">
                <Navbar className="bg-pink"/>
                <div className="row-wrapper">
                    <div className="col-wrapper z-landing-form">
                        <div className="form-wrapper">
                            <h1>
                                Change a life for the better today,<br/> Sponsor an Exam.
                            </h1>
                            <h4>
                                Start Sponsoring
                            </h4>
                            <div>
                                <Input height="z-h-54" placeholder="Jonas Blue" label={"Full Name"} name={"full_name"} value={formInput.full_name}
                                       handleInput={handleChange} validate={errArr.includes("full_name")} msg={"Please enter your full name"}/>
                                <Input height="z-h-54" placeholder="jonasBlue@sco.com" label={"Email"} name={"email"} value={formInput.email}
                                       handleInput={handleChange} validate={errArr.includes("email")} msg={"Please enter your email"}/>
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
            </div>
            <Footer/>
        </div>
    )
};

export default SponsorSignup