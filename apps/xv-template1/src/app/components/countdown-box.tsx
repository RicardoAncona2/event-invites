import { Paper, Typography } from "@mui/material"

interface CountdownBoxProps {
  label: string
  value: number
}

export function CountdownBox({ label, value }: CountdownBoxProps) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        textAlign: "center",
        minWidth: 80,
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h4" component="div" color="primary" sx={{ fontWeight: "bold" }}>
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Paper>
  )
}

