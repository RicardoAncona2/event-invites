import { Box, Typography } from "@mui/material";
import MotionBox from "../utils/motionBox";

export default function LandingInfo() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      sx={{ textAlign: "center" }}
    >
      <Typography
        variant="h3"
        color="text.secondary"
        sx={{
          fontStyle: "italic",
          mb: 3,
          fontFamily: '"Licorice", Sans-serif',
        }}
      >
        Con la bendición de Dios, mis padres y padrinos
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" color="text.primary">
          José Martinez & María González
        </Typography>
        <Typography color="text.secondary">
          tenemos el honor de invitarte a celebrar
        </Typography>
        <Typography color="text.secondary">mis XV años</Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" color="text.primary">
          José Martinez & María González
        </Typography>
        <Typography color="text.secondary">
          tenemos el honor de invitarte a celebrar
        </Typography>
        <Typography color="text.secondary">mis XV años</Typography>
      </Box>
    </MotionBox>
  );
}
