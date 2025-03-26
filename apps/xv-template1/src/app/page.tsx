
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
} from "./components";
const QuinceaneraInvitation=()=> {
  return (
    <>
      <Header />
      <HeroImage />
      <Divider />
      <LandingInfo />
      <Divider />
      <PhotoGallery />
      <EventDateCards />
      <LocationSection />
      <GiftRegistry />
      <Passes people={2}/>
      <RsvpForm />
    </>
  );
}
export default QuinceaneraInvitation