export const isEmptyObject = <T>(object: T): boolean => JSON.stringify(object) === '{}';
