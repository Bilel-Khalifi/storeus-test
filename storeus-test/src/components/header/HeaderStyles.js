import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';

// AppBar with custom color
export const CustomAppBar = styled(AppBar)({
  backgroundColor: 'white',
  color: 'rgba(0, 0, 0, 0.54)',
});

// Toolbar ensuring content is spaced evenly
export const CustomToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

// Typography components for aligning text to the left and right
export const LeftTypography = styled(Typography)({
  flexGrow: 1,
  textAlign: 'left',
  margin: '0 10px',
});

export const RightTypography = styled(Typography)({
  flexGrow: 1,
  textAlign: 'right',
  margin: '0 10px',
});

// Logo image styling
export const LogoImage = styled('img')({
  height: '50px',
  margin: '0 10px',
});
