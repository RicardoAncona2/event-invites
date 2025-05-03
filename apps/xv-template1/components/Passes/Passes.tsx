import Image from 'next/image';
import styles from './Passes.module.css';
import { Box, Typography } from '@mui/material';

interface Props {
  people: number;
}

const Passes = ({ people }: Props) => {
  return (
    <Box className={styles.container}>
      <Typography component={"p"} className={styles.title}>Hemos reservado</Typography>
      <Box className={styles.shakeWrapper}>
        <Image
          src="/Cards.svg"
          alt="Stacked Cards"
          width={120}
          height={150}
          className={styles.cardImage}
        />
        <Typography component={"p"} className={styles.peopleCount} fontSize={"3rem"}>{people}</Typography>
      </Box>
      <Typography component={"p"} className={styles.subtitle}>lugares en tu honor</Typography>
    </Box>
  );
};

export default Passes;
