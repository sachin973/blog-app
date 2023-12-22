import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
  return response;
};

export const addPost = (data) => async (dispatch) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
  dispatch({ type: 'ADD_POST', payload: response.data });
  return response;
};
