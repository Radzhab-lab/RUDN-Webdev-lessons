import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Box, Paper, Typography } from '@mui/material'

function PromoInput() {
  const [userInput, setUserInput] = useState('')
  const goTo = useNavigate()

  useEffect(() => {
    if (userInput === 'DISCOUNT2026') {
      goTo('/activated')
    }
  }, [userInput, goTo])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value)
  }

  return (
    <Paper sx={{ padding: 3, maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Введите промокод
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <TextField
          fullWidth
          label="Промокод"
          value={userInput}
          onChange={onInputChange}
          variant="outlined"
        />
      </Box>
    </Paper>
  )
}

export default PromoInput
