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
