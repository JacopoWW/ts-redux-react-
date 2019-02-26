export function completeData<T extends EmptyAllowed>(source: any, defaultValue: T): T | any {
  // 是否允许空数组
  if (source === undefined || source === null || source === '') return defaultValue; // 空缺时返回默认数据；
  if (typeof source !== 'object') return source; // 当为直接值时
  if (defaultValue === undefined) return source; // 如果默认为空，source 可能会有的话就返回 source，但这一部分的字段就无法补全

  if (Array.isArray(source) && Array.isArray(defaultValue)) {
    if (source.length === 0 && defaultValue._emptyAllowed !== true) {
      // 在设置默认数据的时候给数组弄的key
      return defaultValue;
    }
    return source.map((it) => completeData(it, defaultValue[0]));
  }
  const res: T = Object();
  for (const key in defaultValue) {
    if (source.hasOwnProperty(key) && source[key]) {
      res[key] = completeData(source[key], defaultValue[key]);
    } else if (key) {
      // 当数据 source 的该值确实为false | 0时 默认值也为0
      res[key] = defaultValue[key];
    }
  }
  return res;
}

interface EmptyAllowed {
  _emptyAllowed?: boolean;
}
