import path from 'path';

export const getPath = (str) => {
    return path.resolve(__dirname, str);
};
