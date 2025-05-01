
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { EventDateMotionBox } from './EventDateMotionBox';

const Hero = ({ name, eventDate }: { name: string, eventDate: Date }) => {

  return (
    <Box id='home' sx={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      overflow: 'hidden'
    }}>
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          src='/gallery1.jpg'
          alt='Hero Image'
          fill
          priority
          style={{ zIndex: -1 }}
        />
        <Box
          sx={{ textAlign: 'center', py: 15 }}
        >
          <Typography
            variant='h1'
            color='primary'
            gutterBottom
            sx={{
              fontFamily: 'var(--font-playfair-display)',
            }}
          >
            Mis XV Años
          </Typography>
          <Typography
            variant='h2'
            color='white'
            gutterBottom
            sx={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            {name}
          </Typography>
          <Typography
            variant='h2'
            color='primary'
            gutterBottom
            sx={{ fontFamily: 'var(--font-playfair-display)' }}
          >
          </Typography>
          <EventDateMotionBox eventDate={eventDate} />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
