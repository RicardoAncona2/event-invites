"use client"

import type React from "react"
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  IconButton,
  Collapse,
  ButtonGroup,
} from "@mui/material"
import {
  Church,
  Celebration,
  DirectionsCar,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Map as MapIcon,
} from "@mui/icons-material"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const MotionPaper = motion(Paper)

interface LocationCardProps {
  title: string
  address: string
  directions: string[]
  icon: React.ReactNode
  mapUrl: string
  gpsCoords: string
  imageSrc: string
  parking?: string
}

function LocationCard({ title, address, directions, icon, mapUrl, imageSrc, parking }: LocationCardProps) {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }


  return (
    <Card elevation={3}>
      <Box sx={{ position: "relative", width: "100%", height: "250px" }}>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`Imagen de ${title}`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Box>

      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
          <Box sx={{ color: "primary.main" }}>{icon}</Box>
          <Typography variant="h6" component="h3" sx={{ fontFamily: "var(--font-playfair-display)" }}>
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

        <Box sx={{ display: "flex", mt: 2 }}>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="mostrar más"
            size="small"
            sx={{ ml: "auto" }}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" color="primary" gutterBottom>
              Cómo llegar:
            </Typography>
            <ul style={{ paddingLeft: "1.5rem", margin: "0.5rem 0" }}>
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
  )
}

export function LocationSection() {
  return (
    <MotionPaper
      elevation={3}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        p: { xs: 2, md: 4 },
        mt: 6,
        bgcolor: "primary.light",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <DirectionsCar sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
        <Typography
          variant="h5"
          component="h2"
          color="primary.dark"
          sx={{
            fontFamily: "var(--font-playfair-display)",
            mb: 1,
          }}
        >
          Ubicación
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Te esperamos en estos lugares especiales
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <LocationCard
            title="Ceremonia Religiosa"
            address="Catedral de Santa María, Av. Principal #123, Centro Histórico"
            directions={[
              "Toma la Av. Principal hacia el centro histórico",
              "La catedral está frente a la plaza principal",
              "Encontrarás la entrada principal sobre la Av. Principal",
            ]}
            icon={<Church />}
            mapUrl="https://maps.google.com/?q=Catedral+de+Santa+María"
            gpsCoords="19.4326,-99.1332" // Example coordinates
            imageSrc="/religiosa.jpg?height=400&width=600"
            parking="Estacionamiento disponible en la plaza principal y calles aledañas"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <LocationCard
            title="Salón de Eventos"
            address="Salón Real Palace, Blvd. de las Flores #456, Jardines"
            directions={[
              "Desde la catedral, toma el Blvd. de las Flores hacia el norte",
              "El salón está a 10 minutos de la catedral",
              "Encontrarás la entrada sobre el boulevard principal",
            ]}
            icon={<Celebration />}
            mapUrl="https://maps.google.com/?q=Salon+Real+Palace"
            gpsCoords="19.4326,-99.1332" // Example coordinates
            imageSrc="/salon.jpeg?height=400&width=600"
            parking="Estacionamiento privado disponible sin costo"
          />
        </Grid>
      </Grid>

    </MotionPaper>
  )
}

