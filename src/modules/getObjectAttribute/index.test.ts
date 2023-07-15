import { describe, test, expect } from 'vitest';
import { getObjectAttribute } from './index';

describe('setObjectAttributesでセットされたObjectを取得・復元する関数', () => {
  test('属性値がセットされていない場合例外を投げること', () => {
    const element = document.createElement('div');
    expect(() => getObjectAttribute(element, 'testAttr')).toThrowError();
  });
});
