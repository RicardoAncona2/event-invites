"use client"
import useCountdown from '../../hooks/useCountdown';
import CountdownBox from './countdown-box';
import styles from './EventDate.module.css';
import { Box } from '@mui/material';

interface Props {
    eventDate: Date;
}

const EventDateCountDownBox = ({ eventDate }: Props) => {
    const { days, hours, minutes, seconds } = useCountdown(eventDate);

    return (
        <Box className={styles.motionBox}>
            <Box className={styles.countdownWrapper}>
                <CountdownBox label="Días" value={days} />
                <CountdownBox label="Horas" value={hours} />
                <CountdownBox label="Minutos" value={minutes} />
                <CountdownBox label="Segundos" value={seconds} />
            </Box>
        </Box>
    );
};

export default EventDateCountDownBox;
