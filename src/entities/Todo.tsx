import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import {
  useDeleteTodoMutation,
  usePatchTodoMutation,
} from '../app/redux/todosApi';

interface IProps {
  text: any;
  id: any;
  completed: any;
}

const Todo: React.FC<IProps> = ({ text, id, completed }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [patchTodo] = usePatchTodoMutation();

  const handleDeleteTodo = async (id: any) => {
    await deleteTodo(id).unwrap();
  };

  const handlePatchTodo = async () => {
    await patchTodo({ completed, id });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Checkbox onClick={handlePatchTodo} checked={completed} />
      <span>{text}</span>
      <IconButton onClick={() => handleDeleteTodo(id)} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Todo;
