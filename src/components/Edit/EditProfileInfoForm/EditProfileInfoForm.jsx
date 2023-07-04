import React, { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProfile } from "../../../redux/profileSlice/profileSlice";
import { Store as notification } from 'react-notifications-component';
import store from "../../../redux/store";

const EditProfileInfoForm = () => {
    const [imgUrl, setImgUrl] = useState("");
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const profile = { imgUrl, username, bio }
            store.dispatch(addProfile({ profile: profile }));
        } catch (error) {
            notification.addNotification({
                title: "Update profile failed",
                message: `${error.message}`,
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            })
        } finally {
            setImgUrl("");
            setUsername("");
            setBio("");

            notification.addNotification({
                title: "Success",
                message: "Profile info updated!",
                type: "success",
                insert: "top",
                container: "bottom-center",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        }

    };

    return (
        <Container fluid={"sm"}>            
            <Card className="mb-3">
                <Card.Header className="text-center">
                    <h5>Profile Info</h5>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="The url for profile image"
                                value={imgUrl}
                                onChange={(e) => {
                                    setImgUrl(e.target.value);
                                }}
                                className="mb-3"
                                required
                            />
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="The url for profile image"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                className="mb-3"
                                required
                            />
                            <Form.Group className="mb-3">
                                <Form.Label>Bio</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Talk about yourself"
                                    value={bio}
                                    onChange={(e) => {
                                        setBio(e.target.value);
                                    }}
                                    className="mb-3"
                                    maxLength={"256"}
                                    required
                                />
                            </Form.Group>
                            <Button type="submit" variant="primary">
                                Save Profile
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <hr />
        </Container>
    );
};

export default EditProfileInfoForm;
