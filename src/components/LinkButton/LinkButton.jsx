import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const LinkButton = ({ links }) => {
    return (
        <>
            <ListGroup>
                {links.map((link) => (
                    <ListGroup.Item
                        key={link.btnUrl}
                        as={Button}
                        variant="primary"
                        href={link.btnUrl}
                        className="mb-3"
                    >
                        {link.title}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
};

export default LinkButton;
