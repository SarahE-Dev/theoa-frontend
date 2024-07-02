import React, { useState } from 'react'
import App from './App';
import { AppBar, Container, Toolbar, Box, Typography } from '@mui/material';
import saturn from '../src/assets/logo-oa.jpg';
import { motion } from 'framer-motion';

const menuItems = ['Syzygy', 'Rose Window', 'Q Symphony'];

export default function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <AppBar position='fixed' sx={{
        boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
    }}>
        <Container maxWidth='lg'>
            <Toolbar variant='regular'
            sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
                borderRadius: '999px',
                bgcolor:
                  theme.palette.mode === 'light'
                    ? 'rgba(255, 255, 255, 0.4)'
                    : 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(24px)',
                maxHeight: 40,
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
              })}
            >
                <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
                <motion.div 
                // make grow on hover
                whileHover={{ scale: 1.1 }}
                >
                <img style={{
                    height: '50px',
                    width: '50px',
                    borderRadius: '25px',
                    objectFit: 'fill',
                    marginRight: '10px',
                    opacity: 0.7
                
                }} src={saturn} alt=""  />
                </motion.div>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
              }}
            >
                {menuItems.map((item) => (
                    <motion.div
                    whileHover={{ scale: 1.1}}
                    >
                        {/* make purple on hover */}
                <Typography key={item} variant='h6' sx={{ color: 'text.primary', ':hover': {color: 'purple'}  }}>
                    {item}
                </Typography>
                </motion.div>
                ))}
            </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
