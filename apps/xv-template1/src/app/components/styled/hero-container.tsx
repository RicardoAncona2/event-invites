"use client"
import { Box, styled } from '@mui/material';

const HeroContainer = styled(Box)({
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // shadow color
    boxShadow: 'inset 0 4px 20px rgba(0, 0, 0, 1)', // inner shadow
    zIndex: '-1',
  },
});

export default HeroContainer;
