import { AppBar, Toolbar, Box, Button } from '@mui/material';
import Link from 'next/link';
import styles from './Header.module.css';
const Header = () => {
  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: 'primary.light',
      }}
    >
      <Toolbar >
        <Link href={'#home'} passHref>
          <Button
            className={styles.buttonHeader}
          >
            Sofia Martinez
          </Button>
        </Link>
        <Box sx={{ ml: 'auto' }}>
          <Link href={'#location'} passHref>
            <Button
              className={styles.buttonHeader}
            >
              Ubicacion
            </Button>
          </Link>
          <Link href={'#confirm'} passHref>
            <Button
              className={styles.buttonHeader}
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
