import { Serializable } from '../types';

export const getObjectAttribute = (element: HTMLElement, name: string): Serializable => {
  const base64 = element.dataset[name];
  if (base64 === undefined) {
    throw new Error(`${name} is undefined`);
  }
  const deserialize = JSON.parse(btoa(base64)) as Serializable;

  return deserialize;
};
