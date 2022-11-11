import React from "react";
import { TodoForm } from "../../components/TodoForm";
//UseTodo
import { useTodos } from '../useTodos';

export const NewPage = () => {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;
  return (
    <TodoForm
      label="Escribe tu nuevo TODO"
      submitText="Añadir"
      submitEvent={(text) => addTodo(text)}
    />
  );
};
