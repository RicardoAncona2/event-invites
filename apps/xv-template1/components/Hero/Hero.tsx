import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import EventDateMotionBox from './EventCountDown/EventDateCountDownBox';
import styles from './Hero.module.css'
const Hero = ({ name, eventDate }: { name: string, eventDate: Date }) => {

  return (
    <Box id='home' className={styles.container}>
      <Image
        src='/gallery1.jpg'
        alt='Hero Image'
        fill
        priority
            style={{ objectFit: "cover",zIndex:-1 }}
            sizes="100vw"
      />
      <Box
        className={styles.textContainer}
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
  );
};

export default Hero;
