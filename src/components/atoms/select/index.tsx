import {
  MenuItem,
  Select as MUISelect,
  SelectProps as MUISelectProps,
} from '@mui/material';
import React from 'react';

type SelectProps = {
  placeholder: string;
  disabled?: boolean;
  options: string[];
} & MUISelectProps;

const Select = ({ placeholder, disabled, options, ...props }: SelectProps) => {
  return (
    <MUISelect
      {...props}
      sx={{
        color: props.value === '-' && disabled ? '#b6b6b6' : '',
        ...(props.sx && props.sx),
      }}
    >
      <MenuItem value="-" disabled={disabled}>
        {placeholder}
      </MenuItem>
      {options.map((opt) => (
        <MenuItem key={opt} value={opt}>
          {opt}
        </MenuItem>
      ))}
    </MUISelect>
  );
};

export default Select;
