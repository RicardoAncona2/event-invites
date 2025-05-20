import {
  EventDateCards,
  LandingInfo,
  LocationSection,
  RsvpForm,
  GiftRegistry,
  HeroImage,
  PhotoGallery,
  Passes,
} from '../../components';
import { Divider } from '@mui/material';
import styles from './page.module.css'
import { getHeader } from 'apps/xv-template1/lib/db';
const name = 'Sofia Martinez'
const parents: [string, string] = ['José Martinez', 'María González']
const godparents: string[] = ['Juan Perez', 'Juana Lopez']
const eventDate = new Date('2025-12-31T18:19:00');

const QuinceaneraInvitation = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  searchParams = await searchParams
  const people = parseInt(searchParams?.people || '0', 10);

  return (
    <>
      <HeroImage name={'asdasd'} eventDate={eventDate}/>
      <Divider className={styles.divider} />
      <LandingInfo parents={parents} godparents={godparents} />
      <Divider className={styles.divider} />
      <PhotoGallery />
      <EventDateCards eventDate={eventDate} />
      <LocationSection />
      <GiftRegistry />
      {people > 0 && <Passes people={people} />}
      <RsvpForm />
    </>
  );
};

export default QuinceaneraInvitation;