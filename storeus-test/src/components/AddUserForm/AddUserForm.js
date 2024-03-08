import React from 'react';
import { Typography } from '@mui/material';
import { Formik, Form } from 'formik'; // Import Formik for form handling
import { toast } from 'react-toastify'; // Import toast for showing notifications
import { validationSchema } from '../../utils/validationSchema'; // Import the validation schema
import { FormContainer, FieldsRow, CustomTextField, CustomButton } from './AddUserFormStyles'; // Import styled components
import AddIcon from '@mui/icons-material/Add'; // Import icon for the submit button
import { useUserContext } from '../../contexts/UserContext'; // Import context for user operations

/**
 * The AddUserForm component allows users to add new users through a form.
 * It uses Formik for form state management and Yup for validation,
 * with custom styled components for layout and appearance.
 */
const AddUserForm = () => {
  const { handleAddUser } = useUserContext(); // Use context to handle adding a new user

  return (
    <>
      <Typography variant="h6" sx={{ margin: '20px 0', textAlign: 'left' }}>
        Add New User:
      </Typography>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }} // Initial form state
        validationSchema={validationSchema} // Validation schema for the form
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          // Form submission logic
          try {
            await handleAddUser(values); // Attempt to add a new user
            toast.success("User added successfully!"); // Show success notification
            resetForm(); // Reset the form fields
          } catch (error) {
            toast.error("Failed to add user."); // Show error notification on failure
          }
          setSubmitting(false); // Reset form submitting state
        }}
      >
        <FormContainer component={Form} autoComplete="off"> {/* Form container with custom styling */}
          <FieldsRow> {/* Container for form fields */}
            {/* CustomTextField components with Formik integration */}
            <CustomTextField name="name" label="Name" required />
            <CustomTextField name="email" label="Email" type="email" required />
            <CustomTextField name="phone" label="Phone" />
          </FieldsRow>
          <CustomButton type="submit" variant="contained" startIcon={<AddIcon />}> {/* Custom styled submit button */}
            Add User
          </CustomButton>
        </FormContainer>
      </Formik>
    </>
  );
};

export default AddUserForm;
