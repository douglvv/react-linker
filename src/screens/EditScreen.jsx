import React from "react";
import Header from "../components/Edit/Header/Header";
import EditProfileInfoForm from "../components/Edit/EditProfileInfoForm/EditProfileInfoForm";
import EditLinkButtonsForm from "../components/Edit/EditLinkButtonsForm/EditLinkButtonsForm";

const EditScreen = () => {
    return (
        <>
            <Header />
            <EditProfileInfoForm />
            <EditLinkButtonsForm />
        </>

    );
};

export default EditScreen;