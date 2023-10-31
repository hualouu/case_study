import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
    regionCode: "VN",
  },
  headers: {
    'X-RapidAPI-Key': '4d5fdb515amsh34d74db809e079ep1408b3jsnb23a68d88dc9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
