import { Typography } from '@mui/material';
import React from 'react';

type TextErrorProps = {
  text: string;
};
const TextError = ({ text }: TextErrorProps) => {
  return (
    <Typography component="small" sx={{ fontSize: '12px', color: `#F23030` }}>
      {text}
    </Typography>
  );
};

export default TextError;
