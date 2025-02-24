import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useCountdown from '../hooks/useCountdown';
import { CountdownBox } from './';
import { HeroContainer } from './styled';
const MotionBox = motion(Box);
const eventDate = new Date('2025-12-31T18:00:00');

const HeroImage = () => {
  const { days, hours, minutes, seconds } = useCountdown(eventDate);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
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
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
              sx={{ fontFamily: 'var(--font-playfair-display)', pt: 25 }}
            >
              31 de Diciembre 6:00 pm
            </Typography>

            <Box sx={{ mb: 4, p: 3, borderRadius: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <CountdownBox label="Días" value={days} />
                <CountdownBox label="Horas" value={hours} />
                <CountdownBox label="Minutos" value={minutes} />
                <CountdownBox label="Segundos" value={seconds} />
              </Box>
            </Box>
          </MotionBox>
        </Box>
      </HeroContainer>
    </motion.div>
  );
};

export default HeroImage;
