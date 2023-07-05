import React from "react";
import Header from "../components/Edit/Header/Header";
import EditProfileInfoForm from "../components/Edit/EditProfileInfoForm/EditProfileInfoForm";
import EditLinkButtonsForm from "../components/Edit/EditLinkButtonsForm/EditLinkButtonsForm";
import { useSelector } from "react-redux";

const EditScreen = () => {
    const profile = useSelector(state => state.profile.profile)
    
    return (
        <>
            <Header />
            <EditProfileInfoForm profile={profile}/>
            <EditLinkButtonsForm />
        </>

    );
};

export default EditScreen;