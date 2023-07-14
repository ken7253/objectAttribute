import { test, expect } from 'vitest';

test('vitest enabled', () => {
  expect(true).toBe(true);
});

test('jsdom enabled', () => {
  const { document } = window;
  expect(document).not.toBeNull();
});
