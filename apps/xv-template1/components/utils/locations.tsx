import { Church, Celebration } from '@mui/icons-material';

export const locations = [
  {
    title: 'Ceremonia Religiosa',
    address: 'Catedral de Santa María, Av. Principal #123, Centro Histórico',
    directions: [
      'Toma la Av. Principal hacia el centro histórico',
      'La catedral está frente a la plaza principal',
      'Encontrarás la entrada principal sobre la Av. Principal'
    ],
    icon: <Church />, mapUrl: 'https://maps.google.com/?q=Catedral+de+Santa+María',
    gpsCoords: '19.432608,-99.133209',
    imageSrc: '/religiosa.jpg?height=400&width=600',
    parking: 'Estacionamiento disponible en la plaza principal y calles aledañas'
  },
  {
    title: 'Salón de Eventos',
    address: 'Salón Real Palace, Blvd. de las Flores #456, Jardines',
    directions: [
      'Desde la catedral, toma el Blvd. de las Flores hacia el norte',
      'El salón está a 10 minutos de la catedral',
      'Encontrarás la entrada sobre el boulevard principal'
    ],
    icon: <Celebration />, mapUrl: 'https://maps.google.com/?q=Salon+Real+Palace',
    gpsCoords: '19.435789,-99.140123',
    imageSrc: '/salon.jpeg?height=400&width=600',
    parking: 'Estacionamiento privado disponible sin costo'
  }
];