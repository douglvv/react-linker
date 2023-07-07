import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLink, deleteLink } from "../../../redux/linksSlice/linksSlice";
import { Container, Form, Card, Button, Table } from "react-bootstrap";
import { Store as notification } from 'react-notifications-component';
import { AiOutlineDelete } from 'react-icons/ai'

const EditLinkButtonsForm = ({ links }) => {
    const [title, setTitle] = useState("")
    const [btnUrl, setBtnUrl] = useState("")
    // const links = useSelector(state => state.links);
    const dispatch = useDispatch();


    function handleSubmit(e) {
        e.preventDefault()

        try {
            const link = { title, btnUrl };
            dispatch(addLink({ link: link }));

            // notification.addNotification({
            //     title: "Success",
            //     message: "Link added successfully",
            //     type: "success",
            //     insert: "top",
            //     container: "bottom-center",
            //     animationIn: ["animate__animated", "animate__fadeIn"],
            //     animationOut: ["animate__animated", "animate__fadeOut"],
            //     dismiss: {
            //         duration: 5000,
            //         onScreen: true
            //     }
            // });
        } catch (error) {
           console.log(error.message)
            // notification.addNotification({
            //     title: "Update link failed",
            //     message: `${error.message}`,
            //     type: "danger",
            //     insert: "top",
            //     container: "bottom-center",
            //     animationIn: ["animate__animated", "animate__fadeIn"],
            //     animationOut: ["animate__animated", "animate__fadeOut"],
            //     dismiss: {
            //         duration: 5000,
            //         onScreen: true
            //     }
            // })
        } finally {
            setTitle("");
            setBtnUrl("");
        }
    }

    function deleteButton(index) {
        try {
            dispatch(deleteLink({index: index}));

            // notification.addNotification({
            //     title: "Success",
            //     message: "Link deleted successfully",
            //     type: "success",
            //     insert: "top",
            //     container: "bottom-center",
            //     animationIn: ["animate__animated", "animate__fadeIn"],
            //     animationOut: ["animate__animated", "animate__fadeOut"],
            //     dismiss: {
            //         duration: 5000,
            //         onScreen: true
            //     }
            // });
        } catch (error) {
            // notification.addNotification({
            //     title: "Fail",
            //     message: `${error.message}`,
            //     type: "success",
            //     insert: "top",
            //     container: "bottom-center",
            //     animationIn: ["animate__animated", "animate__fadeIn"],
            //     animationOut: ["animate__animated", "animate__fadeOut"],
            //     dismiss: {
            //         duration: 5000,
            //         onScreen: true
            //     }
            // });
        }
    }

    return (
        <Container fluid={"sm"} style={{ maxWidth: '680px' }}>
            <Card className="mb-3" bg="secondary" text="light">
                <Card.Header className="text-center">
                    <h5>Add Links</h5>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Link Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your link's title"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                                className="mb-3"
                                required
                            />
                            <Form.Group className="mb-3">
                                <Form.Label>Link URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Your link's URL"
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

            <Card className="mb-3" bg="secondary" text="light">
                <Card.Header className="text-center">
                    <h5>Delete Links</h5>
                </Card.Header>
                <Card.Body>
                    <Table responsive="sm" striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>URL</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {links.map((link, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{link.title}</td>
                                    <td>{link.btnUrl}</td>
                                    <td className="text-center">
                                        <Button
                                            onClick={() => deleteButton(index)}
                                            variant="danger"
                                            title="Delete link"
                                        >
                                            <AiOutlineDelete />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default EditLinkButtonsForm;