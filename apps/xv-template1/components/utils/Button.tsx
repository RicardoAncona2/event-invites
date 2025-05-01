// components/Button.tsx
"use client";

import { Button as MuiButton, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

const Button = ({ children, ...rest }: CustomButtonProps) => {
  return (
    <MuiButton
      color="inherit"
      sx={{
        "&:hover": {
          textDecoration: "underline",
        },
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
