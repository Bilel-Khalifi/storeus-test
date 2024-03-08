import { styled } from '@mui/material/styles';
import { ListItem, Box } from '@mui/material';

/**
 * ScrollableListContainer - A styled component for wrapping the user list.
 * It ensures the list is scrollable vertically when exceeding a certain height,
 * maintaining a fixed height and providing a better user experience.
 */
export const ScrollableListContainer = styled(Box)({
  maxHeight: '400px', // Sets a maximum height to trigger vertical scrolling
  overflowY: 'auto', // Enables vertical scrolling when content exceeds maxHeight
  width: '100%', // Ensures full width usage within its parent container
  marginTop: '1rem', // Adds top margin for spacing from other elements
  marginBottom: '1rem', // Adds bottom margin for spacing from other elements
});

/**
 * StyledListItem - A styled component for individual list items.
 * Enhances the visual interaction by applying hover effects and spacing,
 * contributing to a visually appealing and interactive list.
 */
export const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:not(:last-child)': {
    marginBottom: theme.spacing(1), // Adds spacing between list items except the last one
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover, // Changes background color on hover for visual feedback
    cursor: 'pointer', // Changes the cursor to indicate an interactive element
    boxShadow: `0px 2px 5px rgba(0, 0, 0, 0.2)`, // Adds a subtle shadow effect on hover
  },
}));

/**
 * ModalBox - A styled component for the modal used to display user details.
 * Positions the modal centrally and applies consistent styling and padding,
 * ensuring the modal is visually distinct and contextually centered.
 */
export const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute', // Necessary for centering the modal
  top: '50%', // Vertically centers the modal
  left: '50%', // Horizontally centers the modal
  transform: 'translate(-50%, -50%)', // Adjusts the positioning to truly center the modal
  width: 400, // Sets a fixed width for the modal
  bgcolor: 'background.paper', // Uses the theme's background color for consistency
  border: '2px solid #000', // Adds a border for visual distinction
  boxShadow: theme.shadows[5], // Applies a shadow for depth and focus
  p: theme.spacing(4), // Adds internal padding for content spacing
}));
