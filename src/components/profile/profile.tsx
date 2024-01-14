import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Typography } from '@mui/material';

interface Iprofile {
  name?: string;
}

const profile: FC<Iprofile> = ({
  name = 'Arshad',
}): ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          {`${name.substring(0, 1)}`}
        </Typography>
      </Avatar>
      <Typography variant="h6">
        Welcome, {`${name}`}
      </Typography>
      <Typography variant="subtitle1">
        This is your prsonal task manager{' '}
      </Typography>
    </Box>
  );
};

profile.propTypes = { name: PropTypes.string };

export default profile;
