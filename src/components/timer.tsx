import { useState, useEffect, useRef } from 'react'
import { Button, Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material'

function Timer() {
  const [currentTime, setCurrentTime] = useState(0)
  const [running, setRunning] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [laps, setLaps] = useState<number[]>([])
  const timerId = useRef<number | null>(null)

  useEffect(() => {
    if (running) {
      timerId.current = window.setInterval(() => {
        setCurrentTime((oldTime) => oldTime + (1 / speed))
      }, 1000)
    } else {
      if (timerId.current !== null) {
        clearInterval(timerId.current)
        timerId.current = null
      }
    }

    return () => {
      if (timerId.current !== null) {
        clearInterval(timerId.current)
      }
    }
  }, [running, speed])

  const showTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)
    const ms = Math.floor((seconds % 1) * 100)
    
    const h = hours.toString().padStart(2, '0')
    const m = minutes.toString().padStart(2, '0')
    const s = secs.toString().padStart(2, '0')
    const mil = ms.toString().padStart(2, '0')
    
    return `${h}:${m}:${s}.${mil}`
  }

  const startTimer = () => {
    setRunning(true)
  }

  const stopTimer = () => {
    setRunning(false)
  }

  const resetTimer = () => {
    setRunning(false)
    setCurrentTime(0)
    setLaps([])
    setSpeed(1)
  }

  const saveLap = () => {
    setLaps([...laps, currentTime])
  }

  const increaseSpeed = () => {
    if (speed < 2) {
      setSpeed(speed * 2)
    }
  }

  const decreaseSpeed = () => {
    if (speed > 0.5) {
      setSpeed(speed / 2)
    }
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          {showTime(currentTime)}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', marginTop: 2 }}>
          <Button 
            variant="contained" 
            color="success" 
            onClick={startTimer}
            disabled={running}
          >
            Старт
          </Button>
          <Button 
            variant="contained" 
            color="error" 
            onClick={stopTimer}
            disabled={!running}
          >
            Стоп
          </Button>
          <Button 
            variant="contained" 
            color="warning" 
            onClick={resetTimer}
          >
            Сброс
          </Button>
          <Button 
            variant="outlined" 
            onClick={saveLap}
            disabled={!running}
          >
            Круг
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', marginTop: 2 }}>
          <Button 
            variant="outlined" 
            onClick={increaseSpeed}
            disabled={speed >= 2}
          >
            Ускорить
          </Button>
          <Button 
            variant="outlined" 
            onClick={decreaseSpeed}
            disabled={speed <= 0.5}
          >
            Замедлить
          </Button>
        </Box>

        {laps.length > 0 && (
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" gutterBottom>
              Круги:
            </Typography>
            <List>
              {laps.map((lap, index) => (
                <ListItem key={index}>
                  <ListItemText 
                    primary={`Круг ${index + 1}: ${showTime(lap)}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Paper>
    </Box>
  )
}

export default Timer
