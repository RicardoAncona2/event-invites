'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Box, Typography, Paper, Button, Card, CardContent, IconButton, Collapse, ButtonGroup } from '@mui/material';
import { DirectionsCar, ExpandMore, ExpandLess, Map as MapIcon } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import { LocationCardProps } from './types';
import { locations } from './utils/locations';

const MotionPaper = motion.create(Paper);



const LocationCard = ({ title, address, directions, icon, mapUrl, imageSrc, parking }: LocationCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card elevation={3} id="location">
      <Box sx={{ position: 'relative', width: '100%', height: '250px' }}>
        <Image
          src={imageSrc || '/placeholder.svg'}
          alt={`Imagen de ${title}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Box>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
          <Box sx={{ color: 'primary.main' }}>{icon}</Box>
          <Typography variant="h6" component="h3" sx={{ fontFamily: 'var(--font-playfair-display)' }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {address}
        </Typography>
        <ButtonGroup variant="contained" sx={{ mt: 2, gap: 1 }}>
          <Button color="primary" startIcon={<MapIcon />} href={mapUrl} target="_blank" rel="noopener noreferrer">
            Ver en Mapa
          </Button>
        </ButtonGroup>
        <Box sx={{ display: 'flex', mt: 2 }}>
          <IconButton onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-label="mostrar más" size="small" sx={{ ml: 'auto' }}>
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" color="primary" gutterBottom>
              Cómo llegar:
            </Typography>
            <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
              {directions.map((direction, index) => (
                <li key={index}>
                  <Typography variant="body2" color="text.secondary">
                    {direction}
                  </Typography>
                </li>
              ))}
            </ul>
            {parking && (
              <>
                <Typography variant="subtitle2" color="primary" sx={{ mt: 2, mb: 1 }}>
                  Estacionamiento:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {parking}
                </Typography>
              </>
            )}
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

const LocationSection = () => (
  <MotionPaper elevation={3} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} sx={{ p: { xs: 2, md: 4 }, mt: 6, bgcolor: 'primary.light' }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <DirectionsCar sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
      <Typography variant="h5" component="h2" color="primary.dark" sx={{ fontFamily: 'var(--font-playfair-display)', mb: 1 }}>
        Ubicación
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Te esperamos en estos lugares especiales
      </Typography>
    </Box>
    <Grid container spacing={4}>
      {locations.map((location, index) => (
        <Grid key={index} size={{ xs: 12, md: 6 }}>
          <LocationCard {...location} />
        </Grid>
      ))}
    </Grid>
  </MotionPaper>
);

export default LocationSection;
