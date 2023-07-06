import { Paper } from '@mui/material';
import { TodoList } from '../../entities';
import { AddTodoForm } from '../../features';

export const ContentWidget = () => {
  return (
    <Paper sx={{ padding: '10px', marginTop: '30px' }} elevation={3}>
      <AddTodoForm />
      <TodoList />
    </Paper>
  );
};
