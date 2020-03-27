import axios from "axios";
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})
// const URL = `https://jsonplaceholder.typicode.com/posts`;

const isHandlerEnabled = (config={}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? 
    false : true
}

const requestHandler = (request) => {
  console.log(request);
  
  if (isHandlerEnabled(request)) {
    // Modify request here
    console.log('new headers');
    
    // request.headers['X-CodePen'] = 'https://codepen.io/teroauralinna/full/vPvKWe'
  }
  return request
}

axiosInstance.interceptors.request.use(
  request => requestHandler(request)
)

const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    // Handle errors
  }
  return Promise.reject({ ...error })
}

const successHandler = (response) => {
  console.log(response);
  
  if (isHandlerEnabled(response.config)) {
    // Handle responses
  }
  return response
}

axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
)


export default class Api {
  static fetchData = async () => await axiosInstance.get('/posts', {handlerEnabled: false});
  static fetchSingleData = async id => await axiosInstance.get(`/posts/${id}`);
  // static postData = async () => await axiosInstance.post(`${URL}`);
}


