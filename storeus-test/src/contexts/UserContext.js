import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchUsers as fetchUsersAPI, addUser as addUserAPI } from '../services/api';

// Create a context for user data
const UserContext = createContext();

// Custom hook to utilize the UserContext for ease of use throughout the application
export const useUserContext = () => useContext(UserContext);

// Provider component that encapsulates state management and API calls for users
export const UserProvider = ({ children }) => {
  // State for the list of users
  const [users, setUsers] = useState([]);
  // State for the currently selected user, for detail viewing
  const [selectedUser, setSelectedUser] = useState(null);
  // State to control the visibility of the modal for user details
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Effect to fetch and initialize users from the API when the component mounts
  useEffect(() => {
    const initializeUsers = async () => {
      try {
        const fetchedUsers = await fetchUsersAPI();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Failed to initialize users", error);
        // Consider adding error handling UI feedback here
      }
    };
    initializeUsers();
  }, []);

  // Function to handle adding a new user through the API
  const handleAddUser = async (user) => {
    try {
      const newUser = await addUserAPI(user);
      // Prepend the new user to the existing list to display them at the top
      setUsers(prevUsers => [newUser, ...prevUsers]);
    } catch (error) {
      console.error("Failed to add user", error);
      // Consider implementing user feedback for failure (e.g., using toast notifications)
      throw error; // Re-throw error to be handled by the caller
    }
  };

  // Providing state and handlers through context to children components
  return (
    <UserContext.Provider value={{ users, handleAddUser, selectedUser, setSelectedUser, isModalOpen, setIsModalOpen }}>
      {children}
    </UserContext.Provider>
  );
};
