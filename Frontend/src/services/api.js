import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function fetchTop10Members() {
  try {
    const response = await client.get('/member/getTop10');
    return response.data.memberData || [];
  } catch (error) {
    console.error('Error fetching top 10 members:', error);
    return [];
  }
}

export async function fetchAllMembers() {
  try {
    const response = await client.get('/member/getAllMember');
    return response.data.memberData || [];
  } catch (error) {
    console.error('Error fetching all members:', error);
    return [];
  }
}

export async function fetchAllEvents() {
  try {
    const response = await client.get('/event/getAllEvent');
    return response.data.eventData || [];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

// --- API & Auth ---
export async function checkApiStatus(data) {
  const response = await client.post('/api/status', data);
  return response.data;
}

export async function sendApiEmail(data) {
  const response = await client.post('/api/send', data);
  return response.data;
}

export async function signIn(credentials) {
  const response = await client.post('/api/signIn', credentials);
  return response.data;
}

export async function refreshToken(tokenData) {
  const response = await client.post('/api/refreshToken', tokenData);
  return response.data;
}

// --- Events ---
export async function addEvent(eventData) {
  const response = await client.post('/event/addEvent', eventData);
  return response.data;
}

export async function deleteEvent(id) {
  const response = await client.delete(`/event/deleteEvent/${id}`);
  return response.data;
}

export async function updateEvent(id, eventData) {
  const response = await client.post(`/event/updateEvent/${id}`, eventData);
  return response.data;
}

export async function fetchParticularEvent(id) {
  const response = await client.get(`/event/getParticularEvent/${id}`);
  return response.data;
}

// --- Members ---
export async function addMember(memberData) {
  const response = await client.post('/member/addMember', memberData);
  return response.data;
}

export async function updateMember(memberData) {
  const response = await client.put('/member/updateMember', memberData);
  return response.data;
}

export async function deleteMember(data) {
  const response = await client.delete('/member/deleteMember', { data });
  return response.data;
}

export async function fetchParticularMember(sapid) {
  const response = await client.get(`/member/getParticularMember/${sapid}`);
  return response.data;
}

// --- PPScore ---
export async function addPPScore(scoreData) {
  const response = await client.post('/ppscore/addppScore', scoreData);
  return response.data;
}

export async function updatePPScore(scoreData) {
  const response = await client.put('/ppscore/updateppScore', scoreData);
  return response.data;
}

export async function deletePPScore(data) {
  const response = await client.delete('/ppscore/deleteppScore', { data });
  return response.data;
}

export async function fetchAllPPScores() {
  const response = await client.get('/ppscore/getAllppScore');
  return response.data;
}

export async function fetchPPScore(sapid) {
  const response = await client.get(`/ppscore/getppScore/${sapid}`);
  return response.data;
}
