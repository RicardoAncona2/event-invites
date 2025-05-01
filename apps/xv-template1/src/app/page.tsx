import {
  EventDateCards,
  LandingInfo,
  Divider,
  Header,
  LocationSection,
  RsvpForm,
  GiftRegistry,
  HeroImage,
  PhotoGallery,
  Passes,
} from '../../components';
const name = 'Sofia Martinez'
const parents: [string, string] = ['José Martinez', 'María González']
const godparents: string[] = ['Juan Perez', 'Juana Lopez']
const eventDate = new Date('2025-12-31T18:19:00');

const QuinceaneraInvitation = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  searchParams = await searchParams
  const people = parseInt(searchParams?.people || '0', 10);

  return (
    <>
      <Header />
      <HeroImage name={name} eventDate={eventDate} />
      <Divider />
      <LandingInfo parents={parents} godparents={godparents} />
      <Divider />
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