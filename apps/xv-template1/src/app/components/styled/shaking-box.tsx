"use client"
import { Box, keyframes, styled } from '@mui/material';

const shakeVertical = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-5px); }
  50% { transform: translateY(5px); }
  75% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

// Style the MUI Box component with the animation
const ShakingBox = styled(Box)`
  display: flex;
  animation: ${shakeVertical} 3s ease-in-out infinite;
  justify-content: center;
`;

export default ShakingBox;
