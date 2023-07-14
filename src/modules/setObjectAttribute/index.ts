import type { Serializable } from '../types';

export const setObjectAttribute = (element: HTMLElement, name: string, data: Serializable) => {
  const json = JSON.stringify(data, undefined, 0);
  const serialized = btoa(json);
  element.dataset[name] = serialized;
};
