import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';

// Styles the main footer container with a fixed position at the bottom of the viewport.
export const CustomFooterBox = styled(Box)({
  backgroundColor: 'white', // Sets the footer's background color.
  padding: '16px 0', // Defines vertical padding within the footer for spacing.
  position: 'fixed',
  bottom: 0,
  width: '100%',
  boxShadow: '0 -2px 4px rgba(0,0,0,0.1)', // Adds a shadow for visual separation from the content.
});

// Styles the inner container to correctly align the footer content.
export const CustomFooterContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'flex-end', // Aligns footer content to the right.
  maxWidth: 'sm', // Restricts the maximum width to match the main content's width.
});

// Applies specific typography styles to the footer text for readability and aesthetic.
export const CustomFooterTypography = styled(Typography)({
  textAlign: 'right', // Aligns the text to the right within the footer.
  color: 'rgba(0, 0, 0, 0.54)', // Sets the text color for sufficient contrast with the background.
});
