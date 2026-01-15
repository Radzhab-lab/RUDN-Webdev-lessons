import { Link, NavLink, Outlet } from 'react-router-dom'
import { AppBar, Toolbar, Box, Button } from '@mui/material'

function NavigationBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <nav>
            <Button component={Link} to="/" color="inherit" sx={{ marginRight: 2 }}>
              Главная
            </Button>
            <Button component={NavLink} to="/" color="inherit" sx={{ marginRight: 2 }}>
              Промокод
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 3 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default NavigationBar
