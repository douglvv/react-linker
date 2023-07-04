import React from "react";
import { useSelector } from "react-redux";

const HomeScreen = () => {
    const profile = useSelector(state => state.profile.profile);
        
    return(
        <>
        <h1>Home Screen</h1>
        <h4>{JSON.stringify(profile.imgUrl)}</h4>
        {/* <h4>{profile.username}</h4>
        <h4>{profile.bio}</h4> */}
        </>
        
    );
};

export default HomeScreen;