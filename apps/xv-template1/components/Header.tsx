import { AppBar, Toolbar, Box, Button } from '@mui/material';
import Link from 'next/link';
const buttonStyles = {
  color: '#ffffff',
  fontFamily: 'General Grotesque',
  '&:hover': {
    textDecoration: 'underline',
  }
}
const Header = () => {
  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: 'primary.light',
        width: '100%',
      }}
    >
      <Toolbar sx={{ width: '100%' }}>
        <Link href={'#home'} passHref>
          <Button
            sx={buttonStyles}
          >
            Sofia Martinez
          </Button>
        </Link>

        <Box sx={{ ml: 'auto' }}>
          <Link href={'#location'} passHref>
            <Button
              component='div'
              sx={buttonStyles}
            >
              Ubicacion
            </Button>
          </Link>
          <Link href={'#confirm'} passHref>
            <Button
              component='div'
              sx={buttonStyles}
            >
              Asistencia
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
