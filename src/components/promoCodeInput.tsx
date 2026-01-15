import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Box, Paper, Typography } from '@mui/material'

function PromoCodeInput() {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (inputValue === 'DISCOUNT2026') {
      navigate('/activated')
    }
  }, [inputValue, navigate])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <Paper sx={{ padding: 3, maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Enter Promo Code
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <TextField
          fullWidth
          label="Promo Code"
          value={inputValue}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Box>
    </Paper>
  )
}

export default PromoCodeInput
