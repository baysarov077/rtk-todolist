import { Container } from '@mui/material';
import { useGetTodosQuery } from '../../app/redux/todosApi';
import { ContentWidget, InfoBar } from '../../widgets';

export const Main = () => {
  const { data = [] } = useGetTodosQuery();

  const completedTodos = data.filter((item) => item.completed).length;

  return (
    <Container maxWidth="xs">
      <InfoBar dataLength={data.length} completedTodosLength={completedTodos} />
      <ContentWidget />
    </Container>
  );
};
