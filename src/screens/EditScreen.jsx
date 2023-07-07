import React from "react";
import Header from "../components/Edit/Header/Header";
import EditProfileInfoForm from "../components/Edit/EditProfileInfoForm/EditProfileInfoForm";
import EditLinkButtonsForm from "../components/Edit/EditLinkButtonsForm/EditLinkButtonsForm";
import { useSelector } from "react-redux";

const EditScreen = () => {
    const profile = useSelector(state => state.profile.profile)
    const links = useSelector(state => state.links.links)
    
    return (
        <>
            <Header />
            <EditProfileInfoForm profile={profile}/>
            <EditLinkButtonsForm links={links} />
        </>

    );
};

export default EditScreen;