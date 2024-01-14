import React, { FC, ReactElement } from 'react';

import { Box, Typography } from '@mui/material';

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
    </Box>
  );
};

export default CreateTaskFrom;
