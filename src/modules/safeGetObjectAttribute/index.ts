import type { Serializable } from '../types';
import { getObjectAttribute } from '../getObjectAttribute';

type SafeGetSuccess = {
  stats: 'success';
  data: Serializable;
};

type SafeGetError = {
  stats: 'error';
  error: Error;
};

export type SafeGetResult = SafeGetSuccess | SafeGetError;

type GetObjectAttrArgs = Parameters<typeof getObjectAttribute>;

export const safeGetObjectAttribute = (...args: GetObjectAttrArgs): SafeGetResult => {
  let data = {};
  try {
    data = getObjectAttribute(...args);
  } catch (error) {
    if (error instanceof Error) {
      return {
        stats: 'error',
        error,
      };
    }
  }

  return {
    stats: 'success',
    data,
  };
};
