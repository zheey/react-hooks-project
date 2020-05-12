import React, {useReducer, useState} from 'react';
import Navbar from "../landingPage/navBar/Navbar";
import Input from "../input/Input";
import Button from "../button/Button";
import ImageHolder from "../landingPage/image/ImageHolder";
import rightImage from "../../assets/images/Mask Group 4.svg";
import bgImage from "../../assets/images/Mask Group 3@2x.png";
import leftImage from "../../assets/images/Mask Group 2.svg";
import Footer from "../landingPage/footer/Footer";
import {inputReducer} from "../../reduxController/reducers/inputReducer";
import {handleFields, redirectToPage, RegisterUser} from "../globalServices/globalFunction";
import {message} from "antd";
import {userAuth} from "../../APIHandler/APIController";
import {useDispatch} from "react-redux";
import {setCurrentUser} from "../../reduxController/actions/userActions";

// redirect to signup page
export const signUp =() => {
    window.location.href = `/signup`;
}
const Login =  (props) => {

    const role = window.location.pathname === "/sponsor" ? "sponsor" : "user";

    const urlParams = new URLSearchParams(window.location.search)
    const [formInput, setInput] = useReducer(inputReducer, {
            phone_number: '',
            password: ''
        });
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [errArr, setError] = useState([]);

    //handles input change
    const handleChange = (e) => {
        handleFields(setError, setInput,  e)
    };

    //callback for user registration
    const onLogin = (status, data) => {
        if(status){
            if(data.user !== null){
                dispatch(setCurrentUser({...data.user}));
            }
            if(urlParams.get('redirect') && urlParams.get('redirect') === "ex"){
                redirectToPage(`/subjects/${urlParams.get("id")}`)
            }else {
                if(data.user.role === "student") {
                    redirectToPage("/student")
                }else if(data.user.role === "sponsor"){
                    redirectToPage("/sponsor")
                }else{

                }
            }
        }else{
            message.error("Unable to login.", 5)
            setLoading(false)
        }
    }

    const login = () => {
        RegisterUser(setLoading, setError, formInput, userAuth, onLogin, "login")
    };

    return (

        <div>
            <div className="wrapper">
                <Navbar/>
                <div className="row-wrapper login">
                    <div className="col-wrapper z-landing-form">
                        <div className="form-wrapper">
                            <h1>
                                <span>Welcome, </span> Log in
                            </h1>
                            <div>
                                <Input height="z-h-54" placeholder="08163318334" label={"Phone number"} type={"number"} name={"phone_number"} value={formInput.phone_number}
                                       handleInput={handleChange} validate={errArr.includes("phone_number")} msg={"Field cannot be empty"}/>
                                <Input height="z-h-54" placeholder="" label={"Password"} type={"password"} name={"password"}  value={formInput.password}
                                       handleInput={handleChange} validate={errArr.includes("password")} msg={"Field cannot be empty"}/>
                            </div>
                            <div className="button-wrapper z-mt-50">
                                <Button label="Log In" style="z-action-btn" func={login} loading={loading}/>
                                <span className="primary-light">or</span>
                                <p className="primary pointer" onClick={e =>{signUp()}}>Sign up</p>
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

export default Login