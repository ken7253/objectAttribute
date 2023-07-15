import { describe, test, expect } from 'vitest';
import { setObjectAttribute } from './index';

import { baseObjectData, includeDate, includeFunction } from '../../mocks/testingData.test';

describe('要素に対してbase64エンコードしたObjectをセットする関数', () => {
  test('値がdatasetとして要素に設定されること', () => {
    const element = document.createElement('div');
    const name = 'testValue';
    setObjectAttribute(element, name, baseObjectData);
    const attr = element.dataset[name];
    expect(attr).not.toBeNull();
    expect(attr).not.toBe('');
  });

  test('セットされた値はJSON文字列ではないこと', () => {
    const element = document.createElement('div');
    const name = 'testValue';
    setObjectAttribute(element, name, baseObjectData);
    const attr = element.dataset[name];
    const json = JSON.stringify(baseObjectData);
    expect(attr).not.toBe(json);
  });

  describe.skip.each([
    ['関数', includeFunction],
    ['Dateインスタンス', includeDate],
  ])('シリアライズできない値が含まれていた場合にエラーを発生させること', (type, data) => {
    test(`${type}が含まれる場合`, () => {
      const element = document.createElement('div');
      const name = 'testValue';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore -- TypeScriptを使用しない環境での挙動確認のため
      expect(() => setObjectAttribute(element, name, data)).toThrowError();
    });
  });
});
