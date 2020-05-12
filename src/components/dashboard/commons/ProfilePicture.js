import React from "react";
import ImageHolder from "../../landingPage/image/ImageHolder";
import bgImage from "../../../assets/images/Mask Group 14.svg";

const ProfilePicture = ({image}) => {
    return(
        <React.Fragment>
            {/*<ImageHolder image={bgImage} name="avatar"/>*/}
            <ImageHolder image={image} name="avatar"/>
        </React.Fragment>
    )
};

export default ProfilePicture