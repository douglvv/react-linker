import React, { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";

const EditLinkButtonsForm = () => {
    const [title, setTitle] = useState("")
    const [btnUrl, setBtnUrl] = useState("")

    // implementar redux store e persis
    
    return (
        <Container fluid={"sm"}>
            <Card>
                <Card.Header className="text-center">
                    <h5>Links</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>link Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="The title for your button"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                                className="mb-3"
                                required
                            />
                            <Form.Group className="mb-3">
                                <Form.Label>Link URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="The url for your button"
                                    value={btnUrl}
                                    onChange={(e) => { setBtnUrl(e.target.value) }}
                                    className="mb-3"
                                    required
                                />
                            </Form.Group>
                        </Form.Group>
                    </Form>
                    <Button type="submit" variant="primary">Save Profile</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default EditLinkButtonsForm;