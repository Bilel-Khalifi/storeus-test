import React, { useState } from 'react';
import { toast } from 'react-toastify'; // For displaying toast notifications
import 'react-toastify/dist/ReactToastify.css';
import { List, ListItemText, IconButton, Modal, Typography, Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Unfilled heart icon for unfavorite state
import FavoriteIcon from '@mui/icons-material/Favorite'; // Filled heart icon for favorite state
import EmailIcon from '@mui/icons-material/Email'; // Icon for email display
import PhoneIcon from '@mui/icons-material/Phone'; // Icon for phone display
import CloseIcon from '@mui/icons-material/Close'; // Icon for closing the modal
import { useUserContext } from '../../contexts/UserContext'; // Context hook for accessing user data
import { StyledListItem, ModalBox, ScrollableListContainer } from './UserListStyles'; // Custom styled components

// UserList component displays a list of users and allows marking favorites and viewing user details
const UserList = () => {
    const { users, selectedUser, setSelectedUser, isModalOpen, setIsModalOpen } = useUserContext();
    const [favorites, setFavorites] = useState([]); // Local state to track favorite users

    // Opens the modal to show selected user details
    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    // Closes the user details modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Toggles the favorite state of a user and displays appropriate toast notification
    const handleFavoriteToggle = (userId) => {
        setFavorites(prevFavorites => {
            if (prevFavorites.includes(userId)) {
                toast.error("Removed from favorites!", { position: "bottom-right" });
                return prevFavorites.filter(favoriteId => favoriteId !== userId); // Remove from favorites
            } else {
                toast.success("Added to favorites!", { position: "bottom-right" });
                return [...prevFavorites, userId]; // Add to favorites
            }
        });
    };

    return (
        <>
            {/* Scrollable container for the user list */}
            <ScrollableListContainer>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {users.map(user => (
                        <StyledListItem
                            key={user.id}
                            onClick={() => handleOpenModal(user)}
                            secondaryAction={
                                <IconButton edge="end" onClick={(event) => {
                                    event.stopPropagation(); // Prevent modal opening on favorite toggle
                                    handleFavoriteToggle(user.id);
                                }}>
                                    {favorites.includes(user.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                                </IconButton>
                            }
                        >
                            <ListItemText primary={user.name} />
                        </StyledListItem>
                    ))}
                </List>
            </ScrollableListContainer>

            {/* Modal for displaying selected user details */}
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="user-details-modal-title"
                aria-describedby="user-details-modal-description"
                hideBackdrop="true" // Correct usage should be hideBackdrop={true} if intending to hide the backdrop
            >
                <ModalBox>
                    <IconButton onClick={handleCloseModal} sx={{ position: 'absolute', right: 8, top: 8 }} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography id="user-details-modal-title" variant="h6" component="h2" sx={{ pt: 3, pb: 2 }}>
                        {selectedUser?.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <EmailIcon sx={{ mr: 1, color: '#fcb900' }} />
                        <Typography variant="body1">{selectedUser?.email}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <PhoneIcon sx={{ mr: 1, color: '#fcb900' }} />
                        <Typography variant="body1">{selectedUser?.phone}</Typography>
                    </Box>
                </ModalBox>
            </Modal>
        </>
    );
};

export default UserList;
