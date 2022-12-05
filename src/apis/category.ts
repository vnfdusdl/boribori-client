import { boardAxiosInstance } from './axiosInstance';

export const getBooklist = async (
  category1: string,
  category2: string,
  category3: string,
  size: number,
  page: number,
) => {
  const response = await boardAxiosInstance.get(
    `api/boards?category1=${category1}&category2=${category2}&category3=${category3}&keyword=&queryType=&size=${size}&page=${page}`,
  );
  return response.data;
};
