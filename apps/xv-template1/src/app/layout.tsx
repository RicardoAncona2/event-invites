import { Playfair_Display } from "next/font/google"
import CssBaseline from "@mui/material/CssBaseline"
import type React from "react"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./theme";
import { Header } from "apps/xv-template1/components";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={playfair.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {children}</ThemeProvider>
        </AppRouterCacheProvider>

      </body>
    </html>
  )
}

