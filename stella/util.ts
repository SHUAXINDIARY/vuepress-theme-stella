/**
 * @description 判断对象是否为空
 */
const isEmpty = (obj: object): boolean => {
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
    const map: any = {};
    arr.forEach((item) => {
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
    return newRes;
};

export const _ = {
    isEmpty,
    uniqueArr,
};
