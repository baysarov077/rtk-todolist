import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useAddTodoMutation } from '../../app/redux/todosApi';

export const AddTodoForm = () => {
  const [todo, setTodo] = useState('');
  const [addTodo] = useAddTodoMutation();

  const handleAddTodo = async () => {
    if (todo) {
      await addTodo({ title: todo, completed: false }).unwrap();
      setTodo('');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <Box sx={{ width: '60%' }}>
        <TextField
          label="Введите текст"
          id="outlined-size-small"
          size="small"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          fullWidth
        />
      </Box>
      <Button
        onClick={handleAddTodo}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Добавить
      </Button>
    </Box>
  );
};
