export type Serializable = {
  readonly [key: number | string]: string | number | Serializable | Serializable[];
};
