import Box from '@mui/material/Box';
import { ShakingBox } from './styled';
import { Typography } from '@mui/material';
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
        <img
          src="/Cards.svg"
          alt="Stacked Cards"
          width="120vw"
          height="150vh"
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
