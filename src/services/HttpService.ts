import axios from 'axios';
import { BaseUrl } from '../utility/ApiEndpoint';

const AuthToken = '5ATh6co8WUuhaWp4_$45FGFGDFK%44*&23DF';

export const Get = async (url: string) => {
  const response = await axios.get(`${BaseUrl}/${url}`, {
    headers: { Authorization: `Bearer ${AuthToken}` },
  });
  return response.data;
};

export const GetById = async (url: string,Id : number, page : number = 1, limit : number = 50) => {
  const response = await axios.get(`${BaseUrl}/${url}/${Id}/?page=${page}&limit=${limit}`, {
    headers: { Authorization: `Bearer ${AuthToken}`  },
  });
  return response.data;
};

