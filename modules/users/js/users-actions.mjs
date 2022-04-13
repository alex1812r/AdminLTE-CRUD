import { API_URI } from '../../../shared/js/constants.mjs';

export async function fetchUsersList() {
  const FETCH_URI = `${API_URI}/users`;
  const res = await fetch(FETCH_URI);
  const data = await res.json();
  return data;
};

export async function fetchUser(id) {
  const FETCH_URI = `${API_URI}/users/${id}`;
  const res = await fetch(FETCH_URI);
  const data = await res.json();
  return data;
}

export async function createUser(data) {
  const FETCH_URI = `${API_URI}/users`;
  const res = await fetch(FETCH_URI, {
    method: 'POST',
    body: JSON.stringify(data)
  });
  const resData = await res.json();
  return resData;
}

export async function deleteUser(id) {
  const FETCH_URI = `${API_URI}/users/${id}`;
  const res = await fetch(FETCH_URI, { method: 'DELETE' });
  const data = await res.json();
  return data;
}

export async function updateUser(id, data) {
  const FETCH_URI = `${API_URI}/users/${id}`;
  const res = await fetch(FETCH_URI, { 
    method: 'PUT',
    body: JSON.stringify(data) 
  });
  const resData = await res.json();
  return resData;
}