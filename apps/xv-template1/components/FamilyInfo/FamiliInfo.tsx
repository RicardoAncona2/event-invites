import { Box, Typography } from "@mui/material";
import styles from "./FamiliInfo.module.css";

interface Props {
  parents: [string, string];
  godparents: string[];
}

const LandingInfo = ({ parents, godparents }: Props) => {
  return (
    <Box className={styles.container}>
      <Typography variant="h3" color="text.secondary" className={styles.heading}>
        Con la bendición de Dios, mis padres
      </Typography>

      <Box className={styles.section}>
        <Typography variant="h6" color="text.primary">
          {`${parents[0]} & ${parents[1]}`}
        </Typography>
        <Typography color="text.secondary">
          tenemos el honor de invitarte a celebrar
        </Typography>
        <Typography color="text.secondary">mis XV años</Typography>
      </Box>

      <Box className={styles.section}>
        <Typography
          variant="h6"
          color="text.primary"
          component="ul"
          className={styles.godparentList}
        >
          <Typography variant="h3" color="text.secondary" className={styles.heading}>
            y padrinos
          </Typography>
          {godparents.map((godparent) => (
            <li key={godparent}>{godparent}</li>
          ))}
        </Typography>


      </Box>
    </Box>
  );
};

export default LandingInfo;
