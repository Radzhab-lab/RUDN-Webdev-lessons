import { Paper, Typography, Box } from '@mui/material'

function PromoSuccess() {
  return (
    <Paper sx={{ padding: 3, maxWidth: 400, margin: '0 auto' }}>
      <Box>
        <Typography variant="h5" align="center">
          Промокод применен!
        </Typography>
      </Box>
    </Paper>
  )
}

export default PromoSuccess
