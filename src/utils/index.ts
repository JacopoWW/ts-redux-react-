
export function completeData(source: any, defaultValue:IDefaultValue): any { // 是否允许空数组
  if (!source) return defaultValue; // 当它确实为false || 0的时候默认值也为false || 0；
  if (source && typeof source !== 'object') return source;
  if (defaultValue === undefined) return source; // 如果默认为空，source可能会有的话就返回source，但这一部分的字段就无法补全

  if (Array.isArray(source) && Array.isArray(defaultValue)) {
    if (source.length === 0 && defaultValue._emptyAllowed !== true) { // 在设置默认数据的时候给数组弄的key
      return defaultValue;
    }
    return source.map(it => completeData(it, defaultValue[0]));
  }
  const res = {};
  for (const key in defaultValue) {
    if (source.hasOwnProperty(key) && source[key]) {
      res[key] = completeData(source[key], defaultValue[key]);
    } else if (key) { // 当数据 source 的该值确实为false | 0时 默认值也为0
      res[key] = defaultValue[key];
    }
  }
  return res;
}

interface IDefaultValue {
  _emptyAllowed?: boolean;
}