import axios from 'axios';

const API_URL = 'http://localhost:8080/contacts';

export async function saveContact(contact) {
    try {
        const result = await axios.post(API_URL, contact);
        return result;
    } catch (e) {
        console.error("Error saving contact: ", e);
        return e;
    }
}

export async function getContacts(page = 0, size = 10) {
    try {
        const result = await axios.get(`${API_URL}?page=${page}&size=${size}`);
        return result;
    } catch (e) {
        console.error("Error getting contacts: ", e);
        return e;
    }
}

export async function getContact(id) {
    try {
        const result = await axios.get(`${API_URL}?/${id}`);
        return result;
    } catch (e) {
        console.error("Error getting contact: ", e);
        return e;
    }
}

export async function updateContact(contact) {
    try {
        const result = await axios.put(API_URL, contact);
        return result;
    } catch (e) {
        console.error("Error updating contact: ", e);
        return e;
    }
}

export async function updatePhoto(formData) {
    try {
        const result = await axios.put(`${API_URL}/photo`, formData)
        return result;
    } catch (e) {
        console.error("Error updating photo: ", e);
        return e;
    }
}

export async function deleteContact(id) {
    try {
        const result = await axios.delete(`${API_URL}/${id}`)
        return result;
    } catch (e) {
        console.error("Error deleting contact: ", e);
        return e;
    }
}