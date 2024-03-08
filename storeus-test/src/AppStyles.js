// AppStyles.js
// Import statements organized and deduplicated
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

/**
 * StyledMainContainer - Defines the main layout container's styling.
 * It sets up a flex container with vertical direction to structure the main content area,
 * applies a background color, and adds vertical padding to create space between the content
 * and the header/footer.
 */
export const StyledMainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  backgroundColor: '#fcb900', // Sets the background color to a custom yellow
  padding: '30px 0', // Adds vertical padding for spacing around the content
});

/**
 * StyledContentContainer - Styles the specific content container within the main area.
 * It controls the margin, background color, shadow, and other visual aspects to make
 * the content area distinct and visually appealing.
 */
export const StyledContentContainer = styled(Container)({
  my: 2, // Increases vertical margin for additional space from top and bottom
  bgcolor: 'white', // Sets background color to white for contrast with the main container
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Applies a shadow for depth
  borderRadius: 2, // Rounds the corners for a softer look
  p: 2, // Adds padding inside the container for content spacing
  mx: 'auto', // Centers the container horizontally within its parent
  width: '80%', // Sets the width to 80% of its parent container for a balanced look
  boxSizing: 'border-box', // Ensures padding and border are included in the width and height
  backgroundColor: 'white',
});
