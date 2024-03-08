import axios from 'axios';

// Base URL for the JSONPlaceholder API
const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetches a list of users from the JSONPlaceholder API.
 * 
 * @returns {Promise<Array>} A promise that resolves to an array of user objects.
 * @throws {Error} When the request fails, an error is thrown with a descriptive message.
 */
export const fetchUsers = async () => {
    try {
        // Performs a GET request to retrieve users.
        const response = await axios.get(`${BASE_URL}/users`);
        // Returns the array of users from the response.
        return response.data;
    } catch (error) {
        // Logs the error to the console for debugging purposes.
        console.error('Failed to fetch users:', error);
        // Throws a new error to be caught by the calling function.
        throw new Error('Failed to fetch users');
    }
};

/**
 * Adds a new user to the JSONPlaceholder API.
 * 
 * @param {Object} user - The user object to be added.
 * @returns {Promise<Object>} A promise that resolves to the newly added user object.
 * @throws {Error} When the request fails, an error is thrown with a descriptive message.
 */
export const addUser = async (user) => {
    try {
        // Performs a POST request to add a new user.
        const response = await axios.post(`${BASE_URL}/users`, user);
        // Returns the added user object from the response.
        return response.data;
    } catch (error) {
        // Logs the error to the console for debugging purposes.
        console.error('Failed to add user:', error);
        // Throws a new error to be caught by the calling function.
        throw new Error('Failed to add user');
    }
};
