"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    phone: "",
    dietary: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically send the data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      setSnackbar({
        open: true,
        message: "¡Gracias por confirmar tu asistencia!",
        severity: "success",
      });
      setFormData({ name: "", guests: "1", phone: "", dietary: "" });
    } catch (error) {
      console.log(error)
      setSnackbar({
        open: true,
        message:
          "Hubo un error al enviar tu confirmación. Por favor, intenta de nuevo.",
        severity: "error",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="confirm"
    >
      <MotionPaper
        elevation={3}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          p: { xs: 3, md: 6 },
          mt: 6,
          backgroundColor: "primary.light",
          borderRadius: "16px 16px 0 0",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          color="text.secondary"
          align="center"
          sx={{
            mb: 4,
            fontFamily: "var(--font-playfair-display)",
          }}
        >
          Confirma tu Asistencia
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "grid",
            gap: 3,
            maxWidth: "md",
            mx: "auto",
            "& .MuiTextField-root": {
              backgroundColor: "background.paper",
              borderRadius: 1,
            },
          }}
        >
          <TextField
            required
            fullWidth
            label="Nombre Completo"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="filled"
          />

          <FormControl
            fullWidth
            variant="filled"
            sx={{ backgroundColor: "background.paper", borderRadius: 1 }}
          >
            <InputLabel>Número de Invitados</InputLabel>
            <Select
              name="guests"
              value={formData.guests}
              onChange={handleSelectChange}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <MenuItem key={num} value={num}>
                  {num} {num === 1 ? "Persona" : "Personas"}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            required
            fullWidth
            label="Teléfono"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="filled"
            type="tel"
          />

          <TextField
            fullWidth
            label="Requerimientos Dietéticos Especiales"
            name="dietary"
            value={formData.dietary}
            onChange={handleChange}
            variant="filled"
            multiline
            rows={2}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            sx={{
              mt: 2,
              backgroundColor: "primary.main",
              color: "text.secondary",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Confirmar Asistencia
          </Button>
        </Box>
        <Typography color="text.secondary" sx={{ mt: 4, textAlign: "center" }}>
          Tu presencia será el mejor regalo en este día tan especial
        </Typography>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            severity={snackbar.severity}
            sx={{ width: "100%" }}
            onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </MotionPaper>
    </motion.div>
  );
}
export default RsvpForm