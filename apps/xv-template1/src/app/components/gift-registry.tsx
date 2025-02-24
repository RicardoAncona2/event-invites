'use client';

import {
  Box,
  Typography,
  Grid2,
  Card,
  CardContent,
  CardActionArea,
  Link,
  useTheme,
} from '@mui/material';
import { CardGiftcard, Store, LocalMall, Redeem } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const giftRegistries = [
  {
    store: 'Liverpool',
    code: '50367890',
    icon: <Store />,
    url: 'https://www.liverpool.com.mx/mesa-de-regalos',
    description: 'Mesa de Regalos #50367890',
  },
  {
    store: 'Amazon',
    code: '2X4Y6Z8',
    icon: <LocalMall />,
    url: 'https://www.amazon.com.mx/gp/registry',
    description: 'Lista de Deseos #2X4Y6Z8',
  },
  {
    store: 'Sears',
    code: '15209876',
    icon: <Redeem />,
    url: 'https://www.sears.com.mx/mesa-de-regalos',
    description: 'Mesa de Regalos #15209876',
  },
];

const GiftRegistry = () => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Box sx={{ mb: 4 }}>
          <CardGiftcard
            sx={{
              fontSize: 40,
              color: theme.palette.primary.main,
              mb: 2,
            }}
          />
          <Typography
            variant="h5"
            component="h2"
            color="primary"
            sx={{
              fontFamily: 'var(--font-playfair-display)',
              mb: 1,
            }}
          >
            Mesa de Regalos
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Si deseas hacerme un regalo, he creado estas listas de regalos para
            tu conveniencia
          </Typography>
        </Box>

        <Grid2 container spacing={3} justifyContent="center">
          {giftRegistries.map((registry, index) => (
            <Grid2 size={{ xs: 12, md: 4, sm: 6 }} key={registry.store}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                sx={{
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  href={registry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ height: '100%' }}
                >
                  <CardContent>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {registry.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      color="primary.dark"
                      gutterBottom
                    >
                      {registry.store}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {registry.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </MotionCard>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </motion.div>
  );
};
export default GiftRegistry;
