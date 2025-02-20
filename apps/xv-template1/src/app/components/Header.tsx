import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import useShowHeader from "../hooks/useShowHeader";

const Header = () => {
  const { showHeader } = useShowHeader();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "primary.light",
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "1rem",
        transition: "transform 0.3s ease-in-out",
        transform: showHeader ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: "#ffffff",
            fontFamily: "General Grotesque",
          }}
        >
          Sofia Martinez
        </Typography>
        <Box>
          <Button
            color="inherit"
            sx={{
              "&:hover": {
                textDecoration: "underline", // Add underline on hover
              },
            }}
          >
            Galeria
          </Button>
          <Button
            color="inherit"
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Ubicacion!
          </Button>
          <Button
            color="inherit"
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Asistencia
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
