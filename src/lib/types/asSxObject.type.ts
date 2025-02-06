import { SxTheme } from './sxs.type';

export type IndexedSxType = {
  [key: string]: SxTheme;
};

/**
 * Simple helper to keep key object typed with `IndexedSxType`, because
 * TypeScript will lost the original key type if we are using indexed type.
 *
 * references:
 * - https://stackoverflow.com/a/52157355/6049731
 * - https://github.com/Microsoft/TypeScript/issues/26045
 */
export const AsSxObject = <T extends IndexedSxType>(arg: T): T => arg;
