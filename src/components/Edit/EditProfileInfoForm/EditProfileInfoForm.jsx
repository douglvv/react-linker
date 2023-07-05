import React, { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { addProfile } from "../../../redux/profileSlice/profileSlice";
import { useDispatch } from "react-redux";
import { Store as notification } from 'react-notifications-component';


const EditProfileInfoForm = ({profile}) => {
    const [imgUrl, setImgUrl] = useState(profile.imgUrl);
    const [username, setUsername] = useState(profile.username);
    const [bio, setBio] = useState(profile.bio);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const profile = { imgUrl, username, bio }
            dispatch(addProfile({ profile: profile }));
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
        }

    };

    return (
        <Container fluid={"sm"} style={{ maxWidth: '680px' }}>
            <Card bg="secondary" text="light" className="mb-3">
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
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button type="submit" variant="primary">Update Profile</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <hr />
            <h1></h1>
        </Container>
    );
};

export default EditProfileInfoForm;
