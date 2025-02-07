'use client';

import { SxProps } from '@mui/material';

export type SxTheme = SxProps;

export type Sxs<T extends string> = Partial<Record<T, SxTheme>>;
