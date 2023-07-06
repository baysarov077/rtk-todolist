import type { FC } from 'react';
import { Box, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  useDeleteTodoMutation,
  usePatchTodoMutation,
} from '../../app/redux/todosApi';

interface TodoProps {
  text: string;
  id: number;
  completed: boolean;
}

export const Todo: FC<TodoProps> = ({ text, id, completed }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [patchTodo] = usePatchTodoMutation();

  const handleDeleteTodo = () => {
    deleteTodo(id)
      .unwrap()
      .catch((error) => {
        console.error('Failed to delete todo:', error);
      });
  };

  const handlePatchTodo = () => {
    patchTodo({ completed, id }).catch((error) => {
      console.error('Failed to patch todo:', error);
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Checkbox onClick={handlePatchTodo} checked={completed} />
      <span>{text}</span>
      <IconButton onClick={handleDeleteTodo} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};
