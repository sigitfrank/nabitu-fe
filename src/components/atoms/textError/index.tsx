import { Typography } from '@mui/material';
import React from 'react';

type TextErrorProps = {
  text: string;
};
const TextError = ({ text }: TextErrorProps) => {
  return (
    <Typography
      component="small"
      sx={{ fontSize: '12px', color: (theme) => theme.palette.error.main }}
    >
      {text}
    </Typography>
  );
};

export default TextError;
