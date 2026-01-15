import { Button, Box, Typography, Paper } from '@mui/material'
import useCounter from '../hooks/useCounter'

interface CounterProps {
  initialValue?: number
}

function Counter(props: CounterProps) {
  const counter = useCounter(props.initialValue)

  return (
    <Paper sx={{ padding: 3, margin: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        {counter.count}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button variant="contained" color="primary" onClick={counter.increment}>
          +1
        </Button>
        <Button variant="contained" color="secondary" onClick={counter.decrement}>
          -1
        </Button>
        <Button variant="outlined" color="warning" onClick={counter.reset}>
          Reset
        </Button>
      </Box>
    </Paper>
  )
}

export default Counter
