
import { CalendarToday, Schedule } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import { InfoCard } from "../..";
import styles from "./EventDateCards.module.css";
import { Box } from "@mui/material";

const EventDateCards = ({ eventDate }: { eventDate: Date }) => {
  const dateString = `${eventDate.getDate()} de ${[
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ][eventDate.getMonth()]
    } del ${eventDate.getFullYear()}`;

  const items = [
    {
      icon: <CalendarToday />,
      title: "Fecha",
      content: dateString,
    },
    {
      icon: <Schedule />,
      title: "Hora",
      content: "6:00 PM",
    },
  ];

  return (
    <Grid container spacing={2} sx={{ mb: 4 }}>
      {items.map((item, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={index}>
          <Box className={`${styles.card} ${styles[`delay-${index + 1}`]}`}>
            <InfoCard
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default EventDateCards;
