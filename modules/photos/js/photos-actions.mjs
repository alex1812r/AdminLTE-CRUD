import { API_URI } from '../../../shared/js/constants.mjs';
import { fetchUser } from '../../users/js/users-actions.mjs'

export async function fetchPhotosList() {
  const FETCH_URI = `${API_URI}/photos`;
  const res = await fetch(FETCH_URI);
  const data = await res.json();
  const usersMap = {};
  data.forEach((photo) => {
    if(!usersMap[photo.userId])
      usersMap[photo.userId] = photo.userId; 
  })
  await Promise.all(Object.values(usersMap).map(async (userId) => {
    const user = await fetchUser(userId);
    usersMap[userId] = user;
    return;
  }));

  return data.map((photo) => ({
    ...photo,
    user: usersMap[photo.userId]
  }));
};

export async function fetchPhoto(id) {
  const FETCH_URI = `${API_URI}/photos/${id}`;
  const res = await fetch(FETCH_URI);
  const data = await res.json();
  const user = await fetchUser(data.userId); 
  return {...data, user};
}

export async function createPhoto(data) {
  const FETCH_URI = `${API_URI}/photos`;
  const res = await fetch(FETCH_URI, {
    method: 'POST',
    body: JSON.stringify(data)
  });
  const resData = await res.json();
  return resData;
}

export async function deletePhoto(id) {
  const FETCH_URI = `${API_URI}/photos/${id}`;
  const res = await fetch(FETCH_URI, { method: 'DELETE' });
  const data = await res.json();
  return data;
}

export async function updatePhoto(photoId, data) {
  const FETCH_URI = `${API_URI}/photos/${photoId}`;
  const res = await fetch(FETCH_URI, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
  const resData = await res.json();
  return resData;
}