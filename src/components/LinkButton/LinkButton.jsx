import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Button, ListGroup } from "react-bootstrap";
import { updateLinks } from "../../redux/linksSlice/linksSlice";
import { useDispatch } from "react-redux";

const LinkButton = ({ links }) => {
    const dispatch = useDispatch();

    const onDragEnd = result => {
        // console.log(result)
        const { source, destination } = result;
        
        if(!destination) return;

        const linksAux = Array.from(links);
        const [movedLink] = linksAux.splice(source.index, 1);
        linksAux.splice(destination.index, 0, movedLink);
        
        // console.log(linksAux)

        dispatch(updateLinks({links: linksAux}));
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="buttons">
                {(provided) => (
                    <ul ref={provided.innerRef} {...provided.droppableProps}>
                        {links.map((link, index) => (
                            <Draggable key={link.btnUrl} index={index} draggableId={link.btnUrl}>
                                {(provided) => (
                                    <li
                                        ref={provided.innerRef}
                                        {...provided.dragHandleProps}
                                        {...provided.draggableProps}
                                        className="mb-3"
                                    >
                                        <a href={link.btnUrl}>{link.title}</a>
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default LinkButton;
