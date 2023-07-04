import React, { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";

const EditProfileInfoForm = () => {
    const [imgUrl, setImgUrl] = useState("");
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");

    return (
        <Container fluid={"sm"}>
            <Card className="mb-3">
                <Card.Header className="text-center">
                    <h5>Profile Info</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="The url for profile image"
                                value={imgUrl}
                                onChange={(e) => { setImgUrl(e.target.value) }}
                                className="mb-3"
                                required
                            />
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="The url for profile image"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}
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
                                    onChange={(e) => { setBio(e.target.value) }}
                                    className="mb-3"
                                    maxLength={'256'}
                                    required
                                />
                            </Form.Group>
                        </Form.Group>
                    </Form>
                    <Button type="submit" variant="primary">Save Profile</Button>
                </Card.Body>
            </Card>
            <hr />
        </Container>
    );
};

export default EditProfileInfoForm;