import { styled } from '@mui/material/styles';
import { Box, TextField, Button } from '@mui/material';
import { useField } from 'formik'; // Hook for integrating TextField with Formik


// Container for the entire form, providing layout and spacing.
export const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center', 
  gap: '16px', 
  width: '100%', 
});
// Row container for form fields, ensuring they are displayed inline and spaced appropriately.
export const FieldsRow = styled(Box)({
  display: 'flex',
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  width: '100%', 
  gap: '10px', 
});

// CustomTextField integrates Formik's useField hook for form state management and validation.
export const CustomTextField = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      {...field}
      {...props}
      fullWidth
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

// CustomButton styled for consistency and aesthetics across the form.
export const CustomButton = styled(Button)({
  marginTop: '20px', 
  backgroundColor: '#fcb900', 
  color: 'white', 
  '&:hover': {
    backgroundColor: '#dbaa00', 
  },
  width: 'fit-content', 
});
