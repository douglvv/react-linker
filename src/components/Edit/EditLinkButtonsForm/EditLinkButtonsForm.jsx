import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLink } from "../../../redux/linksSlice/linksSlice";
import { Container, Form, Card, Button } from "react-bootstrap";
import { Store as notification } from 'react-notifications-component';

const EditLinkButtonsForm = () => {
    const [title, setTitle] = useState("")
    const [btnUrl, setBtnUrl] = useState("")
    const links = useSelector(state => state.links)
    const dispatch = useDispatch();


    function handleSubmit(e) {
        e.preventDefault()

        try {
            const link = { title, btnUrl };
            dispatch(addLink({ link: link }));

            notification.addNotification({
                title: "Success",
                message: "Link added successfully",
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
                title: "Update link failed",
                message: `${error.message}`,
                type: "danger",
                insert: "top",
                container: "bottom-center",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            })
        } finally {
            setTitle("");
            setBtnUrl("");
        }
    }

    return (
        <Container fluid={"sm"} style={{ maxWidth: '680px' }}>
            <Card bg="secondary" text="light">
                <Card.Header className="text-center">
                    <h5>Links</h5>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
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
                        <div className="d-grid gap-2">
                            <Button type="submit" variant="primary">Update Link</Button>
                        </div>

                    </Form>
                </Card.Body>
            </Card>

            {links && <h1>{JSON.stringify(links)}</h1>}

        </Container>
    );
};

export default EditLinkButtonsForm;