// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <Box  sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: ' #8B4513' }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Navneet Kumar Shukla
          </Typography>
          <Link to="/"><Button color="inherit">Home</Button></Link>
          <Link to="/about"> <Button color="inherit">About</Button></Link>
          <Link to="/projects"><Button color="inherit">Projects</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
