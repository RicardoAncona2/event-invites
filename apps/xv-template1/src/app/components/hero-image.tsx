import { Box, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import useCountdown from "../hooks/useCountdown";
import { CountdownBox } from "./countdown-box";
const MotionBox = motion(Box);
const eventDate = new Date("2025-12-31T18:00:00");

const HeroImage = () => {
  const { days, hours, minutes, seconds } = useCountdown(eventDate);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroContainer>
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src="/gallery1.jpg" // Replace with the correct image path
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            priority // Ensures fast loading
            style={{ zIndex: -1 }} // Keep the image in the background
          />
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: "center", py: 15 }}
          >
            <Typography
              variant="h1"
              color="primary"
              gutterBottom
              sx={{
                fontFamily: "var(--font-playfair-display)",
              }}
            >
              Mis XV Años
            </Typography>
            <Typography
              variant="h2"
              color="white"
              gutterBottom
              sx={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Sofia Martinez
            </Typography>
            <Typography
              variant="h2"
              color="primary"
              gutterBottom
              sx={{ fontFamily: "var(--font-playfair-display)", pt: 25 }}
            >
              31 de Diciembre 6:00 pm
            </Typography>

            <Box sx={{ mb: 4, p: 3, borderRadius: 1 }}>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
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

const HeroContainer = styled(Box)({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // shadow color
    boxShadow: "inset 0 4px 20px rgba(0, 0, 0, 1)", // inner shadow
    zIndex: "-1",
  },
});
