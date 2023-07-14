import { Serializable } from '../types';
import { setObjectAttribute } from '../setObjectAttribute';

type SafeSetSuccess = {
  stats: 'success';
};

type SafeSetError = {
  stats: 'error';
  error: Error;
};

export type SafeSetResult = SafeSetSuccess | SafeSetError;

export const safeSetObjectAttribute = (element: HTMLElement, name: string, data: Serializable): SafeSetResult => {
  try {
    setObjectAttribute(element, name, data);
  } catch (error) {
    if (error instanceof Error) {
      return {
        stats: 'error',
        error: error,
      };
    }
  }

  return {
    stats: 'success',
  };
};
