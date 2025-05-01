export interface CountdownBoxProps {
  label: string;
  value: number;
}

export interface LocationCardProps {
  title: string;
  address: string;
  directions: string[];
  icon: React.ReactNode;
  mapUrl: string;
  gpsCoords: string;
  imageSrc: string;
  parking?: string;
}
