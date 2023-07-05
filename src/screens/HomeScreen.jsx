import React from "react";
import Profile from "../components/Home/Profile/Profile";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const HomeScreen = () => {
    const profile = useSelector(state => state.profile.profile);
    const links = useSelector(state => state.links);
    return(
        <>
        <Container className="bg-dark vh-100 mt-0"  fluid={'sm'} style={{maxWidth: '680px'}}>
            <Profile />
        </Container>
        </>
        
    );
};

export default HomeScreen;