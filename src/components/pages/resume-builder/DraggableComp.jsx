import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DraggableComponent = ({ children, id, index }) => {
  return (
    <Draggable draggableId={id} index={index} key={id}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.draggableProps}>
          {children}
        </div>
      )}
    </Draggable>
  );
}

export default DraggableComponent;