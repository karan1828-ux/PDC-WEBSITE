import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Global API Error Logging Interceptor for Browser Console
client.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response) {
      console.error(`%c[API FAILURE] %c${originalRequest.method.toUpperCase()} ${originalRequest.url} - Status: ${error.response.status}`, 'color: red; font-weight: bold;', 'color: orange;');
      console.error('%cResponse Data:', 'color: yellow;', error.response.data);
    } else {
      console.error(`%c[API NETWORK ERROR] %c${originalRequest.method.toUpperCase()} ${originalRequest.url}`, 'color: red; font-weight: bold;', 'color: orange;', error.message);
    }
    return Promise.reject(error);
  }
);

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

// --- Events ---
export async function fetchParticularEvent(id) {
  const response = await client.get(`/event/getParticularEvent/${id}`);
  return response.data;
}

// --- Members ---
export async function fetchParticularMember(sapid) {
  const response = await client.get(`/member/getParticularMember/${sapid}`);
  return response.data;
}

// --- PPScore ---
export async function fetchAllPPScores() {
  const response = await client.get('/ppscore/getAllppScore');
  return response.data;
}

export async function fetchPPScore(sapid) {
  const response = await client.get(`/ppscore/getppScore/${sapid}`);
  return response.data;
}
