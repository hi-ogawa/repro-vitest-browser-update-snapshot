import { expect, test } from 'vitest';

test('repro', () => {
  expect(2).toMatchSnapshot();
});
