import conf from '../conf/conf'
import axios from 'axios'



const getCurrentWeather = async ({ lat, lon }) => {

  const options = {
    method: 'GET',
    url: `https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lon}`,
    headers: {
      'X-RapidAPI-Key': conf,
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Request Failed:', error.response?.data || error.message);
    console.log('Response Headers:', error.response?.headers);
    throw error;
  }
};
export {getCurrentWeather}