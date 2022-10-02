import axios from "axios"

export const getImage = async (controller: AbortController): Promise<GetImageResponse> => {
  let response = {} as GetImageResponse;
  await axios.get('https://api.thecatapi.com/v1/images/search', { timeout: 60000, signal: controller.signal })
    .then(res => {
      response.image = res.data[0];
    })
    .catch(err => {
      if (err.message == 'Network Error' || err.code == 'ECONNABORTED') response.error = 'network';
      else if (err.message == 'canceled') response.error = 'none';
      else response.error = 'unknown';
    });
  return response;
}