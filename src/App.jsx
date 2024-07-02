import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from 'framer-motion'
import ComingSoon from './ComingSoon'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Navbar from './Navbar'

function App() {
  const theme = createTheme({palette: {mode: 'dark'}})
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="App">
      <Navbar />
      <ComingSoon />
    </div>
    </ThemeProvider>
  )
}

export default App
