import { Button, Container, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';
import { useAddTodoMutation, useGetTodosQuery } from '../app/redux/todosApi';
import Todo from './Todo';

const Todos = () => {
  const [todo, setTodo] = useState('');
  const { data = [] } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();

  const handleAddTodo = async () => {
    if (todo) {
      await addTodo({ title: todo, completed: false }).unwrap();
      setTodo('');
    }
  };

  return (
    <Container maxWidth="xs">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <div
          style={{
            width: '60%',
          }}
        >
          <TextField
            label="Введите текст"
            id="outlined-size-small"
            size="small"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            fullWidth
          />
        </div>
        <Button
          onClick={handleAddTodo}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Добавить
        </Button>
      </div>
      <div>
        {data.map((item) => {
          return (
            <Todo
              key={item.id}
              text={item.title}
              id={item.id}
              completed={item.completed}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Todos;
