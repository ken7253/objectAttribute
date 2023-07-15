type JSONValue = string | number | boolean | null | JSONValue[];

export type Serializable = {
  readonly [key: number | string]: JSONValue | Serializable | Serializable[];
};
