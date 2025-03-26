"use client"
import { Box } from "@mui/material"
import MotionBox from "../utils/motionBox"
import CountdownBox from "./countdown-box"
import useCountdown from '../hooks/useCountdown';
const eventDate = new Date('2025-12-31T18:00:00');

export const EventDateMotionBox = () => {
    const { days, hours, minutes, seconds } = useCountdown(eventDate);

    return (<MotionBox sx={{ mb: 4, p: 3, borderRadius: 1, }} initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <CountdownBox label="Días" value={days} />
            <CountdownBox label="Horas" value={hours} />
            <CountdownBox label="Minutos" value={minutes} />
            <CountdownBox label="Segundos" value={seconds} />
        </Box>
    </MotionBox>)
}