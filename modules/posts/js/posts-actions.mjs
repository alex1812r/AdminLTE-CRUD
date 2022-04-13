import { API_URI } from '../../../shared/js/constants.mjs';

export async function fetchPostsList() {
  const FETCH_URI = `${API_URI}/posts`;
  const res = await fetch(FETCH_URI);
  const data = await res.json();
  return data;
};

export async function fetchPost(id) {
  const FETCH_URI = `${API_URI}/posts/${id}`;
  const res = await fetch(FETCH_URI);
  const data = await res.json();
  return data;
}

export async function createPost(data) {
  const FETCH_URI = `${API_URI}/posts`;
  const res = await fetch(FETCH_URI, {
    method: 'POST',
    body: JSON.stringify(data)
  });
  const resData = await res.json();
  return resData;
}

export async function deletePost(id) {
  const FETCH_URI = `${API_URI}/posts/${id}`;
  const res = await fetch(FETCH_URI, { method: 'DELETE' });
  const data = await res.json();
  return data;
}

export async function updatePost(postId, data) {
  const FETCH_URI = `${API_URI}/posts/${postId}`;
  const res = await fetch(FETCH_URI, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
  const resData = await res.json();
  return resData;
}