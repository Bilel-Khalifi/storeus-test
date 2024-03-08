// App.js
// Import React and necessary Material-UI components for basic UI structure.
import React from 'react';
import { Typography, CssBaseline } from '@mui/material';

// Import custom components and context for the application.
import UserList from './components/UserList/UserList';
import AddUserForm from './components/AddUserForm/AddUserForm';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { UserProvider } from './contexts/UserContext';

// Import styled components for consistent styling across the app.
import { StyledMainContainer, StyledContentContainer } from './AppStyles';

// Import ToastContainer for user notifications.
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * App component: Serves as the root of the application.
 * This component sets up the application's layout, including the header, main content area, and footer.
 * It wraps the content within UserProvider to manage global user state.
 * ToastContainer is used for showing user feedback notifications throughout the application.
 */
function App() {
  return (
    <UserProvider>
      {/* CssBaseline component is used to kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />

      {/* Header component displays the application's header. */}
      <Header />

      {/* StyledMainContainer contains the main content area of the application, providing consistent styling. */}
      <StyledMainContainer>
        {/* StyledContentContainer further structures the main content area, especially for form and user list display. */}
        <StyledContentContainer component="main" maxWidth="false">
          {/* Page title */}
          <Typography variant="h4" component="h1" gutterBottom>
            User List
          </Typography>

          {/* AddUserForm component allows users to add new users to the list. */}
          <AddUserForm />

          {/* UserList component displays the list of users. */}
          <UserList />

          {/* ToastContainer displays notifications and feedback to the user. */}
          <ToastContainer position="bottom-left" autoClose={1000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </StyledContentContainer>
      </StyledMainContainer>

      {/* Footer component displays the application's footer. */}
      <Footer />
    </UserProvider>
  );
}

export default App;
