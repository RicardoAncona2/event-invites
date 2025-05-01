import { ShakingBox } from './styled';
import { Typography } from '@mui/material';
import Image from 'next/image';

interface props {
  people: number;
}
const Passes = ({ people }: props) => {
  return (
    <>
      <Typography
        color="text.secondary"
        sx={{ fontSize: '2.5rem', display: 'flex', justifyContent: 'center', marginLeft: '15px'  }}
      >
        Hemos reservado
      </Typography>
      <ShakingBox>
        <Image
          src="/Cards.svg"
          alt="Stacked Cards"
          width="120"
          height="150"
          style={{ position: 'relative', marginLeft: '15px' }}
        />

        <Typography
          color="text.secondary"
          sx={{ fontSize: '5rem', position: 'absolute' }}
        >
          {people}
        </Typography>
      </ShakingBox>
      <Typography
        color="text.secondary"
        sx={{ fontSize: '2.5rem', display: 'flex', justifyContent: 'center', marginLeft: '15px'  }}
      >
        lugares en tu honor
      </Typography>
    </>
  );
};

export default Passes;
