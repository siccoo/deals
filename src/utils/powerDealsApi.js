import { getAuth } from "./constant";

export const getAuthToken = getAuth("token");

const makeAPICall = async ({path, method = 'POST', payload = null, params = null}, ...customConfigs) => {
  const token = getAuthToken;
  const baseURL = process.env.REACT_APP_BACKEND_URL
  
  const headers = {
    Accept: 'application/json, /',
    'Content-type': 'application/json',
  };
  
  if (token) headers.Authorization = `Bearer ${token}`;

  const configs = {
    method,
    headers,
    ...customConfigs,
  }

  if (payload) configs.body = JSON.stringify(payload);

  let url = new window.URL(`${baseURL}/${path}`);

  if (params) url.search = new window.URLSearchParams(params).toString();

  return window.fetch(url, configs)
  .then((response) => response.json())
      .catch((err) => err);
};

export default makeAPICall;