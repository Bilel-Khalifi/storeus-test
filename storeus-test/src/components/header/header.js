import React from 'react';
import { CustomAppBar, CustomToolbar, LeftTypography, RightTypography, LogoImage } from './HeaderStyles';

// Header component displaying the app's navigation and branding
const Header = () => {
  return (
    <CustomAppBar position="fixed">
      <CustomToolbar>
        <RightTypography variant="h6" component="div">Signature</RightTypography>
        <LogoImage src="/st-favicon.png" alt="logo" />
        <LeftTypography variant="h6" component="div">Technologie</LeftTypography>
      </CustomToolbar>
    </CustomAppBar>
  );
};

export default Header;
