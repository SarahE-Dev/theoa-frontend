import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { Button, FormControl, Input, Snackbar, TextField, Typography, Alert } from '@mui/material';
import emailjs from '@emailjs/browser'

const SERVICE_ID='service_8yvx4g4'
const TEMPLATE_ID='template_69qjizr'
const USER_ID='79gm72lYMHKoKTF0-'

export default function ComingSoon() {
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(email !== ''){
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {email}, USER_ID)
        setShow(true);
        setEmail('');
        }
    };
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
        },
      },
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };

    

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setShow(false);
      };
  
    return (
        <>
        <Snackbar open={show} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%', bgcolor: 'purple' }}
        >
            You've signed up successfully!
        </Alert>
      </Snackbar>
      <motion.div
        className="coming-soon-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}><Typography variant='h1'>Coming Soon</Typography></motion.div>
        <motion.div variants={itemVariants}>
          <Typography variant='h6'>Sign up to get notified when we launch</Typography>
        </motion.div>
  
        <motion.form onSubmit={handleSubmit}>
            <motion.div style={{margin: '20px 0px'}} variants={itemVariants}>
                <TextField required type='email' onChange={(e)=>setEmail(e.target.value)} value={email} size='small' label='Email' />
            </motion.div>
            <motion.div variants={itemVariants}>
                <Button  type="submit" variant='contained'>Sign up</Button>
            </motion.div>
        </motion.form>
  
        {/* Cool Animation Placeholder */}
        <motion.div className="cool-animation" animate={{ rotate: 360 }} transition={{ duration: 5, loop: Infinity }}></motion.div>
      </motion.div>
      </>
    );
}
