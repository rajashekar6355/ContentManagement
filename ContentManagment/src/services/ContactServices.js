import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getContacts = () => axios.get(`${API_URL}/contacts`);
export const createContact = (contact) => axios.post(`${API_URL}/contacts`, contact);
export const updateContact = (id, contact) => axios.put(`${API_URL}/contacts/${id}`, contact);
export const deleteContact = (id) => axios.delete(`${API_URL}/contacts/${id}`);
