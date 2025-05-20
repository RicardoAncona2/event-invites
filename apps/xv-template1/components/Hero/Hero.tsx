import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import EventDateMotionBox from './EventCountDown/EventDateCountDownBox';
import styles from './Hero.module.css'
import { getHero, updateHero } from 'apps/xv-template1/lib/db';
import { UpdateHero } from "./HeroUpdate";
import EditButton from '../utils/EditButton';

const Hero = async () => {
  const editMode = process.env.EDIT_MODE === "on";
  const [data] = await getHero(1);
  const { title, subTitle, eventDate } = data;
  const dateEvent = new Date(eventDate!)
  return (
    <Box id='home' className={styles.container}>
      <Image
        src='/gallery1.jpg'
        alt='Hero Image'
        fill
        priority
        style={{ objectFit: "cover", zIndex: -1 }}
        sizes="100vw"
      />
      <Box
        className={styles.textContainer}
      >
        <Typography
          variant='h1'
          color='primary'
          gutterBottom
          sx={{
            fontFamily: 'var(--font-playfair-display)',
          }}
        >
          {title}{editMode && <EditButton
            label={title!}
            props={{ id: 1, title: title! }}
            updateFunction={UpdateHero}
          />}
        </Typography>

        <Typography
          variant='h2'
          color='white'
          gutterBottom
          sx={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          {subTitle}{editMode && <EditButton
            label={subTitle!}
            props={{ id: 1, subTitle: subTitle! }}
            updateFunction={UpdateHero}
            enableColorPicker
          />}
        </Typography>
        <Typography
          variant='h2'
          color='primary'
          gutterBottom
          sx={{ fontFamily: 'var(--font-playfair-display)' }}
        >
        </Typography>
        <EventDateMotionBox eventDate={dateEvent} />
      </Box>
    </Box>
  );
};
export default Hero;
