import { Typography } from '@mui/material';
import { FC } from 'react';

interface IProps {
  dataLength: number;
  completedTodosLength: number;
}

export const InfoBar: FC<IProps> = ({ dataLength, completedTodosLength }) => {
  return (
    <>
      <Typography sx={{ marginTop: '30px' }} variant="h4" align="center">
        Колличество дел: {dataLength}
      </Typography>
      <Typography sx={{ marginTop: '10px' }} variant="h5" align="center">
        Закончено: {completedTodosLength}
      </Typography>
      <Typography sx={{ marginTop: '10px' }} variant="h5" align="center">
        Осталось: {dataLength - completedTodosLength}
      </Typography>
    </>
  );
};
