export const baseObjectData = {
  name: 'some string',
  id: 10,
  array: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],
};

export const includeFunction = {
  ...baseObjectData,
  method: () => console.log('foo'),
};

export const includeDate = {
  ...baseObjectData,
  date: new Date(),
};
