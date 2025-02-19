import { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; 
import { IoClose } from "react-icons/io5"; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="tracking-widest">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#5C4033" }}>
          <Toolbar>
            {/* Hamburger Menu for Mobile */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <FiMenu size={28} />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Navnit Kumar Shukla
            </Typography>

            {/* Desktop Links */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Link to="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/about">
                <Button color="inherit">About</Button>
              </Link>
              <Link to="/projects">
                <Button color="inherit">Projects</Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Sliding Drawer Menu */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="w-[250px] h-full bg-[#5C4033] text-white flex flex-col  p-4">
          <IconButton
            onClick={() => setOpen(false)}
            className="self-end text-white"
          >
            <IoClose size={28} />
          </IconButton>
          <Link to="/" className="p-3 text-lg hover:bg-[#8B4513] rounded" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="p-3 text-lg hover:bg-[#8B4513] rounded" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/projects" className="p-3 text-lg hover:bg-[#8B4513] rounded" onClick={() => setOpen(false)}>
            Projects
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
