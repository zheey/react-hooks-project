import React, {useReducer, useState} from "react";
import ProfilePicture from "../commons/ProfilePicture";
import avatar from "../../../assets/images/Group 1512@2x.png";
import SectionText from "../../landingPage/section/SectionText";
import Input from "../../input/Input";
import Button from "../../button/Button";
import {useSelector} from "react-redux";
import {userProfileReducer} from "../../../reduxController/reducers/inputReducer";
import {updateUserProfile} from "../../../APIHandler/APIController";
import {message} from "antd";

const ProfilePanel = () =>{
    const content = useSelector(state => state);
    const [loading, setLoading] = useState(false);

    const [userProfile, setUserProfile] = useReducer(userProfileReducer, {
        first_name: content.user.user.first_name,
        last_name: content.user.user.last_name,
        email: content.user.user.email,
        phone_number: content.user.user.phone_number
    });

    const handleInput = (e) => {
        setUserProfile({[e.target.name]: e.target.value});
    };

    const updateProfile =()=>{
        setLoading(true)
        updateUserProfile({data: userProfile}, onUpdateProfile)
    };

    const onUpdateProfile = (status) =>{
        if(status){
            message.success("Profile updated successfully")
            setLoading(false)
        }else{
            message.error("Unable to update profile")
            setLoading(false)
        }
    };

    return(
        <React.Fragment>
            <div className="flex-start">
                <ProfilePicture image={avatar}/>
                <div className="ml-50">
                    <SectionText style="semi-bold" text={"Profile Picture"} />
                    <SectionText style="font-14" text={"change"} />
                </div>
            </div>
            <div className="mt-50 pm">
                <div className="flex-space-between width-82">
                    <Input height="z-h-54" placeholder="Jonas Blue" label={"First Name"} name={"first_name"}
                           msg={"Please enter your full name"} className="small-input" value={userProfile.first_name}
                     handleInput={handleInput}/>
                    <Input height="z-h-54" placeholder="Jonas Blue" label={"Last Name"} name={"last_name"}
                           msg={"Please enter your full name"} className="small-input" value={userProfile.last_name}
                           handleInput={handleInput}/>
                </div>
                <Input height="z-h-54" placeholder="08022322228" label={"Phone"} type={"number"} name={"phone_number"}
                       msg={"Field cannot be empty"} value={userProfile.phone_number}
                       handleInput={handleInput}/>
                <Input height="z-h-54" placeholder="jonasblue@net.com" label={"Email"} type={"email"} name={"email"}
                       msg={"Field cannot be empty"} value={userProfile.email}
                       handleInput={handleInput}/>
                <Button label="Save changes" style="z-action-btn mt-30" loading={loading} func={updateProfile}/>
            </div>
        </React.Fragment>
    )
};
export default ProfilePanel