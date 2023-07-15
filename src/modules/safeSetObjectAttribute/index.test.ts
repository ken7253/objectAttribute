import { describe, test, expect } from 'vitest';
import { safeSetObjectAttribute } from './index';

import { includeDate, includeFunction } from '../../mocks/testingData.test';

describe(`setObjectAttributeのResult型版APIである${safeSetObjectAttribute.name}`, () => {
  describe.each([
    ['関数', includeFunction],
    ['Dateインスタンス', includeDate],
  ])('JSONとしてパースできない値が渡された場合', (type, data) => {
    test('', () => {
      const element = document.createElement('div');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore -- TypeScriptが導入されていない環境に対しての挙動確認のため
      const { stats } = safeSetObjectAttribute(element, 'testAttr', data);

      expect(stats).toBe('error');
    });
  });
});
