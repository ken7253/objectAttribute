import { describe, test, expect } from 'vitest';
import { safeGetObjectAttribute } from './index';

describe(`getObjectAttributeのResult型版APIである${safeGetObjectAttribute.name}`, () => {
  describe('要素に値が設定されていなかった場合', () => {
    test('エラーオブジェクトを含む値が返却される', () => {
      const element = document.createElement('div');
      const result = safeGetObjectAttribute(element, 'testAttr');
      const { stats } = result;

      expect(stats).toBe('error');
    });

    test('例外を投げないこと', () => {
      const element = document.createElement('div');
      expect(() => safeGetObjectAttribute(element, 'testAttr')).not.toThrowError();
    });
  });
});
