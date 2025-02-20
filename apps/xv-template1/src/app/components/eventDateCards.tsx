import { CalendarToday, Schedule } from "@mui/icons-material";
import { motion } from "framer-motion";
import { InfoCard } from "./info-card";
import Grid from "@mui/material/Grid2";

export default function EventDateCards() {
  return (
    <Grid container spacing={2} sx={{ mb: 4 }}>
      {[
        {
          icon: <CalendarToday />,
          title: "Fecha",
          content: "31 de Diciembre, 2025",
        },
        { icon: <Schedule />, title: "Hora", content: "6:00 PM" },
      ].map((item, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <InfoCard
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
