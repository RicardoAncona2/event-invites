import type React from 'react';
import { Paper, Typography, Box } from '@mui/material';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const InfoCard = ({ icon, title, content }: InfoCardProps) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        backgroundColor: 'primary.light',
        opacity: 0.9,
      }}
    >
      <Box sx={{ color: 'primary.main' }}>{icon}</Box>
      <Box>
        <Typography
          variant="subtitle1"
          component="h3"
          color="primary.dark"
          sx={{ fontWeight: 'medium' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </Box>
    </Paper>
  );
};
export default InfoCard;
