import { SxProps } from '@mui/material';
import { theme } from 'src/styles/newTheme.style';

export type SxTheme = SxProps<typeof theme>;

export type Sxs<T extends string> = Partial<Record<T, SxTheme>>;
