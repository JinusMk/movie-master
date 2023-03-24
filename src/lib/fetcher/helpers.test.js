import { expect, test } from 'vitest';
import { convertToGetParams } from './helpers';

test('Should convert GET parameters', () => {
  expect(
    convertToGetParams({
      test: 'test1',
    })
  ).toBe('test=test1');
});

test('Should convert advanced GET parameters', () => {
  expect(
    convertToGetParams({
      test: 'test1 ',
    })
  ).toBe('test=test1%20');
});

test('Should convert multiple GET parameters', () => {
  expect(
    convertToGetParams({
      test: 'test1 ',
      test2: 'test2',
    })
  ).toBe('test=test1%20&test2=test2');
});
