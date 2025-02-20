import { Playfair_Display } from "next/font/google"
import CssBaseline from "@mui/material/CssBaseline"
import type React from "react"

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
          <CssBaseline />
          {children}
      </body>
    </html>
  )
}

