import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Button, ListGroup } from "react-bootstrap";
import { updateLinks } from "../../redux/linksSlice/linksSlice";
import { useDispatch } from "react-redux";
import { MdDragHandle } from 'react-icons/md';

const LinkButton = ({ links }) => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const linksAux = Array.from(links);
    const [movedLink] = linksAux.splice(source.index, 1);
    linksAux.splice(destination.index, 0, movedLink);

    dispatch(updateLinks({ links: linksAux }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="buttons">
        {(provided) => (
          <ListGroup ref={provided.innerRef} {...provided.droppableProps}>
            {links.map((link, index) => (
              <Draggable key={link.btnUrl} index={index} draggableId={link.btnUrl}>
                {(provided) => (
                  <Button
                    className="mb-3 d-flex align-items-center"
                    href={link.btnUrl}
                    variant="primary"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    <div {...provided.dragHandleProps}>
                      <MdDragHandle className="fs-3"/>
                    </div>
                    <div className="flex-grow-1 text-center">{link.title}</div>
                  </Button>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ListGroup>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default LinkButton;
