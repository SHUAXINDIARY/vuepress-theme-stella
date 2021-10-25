/**
 * @description 判断对象是否为空
 */
const isEmpty = <T>(obj: T): boolean => {
  if (!obj || typeof obj !== "object") {
    throw new Error("obj must be a object");
  }
  return Object.keys(obj).length === 0 ? true : false;
};

/**
 * @description 数组去重
 */
const uniqueArr = <T>(arr: T[]): T[] => {
  const newRes: T[] = [];
  let map: any = {};
  arr.forEach(item => {
    if (typeof item !== "object") {
      newRes.includes(item) && newRes.push(item);
    } else {
      const key: string = JSON.stringify(item);
      if (!map[key]) {
        newRes.push(item);
        map[key] = item;
      }
    }
  });
  map = null;
  return newRes;
};

const copyText = async (text: string): Promise<boolean> => {
  try {
    const copyPanel = await navigator.clipboard;
    await copyPanel.writeText(text);
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

export const _ = {
  isEmpty,
  uniqueArr,
  copyText,
};
