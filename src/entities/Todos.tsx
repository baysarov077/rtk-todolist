import { Button, Container, Pagination, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';
import { useAddTodoMutation, useGetTodosQuery } from '../app/redux/todosApi';
import Todo from './Todo';

const Todos = () => {
  const [todo, setTodo] = useState('');
  const { data = [] } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleAddTodo = async () => {
    if (todo) {
      await addTodo({ title: todo, completed: false }).unwrap();
      setTodo('');
    }
  };

  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedTodos = data.slice(startIndex, endIndex);

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
        {displayedTodos.map((item) => {
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
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        mt={2}
      >
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </Container>
  );
};

export default Todos;
