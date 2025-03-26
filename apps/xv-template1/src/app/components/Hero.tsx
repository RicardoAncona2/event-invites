
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { HeroContainer } from './styled';
import { EventDateMotionBox } from './EventDateMotionBox';

const Hero = () => {

  return (
    <>
      <HeroContainer>
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="/gallery1.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            priority
            style={{ zIndex: -1 }}
          />
          <Box
            sx={{ textAlign: 'center', py: 15 }}
          >
            <Typography
              variant="h1"
              color="primary"
              gutterBottom
              sx={{
                fontFamily: 'var(--font-playfair-display)',
              }}
            >
              Mis XV Años
            </Typography>
            <Typography
              variant="h2"
              color="white"
              gutterBottom
              sx={{ fontFamily: 'var(--font-playfair-display)' }}
            >
              Sofia Martinez
            </Typography>
            <Typography
              variant="h2"
              color="primary"
              gutterBottom
              sx={{ fontFamily: 'var(--font-playfair-display)' }}
            >
              31 de Diciembre 6:00 pm
            </Typography>

            <EventDateMotionBox />
          </Box>
        </Box>
      </HeroContainer>
    </>
  );
};

export default Hero;
