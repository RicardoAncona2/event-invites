"use client";

import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
export default QuinceaneraInvitation