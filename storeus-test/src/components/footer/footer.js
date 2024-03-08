import React from 'react';
import { CustomFooterBox, CustomFooterContainer, CustomFooterTypography } from './FooterStyles';

/**
 * Footer component displaying the application's footer content.
 * Utilizes custom styled components defined in FooterStyles for layout and styling.
 */
const Footer = () => {
  return (
    // CustomFooterBox acts as the outer container for the footer, setting its position, background, and other styles.
    <CustomFooterBox component="footer">
      {/* CustomFooterContainer centers the footer content and applies container-specific styling. */}
      <CustomFooterContainer>
        {/* CustomFooterTypography applies specific text styling to the footer content. */}
        <CustomFooterTypography variant="body1">
          Bilel Khelifi | Technical Interview Test
        </CustomFooterTypography>
      </CustomFooterContainer>
    </CustomFooterBox>
  );
};

export default Footer;
