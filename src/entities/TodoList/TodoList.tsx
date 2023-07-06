import { useState } from 'react';
import { Box, Stack, Pagination } from '@mui/material';
import { useGetTodosQuery } from '../../app/redux/todosApi';
import { Todo } from '../Todo';

export const TodoList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { data = [] } = useGetTodosQuery();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedTodos = data.slice(startIndex, endIndex).reverse();

  const handlePageChange = (_event: any, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Box>
      {displayedTodos.map((item) => (
        <Todo
          key={item.id}
          id={item.id}
          text={item.title}
          completed={item.completed}
        />
      ))}
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
    </Box>
  );
};
