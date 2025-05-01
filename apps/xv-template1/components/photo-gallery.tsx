"use client";

import { useState,  } from "react";
import {
  Box,
  Dialog,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./photo-gallery.module.css";

const photos = [
  {
    src: "/gallery1.jpg?height=600&width=400",
    alt: "Foto 1 de la Quinceañera",
  },
  {
    src: "/gallery2.jpg?height=600&width=400",
    alt: "Foto 2 de la Quinceañera",
  },
  {
    src: "/gallery3.jpg?height=600&width=400",
    alt: "Foto 3 de la Quinceañera",
  },
  {
    src: "/gallery4.jpg?height=600&width=400",
    alt: "Foto 4 de la Quinceañera",
  },
];

const PhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={styles.fadeInUp} id="gallery">
      <Box sx={{ pb: 5 }}>
        <h3
          style={{
            fontSize: "1.5rem",
            color: theme.palette.primary.main,
            marginBottom: theme.spacing(3),
            textAlign: "center",
          }}
        >
          Galería
        </h3>

        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={4000}
          stopOnHover
          swipeable
          emulateTouch
          dynamicHeight={false}
          centerMode={!isMobile}
          centerSlidePercentage={isMobile ? 100 : 50}
        >
          {photos.map((photo, index) => (
            <div key={index} onClick={() => setSelectedIndex(index)}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={600}
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </div>
          ))}
        </Carousel>

        <Dialog
          open={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
          maxWidth="lg"
          fullWidth
        >
          <IconButton
            onClick={() => setSelectedIndex(null)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
          <div
            style={{ position: "relative", width: "100%", paddingTop: "75%" }}
          >
            {selectedIndex !== null && (
              <Image
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="100vw"
              />
            )}
          </div>
        </Dialog>
      </Box>
    </div>
  );
};

export default PhotoGallery;
