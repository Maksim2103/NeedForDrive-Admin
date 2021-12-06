import axios from 'axios';
import { basicString, bearerString } from '../utils/authStrings';

const apiKey = process.env.REACT_APP_BASE_API_KEY;

const axiosInstanceBasic = axios.create({
  baseURL: 'https://api-factory.simbirsoft1.com/api',
  headers: {
    'X-Api-Factory-Application-Id': apiKey,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: basicString,
  },
});

const axiosInstanceBearer = axios.create({
  baseURL: 'https://api-factory.simbirsoft1.com/api',
  headers: {
    'X-Api-Factory-Application-Id': apiKey,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: bearerString,
  },
});

export { axiosInstanceBasic };
export { axiosInstanceBearer };
