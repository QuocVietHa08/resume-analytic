import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTodos = [
  { id: 'todo-1', text: 'Learn React' },
  { id: 'todo-2', text: 'Build a project' },
  { id: 'todo-3', text: 'Deploy to production' },
];

const Demo = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  };

  return (
    <div className="mt-100 ml-100t">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(providedDrag) => (
                    <div ref={providedDrag.innerRef} {...providedDrag.draggableProps} >
                      {/* <div {...providedDrag.dragHandleProps}>Drag here</div> */}
                      <div {...providedDrag.dragHandleProps}>Drag</div>
                      <div>{todo.text}</div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Demo;
