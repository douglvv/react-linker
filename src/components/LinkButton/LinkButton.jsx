import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const LinkButton = ({links}) => { 
    
    return (
        <>
            <ListGroup>
                {links.array.forEach(link => {
                    <ListGroup.Item as={Button} variant="primary" href={link.btnUrl} className="mb-3">
                        {link.title}
                    </ListGroup.Item>
                })}
            </ListGroup>
        </>
    );
};

export default LinkButton;