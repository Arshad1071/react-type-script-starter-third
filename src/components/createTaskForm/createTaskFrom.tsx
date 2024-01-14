import React, { FC, ReactElement } from 'react';

import { Box, Typography } from '@mui/material';
import TaskDiscriptionField from './interfaces/_taskDiscriptionField';
import TaskTitleField from './interfaces/_taskTitleField';

const CreateTaskFrom: FC = (): ReactElement => {
  return (
    <Box
      display="flxe"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography>Create A Task</Typography>
      <TaskTitleField />
      <TaskDiscriptionField />
    </Box>
  );
};

export default CreateTaskFrom;
