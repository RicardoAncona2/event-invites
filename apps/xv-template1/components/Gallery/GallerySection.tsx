
import {
  Box,
  Typography,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./GallerySection.module.css";
import GalleryCarousel from "./GalleryCarousel";


const PhotoGallery = () => {

  return (
    <Box sx={{ pb: 5 }} className={styles.fadeInUp} id="gallery">
      <Typography variant="h3"
        sx={{
          fontSize: "1.5rem",
          color: "#FBA0E3",
          marginBottom: 3,
          textAlign: "center",
        }}
      >
        Galería
      </Typography>
      <GalleryCarousel />

    </Box>
  );
};

export default PhotoGallery;
