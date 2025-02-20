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
} from "./components";
export default function QuinceaneraInvitation() {
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
      <RsvpForm />
    </ThemeProvider>
  );
}
