import React from "react";
import Profile from "../components/Home/Profile/Profile";
import LinkButton from "../components/LinkButton/LinkButton";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const HomeScreen = () => {
    const profile = useSelector(state => state.profile.profile);
    const links = useSelector(state => state.links.links);
    
    return(
        <>
        <Container className=" vh-100 mt-0"  fluid={'sm'} style={{maxWidth: '680px'}}>
            <Profile profile={profile} />
            <LinkButton links={links} />
        </Container>
        </>
        
    );
};

export default HomeScreen;